import { FaReact,FaVuejs,FaLaravel,FaBootstrap,FaPython   } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";

export default function Hero(){
    return<div className="h-screen text-slate-300 font-mono flex md:justify-center md:items-center flex-col pt-8 px-3">
        <b 
        className="text-3xl md:text-5xl fade-in">Nauval Hammam Faiq</b>
        <p className="text-base md:text-3xl mt-9 md:w-auto justify-end flex  fade-in">Full Stack Web Developer</p>
        <div className="flex flex-row gap-2 md:gap-6 text-2xl md:w-auto md:justify-center justify-end right-4 fade-in">
            <FaReact/>
            <FaVuejs />
            <FaPython />
            <FaLaravel />
            <FaBootstrap />
            <TbBrandMysql />
        </div>
    </div>
}