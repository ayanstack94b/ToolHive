import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, setCart, handleRemoveFromCart }) => {
    // console.log('cart data', cart.price);


    return (
        <div>
            {
                cart.length === 0 ? (
                    <div className="border border-gray-200 p-10 rounded-xl text-center space-y-4">
                        <h1 className="font-bold text-5xl">Your Cart</h1>

                        <div className="flex flex-col items-center gap-3 py-10">
                            <span className="text-5xl text-gray-300">
                                🛒
                            </span>

                            <p className="text-gray-400">Your cart is empty, Add something to Checkout</p>
                        </div>

                        <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-full rounded-full opacity-50 cursor-not-allowed">
                            Proceed to Checkout
                        </button>
                    </div>
                )

                    :

                    (<div className="border border-gray-200 p-10 rounded-xl">
                        <h1 className='text-left font-bold text-xl'>Your Cart</h1>
                        {
                            cart.map((cartItems, i) => <CartItem
                                key={i}
                                cartItems={cartItems}
                                setCart={setCart}
                                cart={cart}
                                handleRemoveFromCart={handleRemoveFromCart}
                            ></CartItem>)
                        }

                        {/* Cart total */}
                        <div className="flex justify-between items-center w-11/12 mx-auto">
                            <p className="text-gray-400 text-lg">Total:</p>
                            <p className="font-bold">$</p>
                        </div>
                        <button className="btn my-5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white  hover:opacity-70 transition-opacity duration-500 w-full rounded-full">Proceed to Checkout</button>
                    </div>)
            }

        </div>

        // {/* <div className="border border-gray-200 p-10 rounded-xl">
        //         <h1 className='text-left font-bold text-xl'>Your Cart</h1>
        //         {
        //             cart.map((cartItems, i) => <CartItem
        //                 key={i}
        //                 cartItems={cartItems}
        //                 setCart={setCart}
        //             ></CartItem>)
        //         }

        //         {/* Cart total */}
        //         <div className="flex justify-between items-center w-11/12 mx-auto">
        //             <p className="text-gray-400 text-lg">Total:</p>
        //             <p className="font-bold">$</p>
        //         </div>
        //         <button className="btn my-5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white  hover:opacity-70 transition-opacity duration-500 w-full rounded-full">Proceed to Checkout</button>
        //     </div > */}
    );
};

export default Cart;