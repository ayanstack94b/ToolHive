import React from 'react';

const StaticPricing = () => {
    return (
        <div className='my-20'>
            {/* template div */}
            <div className="w-10/12 mx-auto ">
                {/* header div */}
                <div className="text-center space-y-5 pb-8">
                    <h1 className="text-5xl text-center font-bold">Simple, Transparent Pricing</h1>
                    <p className="text-gray-400 font-medium">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* grid pricing card div */}

                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-5">
                    {/* card-1 */}
                    <div className="card bg-base-100  shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="card-body flex flex-col">

                            <div className="flex flex-col space-y-5">
                                <h2 className="text-3xl font-bold">Starter</h2>
                                <p className="">Perfect for getting started</p>
                                <span className="text-xl text-gray-400">
                                    <span className="text-4xl font-extrabold text-black">$0</span>
                                    /Month</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-auto pt-6">
                                <button className="btn btn-primary btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full  hover:opacity-70 transition-opacity duration-500">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="card  h-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-2xl scale-105">
                        <div className="card-body flex flex-col">

                            <div className="flex flex-col space-y-5">
                                <p className="absolute -top-4 md:left-45 left-20 bg-[#fef3c6]  text-[#bb4d00] text-xs px-8 py-1 rounded-full font-bold">
                                    Popular
                                </p>
                                <h2 className="text-3xl font-bold">Pro</h2>
                                <p className="">Best for professionals</p>
                                <span className="text-xl text-white">
                                    <span className="text-4xl font-extrabold text-white">$29</span>
                                    /Month</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates </span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block text-[#9514fa] font-bold bg-white rounded-full  ">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card bg-base-100  shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="card-body flex flex-col">

                            <div className="flex flex-col space-y-5">
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p className="">For teams and businesses</p>
                                <span className="text-xl text-gray-400">
                                    <span className="text-4xl font-extrabold text-black">$99</span>
                                    /Month</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full  hover:opacity-70 transition-opacity duration-500">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StaticPricing;