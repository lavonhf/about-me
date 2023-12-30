import { FaReact,FaVuejs,FaLaravel,FaBootstrap,FaPython   } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";

export default function Hero(){
    return<div className="h-screen gap-5 font-mono flex md:justify-center md:items-center flex-col pt-8 px-3">
        <b 
        className="text-3xl md:text-5xl fade-in text-slate-300">Nauval Hammam Faiq</b>
        <p className="text-base md:text-3xl md:w-auto justify-end flex text-slate-300 fade-in">Full Stack Web Developer</p>
        <div className="flex flex-row gap-2 md:gap-6 text-2xl md:w-auto md:justify-center justify-end right-4 fade-in">
            <FaReact className="icon react text-sky-500"/>
            <FaVuejs className="icon  vue text-green-600" />
            <FaPython className="icon python text-blue-900"/>
            <FaLaravel className="icon laravel text-red-800 "/>
            <FaBootstrap className="icon bootstrap text-violet-800"/>
            <TbBrandMysql className="icon mysql text-sky-500" />
        </div>
    </div>
}