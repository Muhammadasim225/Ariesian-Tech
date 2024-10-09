import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faIcons, faHouse, faRightFromBracket,faTableCellsLarge,faUser} from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  return (
    <div className='lg:block hidden rounded-2xl sidebar-container flex flex-col bg-[#171a21] text-white p-5 w-80 h-screen '>
      {/* App Title */}
      <h1 className='text-2xl text-orange-500 mx-auto font-semibold'>MusicApp</h1>

      {/* Navigation Menu */}
      <nav className='flex flex-col mt-20'>
        <ul className='space-y-4 mx-auto w-full'>
          <li className='flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700 cursor-pointer'>
          <FontAwesomeIcon icon={faHouse} className="w-5 h-5 text-white" />
                      <span>Home</span>
          </li>
          <li className='flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700 cursor-pointer'>
          <FontAwesomeIcon icon={faTableCellsLarge} className="w-5 h-5 text-white" />            <span>Categories</span>
          </li>
          <li className='flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700 cursor-pointer'>
          <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-white" />
                      <span>Artists</span>
          </li>
          <li className='flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700 cursor-pointer'>
          <FontAwesomeIcon icon={faIcons}  className="w-5 h-5 text-white"  />
                      <span>Playlists</span>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <button className='flex items-center gap-4 p-3 mt-40 text-lg rounded-lg cursor-pointer mx-auto'>
      <FontAwesomeIcon icon={faRightFromBracket}  className="w-5 h-5 text-white"   />
              Logout
      </button>
    </div>
  );
}

export default Sidebar;
