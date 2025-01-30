
import { Navbar } from '../Nvabar';
import Footer from "./Fotter";
import  BusSearch from './../user/BusSearch';
import './box.css';
import { FaCheckCircle } from "react-icons/fa";
function Home() {
  return (
    <div>
      <Navbar/>
     
       {/* Video background only for the BusSearch area */}
       <div style={{ position: "relative", overflow: "hidden", height: "450px"}}>
        <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width:"100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="./background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        </div>
        {/* Center the BusSearch component */}
        <div style={{ position: "relative", zIndex: 1, padding: "50px 20px" }}>
          <BusSearch />
        </div>
      </div>
      
      <div className="container">
      <div className="content">
        <h1>ENJOY THE APP!</h1>
        <ul className="features">
         
        <FaCheckCircle className='text-success'/>
          <li className='h4'>Quick access</li>
          <FaCheckCircle className='text-success'/>
          <li className='h4'>Superior live tracking</li>
        </ul>
        <div className="download-options">
          <div className=" d-inline-block" >
          <img src="./img/Or.png" class="rounded" alt="Qr Code" style={{width: "150px"}}/>
              <p style={{}}>Scan to download</p>
          </div>
          <br/>
          <div >
          <img src="./img/play.jpg" class="rounded" alt="Qr Code" style={{width: "200px",marginTop:"30px"}}/>
          <p>Download The App No</p>
          </div>
        </div>
        <div className="ratings">
          <div className="rating">
            <p class="h3">4.5 ★</p>
            <p class="h5">50M+ downloads</p>
            <p class="h5">Play Store</p>
          </div>
          <div className="rating">
            <p class="h3">4.6 ★</p>
            <p class="h5">50M+ downloads</p>
            <p class="h5">App Store</p>
          </div>
        </div>
      </div>
    </div>

      
     <div className='fix-bottom' style={{ marginTop: ""}}>
      <Footer/>
     </div>
    </div>
    
  
  );
}

export default Home;
