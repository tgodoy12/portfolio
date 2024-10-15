import './../styles/App.css';
import Landing from './pages/landing';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        
      </Routes>
    </BrowserRouter>

   
        
  );
}

export default App; 
