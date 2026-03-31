import React from 'react';
import { BiColor } from 'react-icons/bi';

const ProductCard = ({ card }) => {
    console.log('card', card);
    const tagStyles = {
        popular: "badge-warning",
        "best seller": "badge-success",
        new: "badge-info",
        
    };

    return (
        <div className="card bg-base-400 h-full flex flex-col shadow-sm hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">

                <div className="">
                    {/* badge div */}
                    <div className="flex justify-end ">
                        {/* <p className="py-1 md:ml-60 ml-60 bg-yellow-300 rounded-full text-center">{card.tag}</p> */}
                        <span className={`badge badge-xs text-white px-4 py-1 rounded-full ${tagStyles[card.tag]}`}>{card.tag}</span>
                    </div>

                    {/* image icon div */}
                    <div className="bg-base-200 border-0 w-15 h-15 flex justify-center items-center rounded-full">
                        <img src={card.icon} className='w-7 h-7 ' alt={card.name} />
                    </div>

                </div>
                <div className="my-10 space-y-5">
                    <h2 className="text-3xl font-bold">{card.name}</h2>
                    <p className="text-gray-500 w-70">{card.description}</p>

                </div>
                {/* list div */}
                <div className="">
                    <span className="text-gray-500"><span className='font-extrabold text-2xl text-black'>${card.price}</span>/mo</span>
                    <ul className="mt-6 flex flex-col gap-2 font-semibold text-gray-500">
                        {
                            card.features.map((item, i) => <li key={i}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{item}</span>
                            </li>)
                        }

                    </ul>
                </div>
                {/* button div */}
                <div className="mt-6">
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white  hover:opacity-70 transition-opacity duration-500 w-full rounded-full">Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;