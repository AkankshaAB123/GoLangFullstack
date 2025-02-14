import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import axios from 'axios'
function CarEdit() {
    const [car, setCar] = useState({id:'',number:'',model:'',type:''});
    const params= useParams();
    const navigate = useNavigate();
    const txtBoxOnChange = event => {
        const updatableCar = {...car};
        updatableCar[event.target.id] = event.target.value;
        setCar(updatableCar);
    };
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
    const updateCar = async () => {
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.put(`${baseUrl}/cars/${params.id}`,{...car})
            const updatedCar = response.data.car;
            setCar(updatedCar);
            alert(response.data.message)
            navigate('/cars/list')
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
            
            <h3><a href="/cars/list" className="btn btn-light">Go Back</a>Edit Car</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label for="number" className="form-label">Car Number:</label>
                    <input type="text" className="form-control" id="number" 
                        placeholder="please enter car number"
                        value={car.number} 
                        onChange={txtBoxOnChange}/>
                </div>
                <div className="form-group mb-3">
                    <label for="model" className="form-label">Car Model:</label>
                    <input type="text" className="form-control" id="model" 
                        placeholder="please enter car model"
                        value={car.model} 
                        onChange={txtBoxOnChange}/>
                </div>
                <div className="form-group mb-3">
                    <label for="type" className="form-label">Car Type(SUV/ CUV/ Sedan):</label>
                    <input type="text" className="form-control" id="type" 
                        placeholder="please enter car type"
                        value={car.type} 
                        onChange={txtBoxOnChange}/>
                </div>
                <button className="btn btn-info"
                    onClick={updateCar}>Update Car</button>
            </div>
        </>
    );
}

export default CarEdit;