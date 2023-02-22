import React from "react";
import '../styles/Banner.css'
import './Banner'
import emoji from '../../assets/emoji.png'
import {GiEgyptianProfile} from "react-icons/gi"
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/portfolio")
    }
  return (
   <>
     <section className=" bg max-w-8xl flex items-center flex-col justify-center  ">
        <h2 className="lg:text-3xl text-md font-semibold text-primary">
          👋HI,THERE!!
        </h2>
        <h1 className="animate-character ">I'm ARSHIKA ISLAM</h1>
        <motion.button
          to={"/about"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-active btn-link lg:text-xl text-sm text-warning"
          onClick={handleNavigate}
        >
         <GiEgyptianProfile size={25} />Visit Portfolio
        </motion.button>
        <img className="w-8" src={emoji} alt="" />
      </section>
   </>
  );
};

export default Banner;
