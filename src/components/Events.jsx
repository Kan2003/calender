import React from 'react'

const Events = ({day}) => {
    const orderList = {
        1: ["ORDER-ID : 1", "ORDER-ID : 2"],
    12: ["ORDER-ID : 12 ", "ORDER-ID : 15"]
    }
  return (
    <div>
    <p className='font-bold text-[20px]'>Order Dues On {day}</p>
    {orderList[day] && (
          <ul>
            {orderList[day].map((order, index) => (
              <li key={index} className="text-black-500">{order}</li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default Events
