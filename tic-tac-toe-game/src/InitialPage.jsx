import React from 'react';
import background from './assets/images/background.jpg';
import '../src/App.css'
import { useNavigate } from 'react-router-dom'; // Import your CSS file
const InitialPage = () => {
    const navigate=useNavigate();
    const redirection=()=>{
        navigate("/turning");
    }
  return (
    <>
      <div className="background-container">
        {/* Your content goes here */}
        <div className=" flex flex-col title ">
        <svg width="700" height="150">

        <text x="122" y="80" className=' gixer font-bold font-luckiest mb-10'>

            Tic Tac Toe
            </text>
            </svg>

        <div className="content">
          <button className=' border-2 border-[rgba(255, 255, 255, 0.46)] lucker font-luckiest p-6 text-3xl bg-[#f4b26f] text-white' onClick={redirection}>Start Game</button>
          <button className='  border-2  bg-[#f4b26f] border-[rgba(255, 255, 255, 0.46)] lucker font-luckiest p-6 text-3xl text-white'>Exit</button>
        </div>
        </div>

      </div>
    </>
  );
};

export default InitialPage;
