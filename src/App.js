import {  Route,  Routes } from "react-router-dom";
import Contact from "./Webpage/Contact";
import Home from "./Webpage/Home";
import About from "./Webpage/About";

function App() {
  return (
    <div>
      {/* <h1>Hello App component</h1> */}
      <Routes>
        {/* <Route path="/" element={<Header/>}/> */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      </div>
  );
}

export default App;
