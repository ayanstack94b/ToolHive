import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import ProductCard from '../Product/ProductCard';
import ProductList from '../Product/ProductList';

const ToggleTabs = ({ dataPromise, cart, setCart, handleAddToCart, handleRemoveFromCart }) => {


    const [tab, setTab] = useState('products')

    const handleProductsBtn = (products) => {
        // console.log('products clicked', products);
        return setTab(products)
    }
    const handleCartBtn = (cartData) => {
        // console.log('cart clicked', cart);
        return setTab(cartData)

    }

    return (
        <div className='md:my-20 my-10 container mx-auto'>
            {/* div text section */}
            <section className="w-8/12 mx-auto text-center space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold">Premium Digital Tools</h1>
                <p className="text-gray-400 font-medium">Choose from our curated collection of premium digital products designed
                    <br />to boost your productivity and creativity. </p>
            </section>

            {/* Toggle data tab section */}

            <section className='my-20'>
                {/* toggle bt div */}

                <div className="container mx-auto w-6/12 flex items-center justify-center gap-4">
                    <button onClick={() => handleProductsBtn('products')} className="btn px-6 py-1 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Products</button>
                    <button onClick={() => handleCartBtn('cart')} className="btn px-8 py-1 rounded-full bg-white text-black font-bold">Cart<span className='text-gray-500 font-medium'>({cart.length})</span></button>

                </div>
            </section>

            {/* dynamic data card section */}
            <section>
                {
                    tab === 'products' ? <ProductList handleAddToCart={handleAddToCart}
                        dataPromise={dataPromise} /> : <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}></Cart>
                }

            </section>

        </div>
    );
};

export default ToggleTabs;