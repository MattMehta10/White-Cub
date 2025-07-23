import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';
const ItemCard = ({ name, link, price, label, buttonLink, image, badge }) => {
  const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="bg-white relative w-65 h-95 border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
      
      <div className='group'>
      <div className='flex flex-col gap-3 z-20 absolute top-2 right-2'>
      <span className='opacity-0 group-hover:opacity-50 transition-opacity duration-300 absolute top-0.5 right-0.5 bg-black h-20 blur-xl w-9' ></span>
      <div className='flex group-hover:opacity-100 group-hover:translate-x-0 transition-all  flex-col translate-x-13 opacity-0 justify-center cursor-pointer hover:text-white hover:bg-[#a43890] ease-in-out duration-400  items-center rounded-xl bg-white h-10 w-10'><IoMdHeartEmpty/></div>
      <div className='flex group-hover:opacity-100 group-hover:translate-x-0 transition-all  flex-col translate-x-13 opacity-0 delay-75 justify-center cursor-pointer hover:text-white hover:bg-[#a43890] ease-in-out duration-400 items-center rounded-xl bg-white h-10 w-10'><IoEye/></div>
      </div>

      {/* Badge */}
      {badge && (
        <div className="absolute z-20 bg-red-500 rounded-tl-lg text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
          {badge}
        </div>
      )}

      {/* Image */}
      <Link
                  key={name}
                  to={`/products/${slugify(name)}`}
                >

      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={(image)?`${image}`:`${name}.png`}
          alt={name}
          className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
      </a>
      </Link>

      </div>
      
      {/* Content */}
      <div className="pt-2 pb-4 px-4 flex flex-col flex-grow">
        <h2 className="text-[15px] mt-1 font-semibold leading-snug text-black overflow-hidden break-words"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    maxHeight: '2.8em',
  }}>{name}</h2>
        <p className="text-pink-600 font-semibold mb-2">{price}</p>

        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto group bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center text-center py-2 rounded-lg transition-colors duration-300"
        >
          <div className='relative flex'>
          <h1 className='group-hover:opacity-0 duration-300'>
          Add to Cart
          </h1>
          <GiShoppingCart className='absolute -translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:block delay-100 group-hover:opacity-100 transition-all duration-500 w-full text-2xl'/>
          </div>

        </a>
      </div>
    </div>
  );
};

export default ItemCard;
