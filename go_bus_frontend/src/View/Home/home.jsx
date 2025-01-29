
import { Navbar } from '../Nvabar';
import Footer from "./Fotter";
import  BusSearch from './../user/BusSearch';
function Home() {
  return (
    <div className='mw-100'>
      <Navbar/>
     
       {/* Video background only for the BusSearch area */}
       <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div className='m-2'>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "55%",
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

      
     <div className='fix-bottom' style={{ marginTop: "150px"}}>
      <Footer/>
     </div>
    </div>
    
  
  );
}

export default Home;
