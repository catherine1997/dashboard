import React, { useState } from 'react';
import { FcMoneyTransfer } from "react-icons/fc";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuActivity } from "react-icons/lu";
import { SiSimpleanalytics } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';


const variant = {
  expanded: {width:"20%"},
  nonExpanded: {width: "5%"}

}
const NavigationBar =()=> {

  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

    const navLinks = [
        {
        name: "Dashboard",
        icon: <LuLayoutDashboard/>
    },
    
    {
        name: "Actiivity",
        icon: <LuActivity/>
    },
    
    {
        name: "Analytics",
        icon: <SiSimpleanalytics />
    },
    {
        name: "Transactions",
        icon:   <GrTransaction/>
    },
    {
        name: "Help Center",
        icon: <MdOutlineHelpOutline/>
    },
    ]
  
  return (
    <motion.div
    animate = {
      isExpanded ? "expanded" : "nonExpanded"
    }
    variants={variant}
     className={'py-10 flex flex-col border border-r-1 w-1/5 h-screen relative ' + (isExpanded ? "px-10" : "px-2")}>
      <div className='logo flex space-x-4 items-center'>
        <FcMoneyTransfer  />
        <span className={isExpanded ? 'block' : "hidden"}>Money Transfer</span>
      </div>

      <div className='w-5 h-5 bg-[#ffbcbc] text-white rounded-full absolute  -right-[10.5px] top-11 flex items-center justify-center'
      onClick={()=>setIsExpanded(!isExpanded)}
      >
        <MdKeyboardArrowRight />
      </div>

      <div className='mt-10 flex flex-col space-y-8 p-2 rounded'>
        {navLinks.map((item, index)=>
        <div key={index} 
        className={"flex space-x-6 items-center " + 
        (activeNavIndex === index ? "bg-[#ffbcbc] text-white font-semibold" : "")}
        onClick={() => setActiveNavIndex(index)}
        >
            {item.icon}
            <span className={isExpanded ? 'block' : "hidden"}>{item.name}</span></div>
        )}

      </div>
    </motion.div>
  )
}

export default NavigationBar
