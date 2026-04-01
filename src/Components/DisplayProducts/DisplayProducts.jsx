import React from 'react';
import img1 from '../../../src/assets/user.png'
import img2 from '../../../src/assets/package.png'
import img3 from '../../../src/assets/rocket.png'
const DisplayProducts = () => {
    return (
        <div className='bg-base-200  w-full p-5'>
            {/* container div */}
            <div className="max-w-6xl mx-auto px-4 ">
                {/* header div */}
                <div className="text-center space-y-2 md:my-10 ">
                    <h1 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'> Get Started in 3 Steps</h1>
                    <p className="text-gray-500 font-medium">Start using premium digital tools in minutes, not hours.</p>
                </div>
                {/* cards grid div */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 ">

                    {/* card-1 */}
                    <div className="bg-white px-6 py-10 border border-gray-200 rounded-lg relative max-w-xs mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">

                        <p className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
                            01
                        </p>

                        <div className="text-center space-y-8">

                            <div className="flex justify-center">
                                <img
                                    className="w-14 h-14 p-3 bg-base-200 rounded-full"
                                    src={img1}
                                    alt="icon"
                                />
                            </div>

                            <div className="space-y-3">
                                <h1 className="font-bold text-xl">Create Account</h1>
                                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                    Sign up for free in seconds. No credit card required to get started.
                                </p>
                            </div>

                        </div>
                    </div>
                    {/*     */}
                    {/* card-2 */}
                    <div className="bg-white px-6 py-10 border border-gray-200 rounded-lg relative max-w-xs mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">

                        <p className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
                            02
                        </p>

                        <div className="text-center space-y-8">

                            <div className="flex justify-center">
                                <img
                                    className="w-14 h-14 p-3 bg-base-200 rounded-full"
                                    src={img2}
                                    alt="icon"
                                />
                            </div>

                            <div className="space-y-3">
                                <h1 className="font-bold text-xl">Choose Products</h1>
                                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                    Browse our catalog and select the tools
                                    that fit your needs.
                                </p>
                            </div>

                        </div>
                    </div>
                    {/*     */}
                    {/* card-3 */}
                    <div className="bg-white px-6 py-10 border border-gray-200 rounded-lg relative max-w-xs mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">

                        <p className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
                            03
                        </p>

                        <div className="text-center space-y-8">

                            <div className="flex justify-center">
                                <img
                                    className="w-14 h-14 p-3 bg-base-200 rounded-full"
                                    src={img3}
                                    alt="icon"
                                />
                            </div>

                            <div className="space-y-3">
                                <h1 className="font-bold text-xl">Start Creating</h1>
                                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                    Download and start using your premium
                                    tools immediately.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DisplayProducts;