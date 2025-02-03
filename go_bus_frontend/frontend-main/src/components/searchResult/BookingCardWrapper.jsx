import React from "react";
import { BookingCard } from "./BookingCard";

import { useContext } from "react";

function BookingCardWrapper({schedule}) {
 // const [schedule,setSchedule] = useContext(ScheduleContext);
  
  return (
    <>
    {
        schedule.map(e=>{
            return (<BookingCard sch={e}></BookingCard>);
        })
    }
    
    </>

  );
}

export default BookingCardWrapper;