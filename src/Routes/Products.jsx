import React from 'react'
import product from '../../Data/whitecub-2025-07-18 (1).json'
import ItemCard from '../Component/Product/ItemCard'

const Products = () => {

  return (
    <div className='bg-[#ffffff] items-center flex flex-col px-30 h-full'>
      <h1 className='text-3xl font-semibold pt-35'>Our Products</h1>
      <div className="grid pt-15 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {product.map((product, index) => (
        <ItemCard key={index} {...product} />
      ))}
    </div></div>
  )
}

export default Products