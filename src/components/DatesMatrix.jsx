import React from 'react'

const DatesMatrix = ({dates , onSelect}) => {
  return (
    <div className='mb-6'>
      {dates.map(date => (
        <div className='flex mb-2' key={date}>
            {date.map(day => (
               <div className='w-12 h-12 text-center cursor-pointer hover:bg-blue-600 rounded-[50%] p-2' onClick={() => {onSelect(day)}} key={Math.random()}>{day}</div>
            ))}
        </div>
      ))}
    </div>
  )
}

export default DatesMatrix
