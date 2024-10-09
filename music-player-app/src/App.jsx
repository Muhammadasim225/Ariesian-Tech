import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SongCarousel from './components/SongCarousel'
import Categoryselect from './components/Categoryselect'
import Popularsongs from './components/Popularsongs'
import ReactSlider from 'react-slider';

function App() {

  return (
    <>
  <div className="flex md:flex-row sm:flex-col sm:flex-col bg-[#0B0D14] p-5 lg:p-5 lg:w-full md:w-full sm:w-full">
      <Sidebar/>
      <div className="flex flex-col w-[1000px] px-2 pl-3 ">
        <Header />
        <SongCarousel></SongCarousel>
        <Categoryselect></Categoryselect>
        <Popularsongs></Popularsongs>
      </div>
    </div>  

        
  </>
  )
}


export default App
