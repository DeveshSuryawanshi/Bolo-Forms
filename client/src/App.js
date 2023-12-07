import "./App.css";
import MainRoutes from "./NavBar&Routes/MainRoutes";
import NavBar from "./NavBar&Routes/NavBar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <NavBar />
        <MainRoutes />
      </div>
    </DndProvider>
  );
}

export default App;
