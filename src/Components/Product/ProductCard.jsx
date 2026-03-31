import React from 'react';

const ProductCard = ({ card }) => {
    console.log('card', card);
    return (
        <div className="card bg-base-400 shadow-sm">
            <div className="p-5">
                <div className="rounded-full text-end px-5 py1 bg-yellow-300">
                    <p className="">{card.tag}</p>
                </div>

                <div className="">
                    <img src="" alt="" />
                    <h2 className="text-3xl font-bold">{card.name}</h2>
                </div>

                    <span className="text-xl">$29/mo</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                   
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>High-resolution image generation</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>High-resolution image generation</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>High-resolution image generation</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white  hover:opacity-70 transition-opacity duration-500 w-full rounded-full">Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;