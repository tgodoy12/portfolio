import './../styles/App.css';
import Landing from './pages/landing';
import Contact from './pages/contact';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>

   
        
  );
}

export default App; 
