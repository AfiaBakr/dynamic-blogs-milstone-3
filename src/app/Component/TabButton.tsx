import react from "react";
import About from "@/app/about/page";
import {motion} from "framer-motion";

const variants ={
    default: {width:0},
    active: {width:"calc(100%-.075rem)"},
};

const TabButton = ({active, selectTab, children}:any)=> {
    const buttonClassess = active? 'text-white border-b border-purple-500' :'text-[#adb7be]'
    return(
        <div >
        <button onClick={selectTab}>
        <p className= {`mr-3 font-semibold hover:text-white ${buttonClassess}`}>
            {children}
        </p>
        <motion.div 
        animate={active? "active":"default"}
        variants={variants}
        >

        </motion.div>
        </button>
        </div>
    )
};

export default TabButton;