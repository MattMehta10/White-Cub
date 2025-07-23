import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";

const TypeOfProduct = ({type,img}) => {
    return (
        
    <div className='relative group w-65  h-65'>
      <div className="bg-white absolute w-60 z-2 group-hover:-rotate-10 transition-all h-60 border border-gray-400 rounded-xl shadow-md hover:shadow-lg ease-in-out duration-300 flex flex-col overflow-hidden">
    </div>
      <div className="bg-white absolute items-center w-60 z-5 h-60 border hover:scale-105 border-gray-400 rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-300 flex flex-col overflow-hidden">
        <img className='absolute z-3' src={`${img}`} alt={`${type}`} />
        <div className='absolute bottom-0 z-5 flex justify-center bg-white w-full'>
        <h1 className=' text-center font-semibold w-3/4 text-wrap h-12' >{type}</h1>
        </div>
        </div>
        </div>
  );
};

export default TypeOfProduct;
