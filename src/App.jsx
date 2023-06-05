import React from 'react';
import { Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      
      <div>
   
      <Navbar></Navbar>
      <Outlet></Outlet>
     <Footer></Footer>
      </div>
    </div>
  );
};

export default App;