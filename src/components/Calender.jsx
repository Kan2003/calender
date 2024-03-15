import React, { useState } from 'react'
import CalenderHeader from './CalenderHeader'
import Weeks from './Weeks'
import DatesMatrix from './DatesMatrix'
import Events from './Events'

const generateDates = () => {
    const calender = [[]]

    const today = new Date()
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1)
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)

    let week = 0;

    for(let i = 0 ; i < startDate.getDay(); i++){
        calender[week].push(null);
    }

    for(let i = 1 ; i<= endDate.getDate(); i++){
        if(calender[week].length === 7) {
            week++;
            calender[week] = [];
        }
        calender[week].push(i);
    }

    while(calender[week].length < 7){
        calender[week].push(null); 
    }
    return calender;
}
const Calender = () => {
    const dates = generateDates();
    const [selectedDay , setSelectedDay] = useState(null);

    const daySelectHander = (day) => {
        setSelectedDay(day);
    }
  return (
    <div className='bg-white p-6 rounded-xl shadow-md w-96'>
      <CalenderHeader/>
      <Weeks/>
      <DatesMatrix dates={dates} onSelect={daySelectHander}/>
      <Events day={selectedDay}/>
    </div>
  )
}

export default Calender
