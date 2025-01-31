import './passengerDetails.css';
function PassengerDetails() {
  
    return (
      <div className='first_div' width="200px">
        <center>
   <div className='primary'>
        <center><h1  >Passenger Details</h1></center>
      <h2 > &#128100; Passenger Information</h2>
   </div>
  <hr></hr>
   <div className='container'>
  <p >Passenger  |   <b>    Seat No</b> </p> 
  
  <b>Name</b>   <br></br><input type="text" placeholder='Name'></input>  
  <br></br><br></br>
  <b>Age</b><br></br>
  <input type="number" placeholder='Age' width="200px"></input><br></br><br></br>
  <b>Gender</b> <br></br>
  Male<input type="radio" name="gender" value="male"></input>  &emsp;
  Female<input type="radio" name="gender" value="female"></input>
  
  <br></br><br></br>
  <b>State*:</b><br></br>
  <select>
  <option value="Mp">Madhya Pradesh</option>
  <option value="Gj">Gujrat</option>
  <option value="RJ">Rajsthan</option>
  <option value="MH">Maharashtra</option>
  </select>
  </div>
  
  <hr></hr>
  <p> &#128222; Contact Details &#128231; </p>
  <hr></hr>
  
  <div className='container'>
  <br></br>
  <p className='msg'>For invoice or online Ticket Please Share Details</p>
  
  Email ID <br></br> <input type="email"></input>
  <br></br> <br></br>
  Mobile Number <br></br>
  <input type="tel"></input>
  </div>
  
  <div> 
  <a href="terms and conditions">Terms & Conditions</a>
  &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;
  
  <a href="Privacy Policy">Privacy Policy</a>
  
  </div>
  
  <div>
  <br></br> 
  Total  &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;
  &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;
  &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;
  <b>$-----</b>
  <br></br>
  (Tax Included)
  </div>
  
  <div>
   
    </div>
  
  
  </center>
  </div>
  
     
   
       
  
  );
    
  
    }
    
  
  
  export default PassengerDetails;