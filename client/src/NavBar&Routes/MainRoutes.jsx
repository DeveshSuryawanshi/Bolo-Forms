import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Categorize from "../Pages/Categorize";
import Cloze from "../Pages/Cloze";
import Comprehension from "../Pages/Comprehension";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Categorize" element={<Categorize/>}/>
        <Route path="/Cloze" element={<Cloze/>}/>
        <Route path="/Comprehension" element={<Comprehension/>}/>
    </Routes>
  )
}
