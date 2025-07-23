import React from 'react';
import ItemCard from '../../Component/Product/ItemCard';
import products from '../../../Data/whitecub-2025-07-18 (1).json'; // adjust your path accordingly

const PrevItems = () => {
  // Shuffle products and pick 4 random
  const randomProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <div className="w-full bg-cyan-700 min-h-screen flex items-center justify-center px-15">
        {/* Left: Grid of 4 cards */}
        <div className="w-full grid grid-cols-5 pt-55 gap-2">
          {randomProducts.map((product, index) => (
            <ItemCard key={index} {...product} />
          ))}
        </div>
    </div>
  );
};

export default PrevItems;
