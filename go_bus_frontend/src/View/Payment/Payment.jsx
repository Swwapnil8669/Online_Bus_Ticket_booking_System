import './payment.css'

 
function Payment() {
   
  return (
  <>
  <div className="header">
 
 </div>
  <center>
 
<hr></hr>
<div className="box">
  <br></br>
Make Your Payment Securely &#128184;
</div>
<br></br>
<center>
<h1>Choose Payment Method</h1>

<p className="p" >&emsp;Choose your Upi option</p>

<div className="paymen_method">

<b></b> 
&emsp;<input type="radio" name="gender" value="male"></input> <b>Pay Using QR Code </b> 
</div><br></br>
<img className="img-road" src="./img/all.jpeg" alt="road" width="20px" height="20px"></img>
<br></br><hr></hr>
<div className="paymen_method">

<input type="radio" name="gender" value="female"></input> <b>Pay Using UPI ID</b> 
</div>

  



 <p className="p">&emsp;Another Payment Option  </p>
 
 <div className="cards">

<b></b> 
<input type="radio" name="gender" value="male"></input> <b>Credit Card</b> 
<hr></hr>

 <input type="radio" name="gender" value="female"></input> <b>Debit card</b>  
 </div>
 <img className="" src="./img/pay_card.jpeg" alt="road" width="100px" height="40px"></img>
 <br></br>
 <hr></hr>
 <br></br>

<div className="header"></div>





</center>


</center>   
 
    </> 

);
  

  }
  


export default Payment;