package main
import(
	"fmt"
)
func f1(){
	fmt.Println("This is begining of f1 fun")
	fmt.Println("This is end of f1 fun")
}
func f2(){
	fmt.Println("This is begining of f2 fun")
	fmt.Println("This is end of f2 fun")
}
func f3(){
	fmt.Println("This is begining of f3 fun")
	fmt.Println("This is end of f3 fun")
}
func main(){
	fmt.Println("Start of main")
	defer f1()
	f2()
	f3()
	fmt.Println("End of main")
}