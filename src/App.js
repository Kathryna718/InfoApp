import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Table from "./Table.js"
import List from "./List.js"
import Contact from "./Contact.js"
 import Form from "./Form.js"
import Dropdown from "./Dropdown";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return ( 
    
    
    <div className="App">
     <Navbar/>
     
     
        <Routes> 
          <Route path = "/Table" element ={<Table/>}/>        
          <Route path = "/" element ={<Home/>}/> 
          <Route path = "/List" element ={<List/>}/> 
          <Route path = "/Contact" element ={<Contact/>}/>  
          <Route path = "/Feedback" element ={<Form/>}/>     
        </Routes>
        <Footer/>
        
      
    </div>

    




  );
};
export default App;