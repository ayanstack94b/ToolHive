import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white my-10 w-full'>
            <div className="w-6/12 p-10 text-center grid grid-cols-1 md:grid-cols-3 mx-auto md:space-y-0 space-y-10">
                <div className="md:border-r border-white/30">
                    <p className="text-6xl font-extrabold">50K+</p>
                    <p className="">Active Users</p>
                </div>
                <div className="md:border-r border-white/30">
                    <p className="text-5xl font-extrabold">200K+</p>
                    <p className="">Premium Tools</p>
                </div>
                <div className="">
                    <p className="text-6xl font-extrabold">4.9</p>
                    <p className="">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;