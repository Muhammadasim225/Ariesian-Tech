import React from 'react'
import homeicon from '../assets/images/homeicon.png'
import profile1 from '../assets/images/profile1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div>
        <div className="box min-w-screen flex flex-row justify-between items-center px-2">
        <div className="relative first">
  <input
    type="search"
    name="searchBar"
    id="searchBar"
    placeholder="Search for a song"
    className="rounded-3xl py-3 px-5 pr-10 w-96 outline-none bg-gray-500 text-white"
  />
  <FontAwesomeIcon
    icon={faSearch}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white cursor-pointer"
  />
</div>

            <div className="gipp flex flex-row space-x-5">
            <div className="second flex flex-row space-x-4">
                <div className="frame rounded-full w-10 h-10 ">
                  <img src={profile1} className='rounded-full object-cover' alt="" />
                </div>
                <div className="scond flex flex-col ">
                    <h1 className='text-white'>Molly Hunter</h1>
                    <h1 className='bg-blue-500 font-sans text-white rounded-full'>Premium</h1>
                </div>
            </div>
            <div className="third bg-gray-500 w-14 rounded-full h-14">
               
            </div>
            <div className="fourth bg-gray-500 w-14 rounded-full h-14">

            </div>

            </div>
           
            
        </div>
      
    </div>
  )
}

export default Header
