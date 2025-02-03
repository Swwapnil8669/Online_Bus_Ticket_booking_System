import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../App';
const FareBox = styled.div`
	height: 400px;
	width: 80%;
	border: 1px solid rgb(206, 202, 202);
	padding:8%;
`;
const ProceedButton = styled.button`
width: 218px;
height: 59px;
color:#ffffff;
background-color: #00b9f5;
margin: 20px 0px 0px;
padding: 15px 9px;
font-size: 18px;
font-weight: 600;
border: 1px solid #00b9f5;
border-radius: 10px;
cursor: pointer;
&:hover{
	background-color: #00b9c0;
}
`;
const ApplyButton = styled.button`
width: 20%;
color:#00b8f8;
font:14px;
background-color: #ffffff;
padding: 5px 10px;
border:1px solid #00b8f8;
cursor: pointer;
height: 38px;
margin: 10px;
`;
const PromoInput = styled.input`

width: 60%;
background-color: #f5f8f9;
padding: 6px;
font-size: 16px;
font-weight: 600;
border: 1px solid black;
outline: none;
`;
const LeftTextHeader = styled.p`
text-align: left;
font-weight: 600;
font-size: 16px;
`;
const TextBox = styled.div`
display: flex;
justify-content: space-between;
`;
const TotalTextBox = styled.div`
display: flex;
justify-content: space-between;
background: #f5f5f5;
color:#4a4a4a;
font-size: 24px;
font-weight: 600;
margin: 30px -10px 0px;
padding: 10px 20px;
`;
const LeftText = styled.p`
text-align: left;
line-height: 0px;
`;
const RightText = styled.p`
text-align: right;
line-height: 0px;
`;
const HeaderText = styled.p`
	color:#4a4a4a;
font-size: 20px;
font-weight: 600;
text-align: left;
margin-top: -5px;
/* margin-left: 10px; */

`;


function generateTransactionId() {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let transactionId = '';
	for (let i = 0; i < 10; i++) {
	  transactionId += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return transactionId;
  }

export const FareDetails=({travellerInfo,setTravellerInfo,scheduleInfo})=>{
	const user = useContext(UserContext);
	const [promoCode,setPromoCode] = useState("");
    const travellers = scheduleInfo.seats.filter(e=>e.isSelected == true);
	const noOfTravellers = travellers.length;
	const navigate = useNavigate();
	
    return(
        <FareBox>
            <HeaderText>Fare Details</HeaderText>
			<hr />
			<LeftTextHeader>ONWARD FARE</LeftTextHeader>
			<TextBox>
			<LeftText>Base Fare </LeftText>
			<RightText>₹{scheduleInfo.busFare * noOfTravellers}</RightText>
			</TextBox>
			
			<TextBox>
			<LeftText>Operator GST</LeftText>
			<RightText>₹{(scheduleInfo.busFare * noOfTravellers )*0.18 }</RightText>
			</TextBox>
            <TextBox>
			<LeftText>No of Traveller</LeftText>
			<RightText>{noOfTravellers}</RightText>
			</TextBox>
			<hr />
			<TotalTextBox>
			<LeftText>Total</LeftText>
			<RightText>₹{(scheduleInfo.busFare * noOfTravellers )*1.18 }</RightText>
			</TotalTextBox>
			<ProceedButton onClick={()=>{
											travellerInfo.paymentStatus = true
											travellerInfo.transactionId = generateTransactionId()
											setTravellerInfo(travellerInfo)
											console.log("in faredetails trvifo=====", travellerInfo)
											navigate("/payment-page", {state:{  travellerInfo,  schedule:scheduleInfo, id:user[0].id, totalFare: (scheduleInfo.busFare * noOfTravellers )*1.18  }})
										}} >
				Proceed to pay</ProceedButton>
        </FareBox>
    )
}
// proceedButton onclick = > onClick={()=>history.push("/payment-page")}
 {/* {
                                        "paymentStatus":true,
                                        "transactionId":123456,
                                        "travellers":[
                                            {
                                                "Travellergender":"MALE",
                                                "fullName":"Chota Bhai",
                                                "age":22,
                                                "seatNo":1
                                            },

                                            {
                                                "Travellergender":"FEMALE",
                                                "fullName":"Elder sister",
                                                "age":28,
                                                "seatNo":2
                                            },
                                            {
                                                "Travellergender":"OTHER",
                                                "fullName":"THEM THEM",
                                                "age":26,
                                                "seatNo":3
                                            }
                                        ]
                                    } */}
