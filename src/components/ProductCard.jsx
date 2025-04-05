import { ShoppingCart } from 'lucide-react'
import React, { useEffect } from 'react'
import { setCart } from '../Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector(store => store.cart)

  const addToCart = (product) => {
    const productExists = cart.some(item => item.id === product.id);
    if (productExists) {
      console.log("Product is already in the cart!");
      let newUnit = product.unit
      newUnit += 1;
      dispatch(setCart([...cart])); // Return the same cart without adding duplicate
      toast.success("Product is already in the cart!")
    } else {
      console.log("Product added to cart.");
      dispatch(setCart([...cart, product])) ; // Add product if not already in cart
      toast.success("Product is added to the cart!")
    }
    // if (cart.includes(product)) {
    //   let unit = product.unit
    //   unit = unit + 1
    //   dispatch(setCart([...cart, { ...product, unit: unit }]));
    // } else {
    //   dispatch(setCart([...cart, product]))

    // }
  }



  // console.log("cart",cart);

  // useEffect(()=>{
  //   addToCart()
  // },[cart])
  // console.log("products", product);

  return (
    <div className="overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-lg">
      <a href={`/products/${product.id}`}>
        <div className="p-0">
          <div className="aspect-square relative bg-gray-200">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-[195px]" />
          </div>
          <div className="px-3">
            <p className="text-sm mt-1 text-gray-500">{product.category}</p>
            <h3 className="font-semibold text-sm mt-1 h-[40px] text-gray-800 line-clamp-2">{product.name}</h3>
            <p className='text-sm text-gray-600 mt-1'>{product.quantity}</p>
            <p className="font-bold  mt-1 text-gray-700">₹{product.price?.toFixed(2)}</p>
          </div>
        </div>
      </a>
      <div className="p-4 pt-1">
        <button onClick={() => addToCart(product)} className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center py-2 rounded-lg cursor-pointer">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
