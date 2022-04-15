import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";

const navbarLinks = [
  { url: "/", title: "Home" },
  { url: "/Projects", title: "Projects" },
];
function App() {
  return (
    <Router>
    <div >
      <Navbar navbarLinks={navbarLinks}/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Projects" element={<Project/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
