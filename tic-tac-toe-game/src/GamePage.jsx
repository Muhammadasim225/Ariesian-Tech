import '../src/App.css'; // Import your CSS file
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons'; // Regular icon
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Strike from './Strike'; // Cross icon
 // Regular icon
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const GamePage = () => {
    const location = useLocation();
    const [winner, setWinner] = useState(null);
    const [strikeClass,setStrikeClass]=useState();
    const { player1, player2 } = location.state || {};
    console.log("Player 1:",player1);
    console.log("Player 2:",player2);

const navigate=useNavigate();

    const [grid, setGrid] = useState(Array(9).fill(null));
    const [isXTurn,setIsXTurn]=useState(true);
    console.log(grid);

    const handleClick=(index)=>{
        if (grid[index] || winner) return; // Prevent changing the value if there's already a winner or the cell is taken

        const copyState=[...grid];
        copyState[index]= isXTurn ? "X":"0"
        setGrid(copyState);
        setIsXTurn(!isXTurn);

    }
    const playAgain=()=>{
        setGrid(Array(9).fill(null));
        setStrikeClass(null);
        setWinner(null);
        // Reset strike class when playing again

       
    }
    const winLogic=[{combo:[0,1,2],strikeClass:"strike-row-1"},
        {combo:[3,4,5],strikeClass:"strike-row-2"},{combo:[6,7,8],strikeClass:"strike-row-3"},{combo:[0,3,6],strikeClass:"strike-column-1"},{combo:[1,4,7],strikeClass:"strike-column-2"},{combo:[2,5,8],strikeClass:"strike-column-3"},{combo:[0,4,8],strikeClass:"strike-diagonal-1"},{combo:[2,4,6],strikeClass:"strike-diagonal-2"}];
        useEffect(() => {

    const checkWinner=()=>{
    
        for (const {combo,strikeClass} of winLogic){
          const [a,b,c]=combo;
            if(grid[a]!==null && grid[a]===grid[b] && grid[b]===grid[c]){
                setStrikeClass(strikeClass);
                setTimeout(() => {
                    setWinner(grid[a]);
                }, 1500);
                return true;
            }
        }
        return false;
    };

    if (!checkWinner()) {
        if (!grid.includes(null)) {
            setTimeout(() => {
                setWinner("Game Drawn");
            }, 1500);
        }
    }
}, [grid]);
    
    const renderIcon = (value) => {
        if (value === 'X') {
            return <FontAwesomeIcon className='text-9xl text-blue-600' icon={faXmark} />;
        } else if (value === '0') {
            return <FontAwesomeIcon className='text-8xl text-red-600' icon={faCircle} />;
        }
        return null; // Render nothing if value is null
    };
    const gameExit=()=>{
        navigate("/");
    }

  return (
    <>
      {/* Background Container */}
      <div className="background-contain   ">
        
        {/* Tic-Tac-Toe Grid */}
        
        {
            winner  ? (<div className='flux flex flex-col space-y-20'><h1 className='text-8xl text-black font-luckiest'>{winner === "Game Drawn" ? "Game Drawn" : `${winner} Won`}
</h1><div className="btns flex flex-col space-y-5 font-luckiest text">
                 <button className=' border-2 border-[rgba(255, 255, 255, 0.46)] lucker font-luckiest p-6 text-2xl bg-[#f4b26f] text-white' onClick={playAgain}>Play Again</button><button className=' border-2 border-[rgba(255, 255, 255, 0.46)] lucker font-luckiest p-6 text-2xl bg-[#f4b26f] text-white' onClick={gameExit}>Back to main menu</button>
                
                </div></div>):(<><h1
        className={`font-bold text-black transition-all font-luckiest ${
            isXTurn ? ' text-4xl text-blue-600 mx-28' : 'text-4xl mx-28 text-black'
        }`}
    >
        {player1}
    </h1> <div className="flex flex-row items-center"> <div strikeClass={strikeClass} className="grid grid-cols-3 grid-rows-3">
                <div onClick={()=>{handleClick(0)}} className="p-3 cursor-pointer w-32 h-32 border-r-2 border-b-2 border-gray-800">{renderIcon(grid[0])}</div>
                <div onClick={()=>{handleClick(1)}} className=" cursor-pointer p-3 w-32 h-32 border-b-2 border-l-2 border-r-2 border-gray-800">{renderIcon(grid[1])}</div>
                <div onClick={()=>{handleClick(2)}} className=" cursor-pointer p-3  w-32 h-32 border-b-2 border-l-2 border-gray-800">{renderIcon(grid[2])}</div>
                <div onClick={()=>{handleClick(3)}} className=" cursor-pointer p-3 w-32 h-32 border-t-2 border-r-2 border-b-2 border-gray-800">{renderIcon(grid[3])}</div>
                <div onClick={()=>{handleClick(4)}} className="w-32 h-32 border-2 p-3 border-gray-800">{renderIcon(grid[4])}</div>
                <div onClick={()=>{handleClick(5)}} className="cursor-pointer w-32 h-32 p-3 border-t-2 border-l-2 border-b-2 border-gray-800">{renderIcon(grid[5])}</div>
                <div onClick={()=>{handleClick(6)}} className="cursor-pointer w-32 h-32 p-3 border-t-2 border-r-2 border-gray-800">{renderIcon(grid[6])}</div>
                <div onClick={()=>{handleClick(7)}} className="cursor-pointer w-32 h-32 p-3 border-t-2 border-l-2 border-r-2 border-gray-800">{renderIcon(grid[7])}</div>
                <div onClick={()=>{handleClick(8)}} className="cursor-pointer w-32 h-32 p-3 border-l-2 border-t-2 border-gray-800" >{renderIcon(grid[8])}</div>
                <Strike strikeClass={strikeClass}></Strike>
              </div>
              
              </div><h1
        className={`font-bold text-black transition-all font-luckiest ${
            !isXTurn ? ' text-4xl text-red-600 mx-28' : 'text-4xl mx-28 text-black'
        }`}
    >
        {player2}
    </h1></>)  
        } 
             </div>
    </>
  );
}

export default GamePage;
