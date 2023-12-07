import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import CreateFrom from "../Pages/CreateFrom";
import GenratedForm from "../Pages/GenratedForm";


export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createform" element={<CreateFrom/>}/>
        <Route path="/genratedfrom" element={<GenratedForm/>}/>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  )
}
