import React from 'react';

const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white my-10 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">

                {/* Stat 1 */}
                <div className="py-6 lg:border-r border-white/30">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold">50K+</p>
                    <p className="mt-2 text-sm md:text-base">Active Users</p>
                </div>

                {/* Stat 2 */}
                <div className="py-6 md:border-r lg:border-r border-white/30">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold">200K+</p>
                    <p className="mt-2 text-sm md:text-base">Premium Tools</p>
                </div>

                {/* Stat 3 */}
                <div className="py-6">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold">4.9</p>
                    <p className="mt-2 text-sm md:text-base">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;