import React from "react";
import Layout from "./layout";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invest from "../pages/Invest";
import Futures from "../pages/Futures";


function App() {
 return(

   <Router>
      <Routes>
        {/* All pages use Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="invest" element={<Invest />} />
            <Route path="futures" element={<Futures />} />
        </Route>
      </Routes>
    </Router>
 )
  
}

export default App;
