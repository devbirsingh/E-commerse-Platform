import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Product from '../../../Backend/models/product.model';
import ProductCard from '../components/ProductCard';
const Cart = () => {
  const items = useSelector(state => state.cart.items);
  
  return (
    <div>
      {items.map((product) => {
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      })}

    </div>
  )
}

export default Cart
