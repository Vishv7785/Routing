import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Contact from "./Webpage/Contact";
import Home from "./Webpage/Home";
import About from "./Webpage/About";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />

      </Routes>
    </Router>
  );
}

export default App;
