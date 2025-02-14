import PageHeader from "../header/PageHeader";

export default function CarList() {
    return (
        <>
            <PageHeader />
            <h3>Car List</h3>
            <div className="container">
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">number</th>
                            <th scope="col">model</th>
                            <th scope="col">class</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">car1</th>
                            <td>KA09asc1231</td>
                            <td>Zen</td>
                            <td>smallcar</td>
                            <td><a className="btn btn-success" href="/car/view?id=car1">view</a></td>
                        </tr>
                        <tr>
                            <th scope="row">car2</th>
                            <td>KA09asc3211</td>
                            <td>Beatle</td>
                            <td>hatchback</td>
                            <td><a className="btn btn-success" href="/car/view?car2">view</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}