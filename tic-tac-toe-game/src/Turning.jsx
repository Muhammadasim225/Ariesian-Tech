import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GamePage from './GamePage';

const Turning = () => {
const navigate=useNavigate();
const [cross,setCross]=useState(true);
const [circle,setCircle]=useState(true);
const [player1, setPlayer1] = useState('');
const [player2, setPlayer2] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();

    if (player1 && player2) {
      navigate('/gamepage', { state: { player1, player2 } });
    } 
    else {
      alert('Please enter names for both players.');
    }
  };


  return (
    <div className="background-contain">

    <div className='comt flex flex-col space-y-4 items-center'>
        <svg  width="700" height="180">
        <text x="95" y="120"  className='tixer text-7xl font-luckiest text-white mb-10'>Fill the fields</text>
        </svg>
        <form onSubmit={handleSubmit}>
      <div className="btns flex flex-col space-y-6 ">
        <div className="byt flex flex-col space-y-1">
        <label htmlFor="player1 ">Enter your name (Player1)</label>
        <input type="text" name="player1" id="player1" className=' w-96 outline-none p-3 rounded-md ' placeholder='Player1' value={player1} onChange={(e) => setPlayer1(e.target.value)}
 />
        </div>
        <div className="byt flex flex-col space-y-1">

          <label htmlFor="player2 ">Enter your name (Player2)</label>
          <input type="text" name="player2" id="player2" className='outline-none p-3 rounded-md ' placeholder='Player2' value={player2}  onChange={(e) => setPlayer2(e.target.value)} />
          </div>

          <input type="submit" value="Submit" className=' border-2 border-[rgba(255, 255, 255, 0.46)] lucker font-luckiest p-2 w-96 text-3xl bg-[#f4b26f] text-white cursor-pointer' />

          
      </div>
      </form>

    </div>
    </div>

  )
}

export default Turning
