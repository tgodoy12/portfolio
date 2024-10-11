import './../styles/App.css';
import Landing from './pages/landing';
import Contact from './pages/contact';
import Projects from './pages/projects';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>

   
        
  );
}

export default App; 
