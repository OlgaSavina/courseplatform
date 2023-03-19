import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home, CoursePage } from "./pages";


function App() {
  return (
    <div className="App">
    
        <Routes>
        <Route path="/" element = {<Home/>} exact />
        <Route path="/:id" element = {<CoursePage />} exact />
        
        </Routes>
    
    </div>
  );
}

export default App;
