import React from 'react';

const CartItem = ({ cartItems, cart, handleRemoveFromCart }) => {
    // console.log('from cart items', cart, handleRemoveFromCart);



    return (
        <div>
            <div className="flex justify-between items-center md:p-5 max-h-screen">
                {/* image and details div */}
                <div className="flex items-center justify-between gap-5 w-full bg-base-300 p-6 rounded-2xl shadow-sm mb-5">
                    <div className="md:flex md:gap-4">
                        <img className='p-2 bg-base-100 rounded-full' src={cartItems.icon} alt="" />
                        <div className="">
                            <h1 className="font-bold text-lg">{cartItems.name}</h1>
                            <p className="text-gray-500 font-semibold">${cartItems.price}</p>
                        </div>
                    </div>
                    {/* delete button */}
                    <div className="">
                        
                        <p onClick={() => handleRemoveFromCart(cartItems.id)} className="text-red-600 font-bold">Remove</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;