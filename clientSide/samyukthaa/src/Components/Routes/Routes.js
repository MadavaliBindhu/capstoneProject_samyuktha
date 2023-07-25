import React from 'react';
import Filecomplaint from '../Complaints/Filecomplaint';
import NavBar from '../Navbar/navBar'; 
import Home from '../Homepage/home_page';
import Footer from '../Footer/Footer';
import {Routes,Route} from "react-router-dom";

function Routers() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/logo" Component={Home}/>
        <Route path="/fileComplaint" Component={Filecomplaint}/>
        
      </ Routes>
      
      
      <Footer />
  

    </div>
  );
}

export default Routers;