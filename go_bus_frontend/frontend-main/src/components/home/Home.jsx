import Header from "../header/Header";

import "./home.css";

const Home = ({ handleSearch }) => {
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <center>
        <img
          style={{height:"700px"}}
          src={process.env.PUBLIC_URL + "/img.png" }
          alt="My Image"
        />
      </center>
    </div>
  );
};

export default Home;
