import "./App.css";
import heroimage from "./assests/heroImg.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const navbarLinks = [
  { url: "/", title: "Home" },
  { url: "/Projects", title: "Projects" },
];
function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={heroimage} />
    </div>
  );
}

export default App;
