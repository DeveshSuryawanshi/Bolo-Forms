import logo from './logo.svg';
import './App.css';
import MainRoutes from './NavBar&Routes/MainRoutes';
import NavBar from './NavBar&Routes/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
