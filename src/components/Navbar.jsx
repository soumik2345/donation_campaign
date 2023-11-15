import React, { useState } from "react";
import {Link , useLocation} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const pathname  = useLocation().pathname;
  const  [aNav,setANav] = useState(false)

  const activeNav =()=>{
      if(aNav===false){
        setANav(true)
      }else{
        setANav(false)
      }
  }

  return (
    <div className="w-full h-16 absolute z-50 bg-[#9b9b9b9e] sm:bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <img src="../../src/assets/Logo.png" alt="Logo" className="w-[10rem]"/>

        <ul className="hidden sm:flex w-2/6 justify-evenly items-center">
          <li className={`${pathname === '/' ?"text-red-500 underline":"hover:underline hover:text-red-500"} font-semibold`}><Link to={"/"}>Home</Link></li>
          <li className={`${pathname === '/donation' ?"text-red-500 underline":"hover:underline hover:text-red-500"} font-semibold`}><Link to={"donation"}>Donation</Link></li>
          <li className={`${pathname === '/statistics' ?"text-red-500 underline":"hover:underline hover:text-red-500"} font-semibold`}><Link to={"statistics"}>Statistics</Link></li>
        </ul>
        <div className="sm:hidden text-2xl mr-5" onClick={()=>{activeNav()}}><AiOutlineMenu/></div>
      </div>
      <ul className={`w-screen h-80 flex flex-col justify-evenly text-center bg-[#9b9b9b9e] ${aNav?"block":"hidden"}`}>
          <li onClick={()=>{activeNav()}} className={`${pathname === '/' ?"text-red-500 underline":"hover:underline hover:text-red-500"} font-semibold`}><Link to={"/"}>Home</Link></li>
          <li onClick={()=>{activeNav()}} className={`${pathname === '/donation' ?"text-red-500 underline":"hover:underline hover:text-red-500"} font-semibold`}><Link to={"donation"}>Donation</Link></li>
          <li onClick={()=>{activeNav()}} className={`${pathname === '/statistics' ?"text-red-500 underline":"hover:underline hover:text-red-500"} font-semibold`}><Link to={"statistics"}>Statistics</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;
