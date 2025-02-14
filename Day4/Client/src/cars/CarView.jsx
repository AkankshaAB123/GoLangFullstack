import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import axios from 'axios'
function CarView() {
    const [car, setCar] = useState({id:'',number:'',model:'',type:''});
    const params= useParams();
    const readById = async () => {
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.get(`${baseUrl}/cars/${params.id}`)
            const queriedCar = response.data;
            setCar(queriedCar);
        } catch(error) {
            alert('Server Error');
        }
    };
    useEffect(() => {
        readById();
    },[]);
    return(
        <>
            <PageHeader/>
            
            <h3><a href="/cars/list" className="btn btn-light">Go Back</a>View Car</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label for="number" className="form-label">Car Number:</label>
                    <div className="form-control" id="number">{car.number}</div>
                </div>
                <div className="form-group mb-3">
                    <label for="model" className="form-label">Car Model:</label>
                    <div className="form-control" id="model">{car.model}</div>
                </div>
                <div className="form-group mb-3">
                    <label for="type" className="form-label">Car Type(SUV/ CUV/ Sedan):</label>
                    <div className="form-control" id="type">{car.type}</div>
                </div>
            </div>
        </>
    );
}

export default CarView;