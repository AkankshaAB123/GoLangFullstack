package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Config
var mongoUri string = "mongodb://localhost:27017"
var mongoDbName string = "cps_app_db"
var mongoCollectionCar string = "cars"

// Database variables
var mongoclient *mongo.Client
var carCollection *mongo.Collection

// Model Car for Collection "cars"
type Car struct {
	ID     primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Number string             `json:"number" bson:"number"`
	Model  string             `json:"model" bson:"model"`
	Type   string             `json:"type" bson:"type"`
}

// Connect to MongoDB
func connectDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var errrorConnection error
	mongoclient, errrorConnection = mongo.Connect(ctx, options.Client().ApplyURI(mongoUri))
	if errrorConnection != nil {
		log.Fatal("MongoDB Connection Error:", errrorConnection)
	}

	carCollection = mongoclient.Database(mongoDbName).Collection(mongoCollectionCar)
	fmt.Println("Connected to MongoDB!")
}

// POST /cars
func createCar(c *gin.Context) {
	var jbodyCar Car

	// Bind JSON body to jbodyCar
	if err := c.BindJSON(&jbodyCar); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Insert car into MongoDB
	result, err := carCollection.InsertOne(ctx, jbodyCar)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create car"})
		return
	}

	// Extract the inserted ID
	carId, ok := result.InsertedID.(primitive.ObjectID)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse inserted ID"})
		return
	}
	jbodyCar.ID = carId

	// Read the created car from MongoDB
	var createdCar Car
	err = carCollection.FindOne(ctx, bson.M{"_id": jbodyCar.ID}).Decode(&createdCar)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch created car"})
		return
	}

	// Return created car
	c.JSON(http.StatusCreated, gin.H{
		"message": "Car created successfully",
		"car":     createdCar,
	})
}

// GET /cars
func readAllCars(c *gin.Context) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := carCollection.Find(ctx, bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch cars"})
		return
	}
	defer cursor.Close(ctx)

	// Ensure cars is an empty slice, not nil
	cars := []Car{}
	if err := cursor.All(ctx, &cars); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse cars"})
		return
	}

	c.JSON(http.StatusOK, cars)
}

// GET /cars/:id
func readCarById(c *gin.Context) {
	id := c.Param("id")

	// Convert string ID to primitive.ObjectID
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var car Car
	err = carCollection.FindOne(ctx, bson.M{"_id": objectID}).Decode(&car)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Car not found"})
		return
	}

	c.JSON(http.StatusOK, car)
}

// PUT /cars/:id
func updateCar(c *gin.Context) {
	id := c.Param("id")
	// Convert string ID to primitive.ObjectID
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}
	var jbodyCar Car

	if err := c.BindJSON(&jbodyCar); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var oldCar Car

	err = carCollection.FindOne(ctx, bson.M{"_id": objectID}).Decode(&oldCar)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Car not found"})
		return
	}
	if jbodyCar.Number!=""{
		oldCar.Number = jbodyCar.Number
	}
	if jbodyCar.Model!=""{
		oldCar.Model = jbodyCar.Model
	}
	if jbodyCar.Type!=""{
		oldCar.Type = jbodyCar.Type
	}
	result, err := carCollection.UpdateOne(ctx, bson.M{"_id": objectID}, bson.M{"$set": oldCar})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update car"})
		return
	}

	if result.MatchedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Car not found"})
		return
	}
	// Return updated car
	c.JSON(http.StatusOK, gin.H{
		"message": "Car updated successfully",
		"car":     oldCar,
	})
}

// DELETE /cars/:id
func deleteCar(c *gin.Context) {
	id := c.Param("id")
	// Convert string ID to primitive.ObjectID
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	result, errDelete := carCollection.DeleteOne(ctx, bson.M{"_id": objectID})
	if errDelete != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete car"})
		return
	}

	if result.DeletedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Car not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Car deleted successfully"})
}

func main() {
	// Connect to MongoDB
	connectDB()

	// Set up Gin router
	r := gin.Default()
	// CORS Configuration
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // React frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	// Routes
	r.POST("/cars", createCar)
	r.GET("/cars", readAllCars)
	r.GET("/cars/:id", readCarById)
	r.PUT("/cars/:id", updateCar)
	r.DELETE("/cars/:id", deleteCar)

	// Start server
	r.Run(":8080")
}