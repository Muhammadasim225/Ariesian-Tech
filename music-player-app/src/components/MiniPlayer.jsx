import React from 'react'
import pop6 from '../assets/images/pop6.jpg'
import audio2 from '../assets/audios/audio2.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faShuffle,faPlay,faEllipsisVertical,faVolumeHigh,faHeart,faRepeat ,faBackwardStep,faForwardStep,faPause} from '@fortawesome/free-solid-svg-icons';
import ReactSlider from 'react-slider';


const MiniPlayer = ({show,playMusic,pauseMusic,audioRef}) => {
    const preventHorizontalKeyboardNavigation = (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
        }
      };
      const [volume, setVolume] = useState(50);

      const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        console.log("Volume:", event.target.value); // You can handle volume here
      };

  return (
    <>  <div className=" z-20 fixed bottom-0 left-0 contai w-full bg-[#171a21] h-20 flex items-center justify-evenly p-4 ">
        <div className="firstBlock items-center flex flex-row space-x-2 pr-32">
            <img src={pop6} alt="" className='w-14 h-14' />
            <div className="miver flex flex-col">
            <h1 className='title text-white text-lg'>Name</h1>
            <h1 className='movie-name text-sm text-white'>Jawan</h1>
            </div>
        </div>
        <div className="second-block flex flex-row space-x-6 pr-16 items-center">
        <FontAwesomeIcon icon={faEllipsisVertical} className='text-white text-lg cursor-pointer' />
        <FontAwesomeIcon icon={faHeart} className='text-white text-lg cursor-pointer' />
    
            
        </div>
        <div className="thirdBlock flex items-center flex-row space-x-8">
            <div className="oval border border-black rounded-full p-3 bg-white">
                <h1 className='numb text-xs text-black'>00:01/00:18</h1>
            </div>
            <div className="repeat">
            <FontAwesomeIcon icon={faRepeat} className='text-lg text-white cursor-pointer' />
            </div>
            <div className="previous">
            <FontAwesomeIcon icon={faBackwardStep} className='text-white text-lg cursor-pointer' />
            </div>
            <div className="play">
            {show ?(<FontAwesomeIcon  icon={faPause} onClick={pauseMusic} className='text-lg text-white cursor-pointer' />): (<FontAwesomeIcon  icon={faPlay} onClick={playMusic} className='text-lg text-white cursor-pointer' />)}             </div>
            <div className="next">
            <FontAwesomeIcon icon={faForwardStep} className='text-lg text-white cursor-pointer' />
            </div>
            <div className="shuffle">
            <FontAwesomeIcon icon={faShuffle} className='text-lg text-white cursor-pointer' />
            </div>
    
        </div>
        <div className="fourthBlock flex flex-row items-center space-x-5 pl-16">
            <div className="speaker relative" >
           
            <FontAwesomeIcon icon={faVolumeHigh}  
       className='text-lg text-white cursor-pointer' />
            </div>
            <div className="oval border border-black rounde-lg p-3 bg-white rounded-full">
                <h1 className='numb text-xs text-black font-semibold  '>Audio: High</h1>
            </div>
            <div className="nextSongs flex flex-col pl-32 cursor-pointer">
                <h1 className='nxtSongs text-white text-md'>Up Next
                </h1>
                <h1 className='nxtsongsname text-white text-sm'>Main Khiladi...</h1>
            </div>
    
        </div>
    
    </div>
    <audio ref={audioRef} src={audio2} />

    </> 
  )}
  


export default MiniPlayer
