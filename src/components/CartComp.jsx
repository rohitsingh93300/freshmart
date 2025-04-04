import React, { useState } from 'react'
import { ChevronRight, NotebookText, Trash2 } from 'lucide-react';
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../Redux/CartSlice';
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { LuNotebookText } from "react-icons/lu";

// const sampleCart = [
//     { id: 1, name: "Apple", price: 2, quantity: 2, image: apple },
//     { id: 2, name: "Milk", price: 3, quantity: 1, image: Amul },

// ];

const CartComp = ({ isOpen, onClose }) => {
    // const [quantity, setQuantity] = useState(1)
    const { cart } = useSelector(store => store.cart)
    const dispatch = useDispatch()
    // const [cart, setCart] = useState(sampleCart);

    // const updateQuantity = (id, amount) => {
        
    //     dispatch(setCart(cart.map(item =>
    //         item.id === id ? { ...item, unit: Math.max(1, item.unit + amount) } : item
    //     )));
      
       

    // };

    const updateQuantity = (cart, productId, action)=>{
        dispatch(setCart(
            cart.map(item => {
                if (item.id === productId) {
                    let newUnit = item.unit;
                    if (action === 'increase') {
                        newUnit += 1;
                    } else if (action === 'decrease') {
                        newUnit -= 1;
                    }
                    return newUnit > 0 ? { ...item, unit: newUnit } : null;
                }
                return item;
            }).filter(item => item !== null) // Remove items with quantity 0
        )) 
    }

    // const removeItem = (id) => {
    //     dispatch(setCart(cart.filter(item => item.id !== id)));
    // };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.unit, 0);
    return (
        <div className={`fixed  overflow-y-scroll top-0 right-0 h-full w-[400px] bg-gray-100 shadow-lg p-4 transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <h2 className="text-lg font-semibold mb-4 flex justify-between">
                My Cart <button onClick={onClose} className="text-red-500 cursor-pointer"><CgClose /></button>
            </h2>
            <div className='relative'>

            <div className="space-y-4">
                {cart?.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                ) : (
                    cart?.map(item => (
                        <div key={item.id} className="flex items-center gap-4 p-2 bg-white rounded-md">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border border-gray-200" />
                            <div className='flex justify-between w-full items-center'>
                                <div>
                                    <h3 className="text-sm  line-clamp-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.quantity}</p>
                                    <p className="text-gray-800">₹{item.price}<span className='line-through text-gray-500'> ₹{item.price + 10}</span></p>
                                </div>

                                <div className="flex items-center justify-center text-xl font-semibold px-4 py-1 rounded-md gap-3 mt-2 bg-green-600 text-white">
                                    <button className='cursor-pointer' onClick={() => updateQuantity(cart,item.id, "decrease")}>-</button>
                                    <span>{item.unit}</span>
                                    <button className='cursor-pointer' onClick={() => updateQuantity(cart, item.id, "increase")}>+</button>
                                </div>
                                {/* <button size="sm" className="text-red-500 cursor-pointer" onClick={() => removeItem(item.id)}><Trash2/></button> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
            {
                cart.length > 0 && (
                    <div className='bg-white rounded-md p-4 mt-4 space-y-1'>
                        <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
                        <div className='flex justify-between items-center'>
                            <h1 className='flex gap-1 items-center text-gray-700'><span><LuNotebookText/></span>Items total</h1>
                            <p>₹{totalPrice}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='flex gap-1 items-center text-gray-700'><span><MdDeliveryDining/></span>Delivery charge</h1>
                            <p className='text-green-600'><span className='text-gray-600 line-through'>₹25</span> FREE</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='flex gap-1 items-center text-gray-700'><span><GiShoppingBag/></span>Handling charge</h1>
                            <p>₹5</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-semibold text-lg '>Grand total</h1>
                            <p className='font-semibold text-lg'>₹{totalPrice + 5}</p>
                        </div>
                    </div>
                )
            }
            {
                cart.length > 0 && (
                    <div className='bg-white rounded-md p-4 mt-3 mb-52'>
                        <h1 className='font-semibold'>Cancellation Policy</h1>
                        <p className='text-sm text-gray-700 mt-1'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                    </div>
                )
            }
            {
                cart.length > 0 && (
                    <div className='bg-white -mx-4 p-5 fixed w-full bottom-0  rounded-md'>
                        <div className='bg-green-600 text-white w-full py-2 px-3 rounded-md flex justify-between items-center cursor-pointer'>
                            <div>
                                <h1 className='font-semibold text-lg'>₹{totalPrice + 5}</h1>
                                <h1 className='text-gray-100 '>TOTAL</h1>
                            </div>
                            <div className='flex gap-1 items-center font-semibold'>
                                <h1 className='text-lg '>Login to Proceed </h1>
                              <ChevronRight/>

                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default CartComp
