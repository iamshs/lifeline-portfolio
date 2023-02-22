import React from 'react';
import avatar from "../../assets/avatar.jpg"
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='flex flex-col justify-center gap-8 items-center bgp'>
           <img className='w-[50%] lg:w-[20%]  pt-[3rem] ' src={avatar} alt="" /> 
          <div>
          <h3 className='text-primary font-semibold text-xl'>Arshika Islam Sorony</h3>
           <h1 className='text-2xl'>You Can Wish me at <span className='font-bold text-warning '>30 July</span> </h1>
          </div>
        </div>
    );
};

export default Portfolio;