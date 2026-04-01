import React from 'react';
import { BiColor } from 'react-icons/bi';
import Cart from '../Cart/Cart';

const ProductCard = ({ card, handleAddToCart }) => {
    // console.log('card', card);
    const tagStyles = {
        popular: "badge-warning",
        "best seller": "badge-success",
        new: "badge-info",

    };

    return (
        <div className="card bg-base-100 h-full flex flex-col shadow-sm hover:shadow-2xl transition-shadow duration-300">

            <div className="card-body flex flex-col">

                {/* top section */}
                <div className="flex justify-between items-start">

                    {/* icon */}
                    <div className="bg-base-200 w-12 h-12 flex justify-center items-center rounded-full">
                        <img src={card.icon} className="w-6 h-6" alt={card.name} />
                    </div>

                    {/* badge */}
                    <span className={`badge badge-sm text-white px-3 py-1 rounded-full ${tagStyles[card.tag]}`}>
                        {card.tag}
                    </span>

                </div>

                {/* content */}
                <div className="my-6 space-y-4">
                    <h2 className="text-2xl font-bold">{card.name}</h2>
                    <p className="text-gray-500 text-sm">{card.description}</p>
                </div>

                {/* price + features */}
                <div>
                    <span className="text-gray-500 text-sm">
                        <span className="font-extrabold text-2xl text-black">
                            ${card.price}
                        </span>
                        /mo
                    </span>

                    <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
                        {card.features.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* button */}
                <div className="mt-auto pt-6">
                    <button
                        onClick={() => handleAddToCart(card)}
                        className="btn w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-80 transition"
                    >
                        Buy now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;