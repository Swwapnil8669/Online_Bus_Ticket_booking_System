import React from "react";
import { Navbar } from './../nvabar';
import {BusSearch} from '../user/BusSearch';
function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        <BusSearch/>
      </div>
    </div>
  
  );
}

export default Home;
