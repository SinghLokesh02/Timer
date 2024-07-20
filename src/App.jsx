import { useState } from 'react'
import React from 'react'

const App = () => {
  const [timer, setTimer] = useState(0);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");
  const [isStarted, setIsStarted] = useState(false);

  // Function to set the time on click of button of minute or hour

  const pad = (num) => {
    return num.toString().padStart(2, '0');
  };
  
  const setTime = (time,type) => {
    if(type === 'hour'){
      let hour = parseInt(time);
      let minutes = parseInt(time * 60);
      setHours(pad(hour));
      setMinutes(pad(minutes % 60));
    }
    else{
      setSeconds("00");
      setHours("00");
      setMinutes("00"); 
      let minute = parseInt(time);
      setMinutes(pad(minute));

    }
  };

  // Start Timer Function
 
 
 

  

  
  return (
    <div className='container bg-black text-white p-5 w-[100%] md:h-[100vh] h-full'>
      <h1 className='text-center text-3xl p-3 font-medium'>Timer App using React</h1>

      <div className="hours">
      <h1 className='text-3xl mx-3 my-4 border-b p-2'>Hours</h1>
        <button className='border-[3px] border-lime-300 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1 ' onClick={()=>{
          setTime(1,'hour');
          console.log('1 hour');
          }}>1 hours</button>
        <button className='border-[3px] border-violet-700 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1' onClick={()=>{
          setTime(1.5,'hour');
        }}>1.5 hours</button>
        <button className='border-cyan-600 font-bold m-2 border-[3px] md:inline block md:w-fit w-full md:p-3 p-1' onClick={()=>{
          setTime(2,'hour');
        }}>2 hours</button>
        <button className='border-[3px] border-grey-400 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1' onClick={()=>{
          setTime(3,'hour');
        }}>3 hours</button>
        <button className='border-[3px] border-purple-600 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1' onClick={()=>{
          setTime(5,'hour');
        }}>5 hours</button>
      </div>

      <div className="minutes">
        <h1 className='text-3xl mx-3 my-4 border-b p-2'>Minutes</h1>
        <button className='border border-red-600 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1 ' onClick={()=>{
          setTime(10)
        }}>10 minutes</button>
        <button className='border border-green-600 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1 ' onClick={()=>{
          setTime(20)
        }}>20 minutes</button>
        <button className='border border-yellow-600 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1 ' onClick={()=>{
          setTime(30)
        }}>30 minutes</button>
        <button className='border border-blue-600 font-bold m-2 md:inline block md:w-fit w-full md:p-3 p-1 ' onClick={()=>{
          setTime(50)
        }}>50 minutes</button>
      </div>

      <div className="time-count my-5">
        <h1 className='text-4xl text-center'>{`${hours}:${minutes}:${seconds}`}</h1>
      </div>
      

      <div className="btns flex justify-center m-5 gap-5 flex-col md:flex-row">
      <button className='bg-green-500 font-medium rounded hover:bg-green-700 p-3' onClick={()=>{
        startTimer();
      }}>Start Timer</button>
      <button className='bg-red-500 font-medium rounded px-8 hover:bg-red-700 p-3' onClick={()=>{
        stopTimer();
      }}>Reset</button>
      </div>
    </div>
  )
}



export default App
