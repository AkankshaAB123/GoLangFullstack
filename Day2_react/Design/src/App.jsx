import CarView from "./cars/CarView"
import CarList from "./cars/CarList"
import CarCreate from "./cars/CarCreate"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="" element={<CarList/>}/>
            <Route path="/car/list" element={<CarList/>}/>
            <Route path="/car/create" element={<CarCreate/>}/>
            <Route path="/car/view" element={<CarView/>}/>
            <Route path="/car/car/create" element={<CarCraete/>}/>
            <Route path="/car/car/view" element={<CarView/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;