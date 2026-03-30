import React from 'react';
import icon from '../../../src/assets/group-5.png'
import playBtn from '../../../src/assets/Play.png'
import banner from '../../../src/assets/banner.png'
const Banner = () => {
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 md:my-10 p-5'>
            {/* left div */}
            <div className="my-20 ">
                {/* left div captions */}
                <div className="space-y-8">
                    <div className="bg-[#d0ccee] px-2 py-1 rounded-full inline-flex items-center gap-2">
                        <img src={icon} alt="" />
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-semibold">
                            New: AI-Powered Tools Available
                        </span>
                    </div>

                    <div className="">
                        <h1 className=" text-3xl md:text-5xl font-extrabold pb-3">
                            Supercharge Your
                        </h1>

                        <h1 className="text-3xl md:text-5xl font-extrabold"> Digital Workflow</h1>
                    </div>
                    <p className="text-[#627382] text-sm max-w-md">
                        Access premium AI tools, design assets, templates, and productivity 
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>

                    {/* left div btn group */}
                    <div className="md:flex md:items-start space-y-4 ">
                        <button className="md:ml-0 ml-3 px-5 py-1 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl  hover:opacity-70 transition-opacity duration-500">Explore Products</button>

                        <button className=" flex font-semibold justify-center border border-[#9514fa] items-center px-2 py-1 ml-3 gap-2 to-[#9514fa] bg-white text-[#9514fa] rounded-4xl  hover:opacity-70 transition-opacity duration-500">
                            <img className='w-4 h-4' src={playBtn} alt="" />
                            Explore Products</button>
                    </div>

                </div>


            </div>

            {/* right div */}

            <div className="">
                <img className='md:h-full md:w-10/12' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;