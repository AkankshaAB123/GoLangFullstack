import PageHeader from "../header/PageHeader";

export default function CarCreate() {
    return (
        <>
            <PageHeader />
            <h3> <a href="/" className="btn btn-light">Go Back</a>Add Car</h3>
            <div className="container">

                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Car Number:</label>
                    <input type="text" className="form-control" id="number" placeholder="please enter car number" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="model" className="form-label">Car Model:</label>
                    <input type="text" className="form-control" id="model" placeholder="please enter car model" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="type" className="form-label">Car Type(SUV/ CUV/ Sedan):</label>
                    <input type="text" className="form-control" id="type" placeholder="please enter car type" />
                </div>
                <button className="btn btn-primary">Create Car</button>
            </div>

        </>
    );
}