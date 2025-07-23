import React, { useState } from 'react';
import TypeOfProduct from '../Product/SubComponents/TypeOfProduct';


const Category = () => {
    const [type,settype] = useState(["Popsicles","Plant Based Exotic IceCreams","Plant Based Sugar Free IceCreams","Plant Based Butter","Plant Based Curd","Plant Based Premium IceCream"])
    const [img,setimg]= useState(["/Popsicles.png","/Plant Based Exotic IceCreams.jpg","/Plant Based Sugar Free IceCreams.png","/Plant Based Butter.jpg","/Plant Based Curd.png","/Plant Based Premium IceCream.png"])
  return (
    <div className="w-full bg-orange-400 min-h-screen flex items-center justify-center p-6">
      <div className="flex w-full items-center py-5 px-15 gap-6">
        
        {/* Left: Grid of 4 cards */}
        <div className="w-2/3 grid grid-cols-3 grid-rows-2 gap-y-9">
          {[0,1,2,3,4,5].map((index) => (
            <TypeOfProduct key={index} type={type[index]} img={img[index]} />
            
          ))}
        </div>

        {/* Right: Empty Space */}
        <div className="w-1/3 h-full flex items-center justify-center border border-dashed border-gray-400">
          {/* You can leave this empty or put placeholder text */}
          <p className='text-gray-500'>Right space placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
