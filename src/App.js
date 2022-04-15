import './App.css';
import heroimage from './assests/heroImg.jpg'
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <Hero imageSrc={heroimage}/>
    </div>
  );
}

export default App;
