import React from 'react';
import icon from '../../../src/assets/group-5.png'
import playBtn from '../../../src/assets/Play.png'
import banner from '../../../src/assets/banner.png'
const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10">

            {/* LEFT */}
            <div className="space-y-8">

                {/* badge */}
                <div className="bg-[#d0ccee] px-3 py-1 rounded-full inline-flex items-center gap-2 w-fit">
                    <img src={icon} alt="" />
                    <span className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-semibold">
                        New: AI-Powered Tools Available
                    </span>
                </div>

                {/* heading */}
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Supercharge Your <br className="hidden md:block" />
                        Digital Workflow
                    </h1>
                </div>

                {/* text */}
                <p className="text-[#627382] text-sm md:text-base max-w-md">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>

                {/* buttons */}
                <div className="flex flex-col sm:flex-row gap-4">

                    <button className="px-6 py-2 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full hover:opacity-80 transition">
                        Explore Products
                    </button>

                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#9514fa] text-[#9514fa] rounded-full hover:bg-[#f5f3ff] transition">
                        <img className="w-4 h-4" src={playBtn} alt="" />
                        Explore Products
                    </button>

                </div>

            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
                <img
                    className="w-full max-w-md lg:max-w-lg"
                    src={banner}
                    alt="banner"
                />
            </div>

        </div>
    );
};

export default Banner;