import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] '>
            <footer className="bg-[#0b0b1f] text-white py-16 p-5">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">

                    {/* Logo + Description */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold">ToolHive</h1>
                        <p className="text-sm text-gray-400">
                            Discover premium digital tools to boost your workflow and creativity.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="space-y-3">
                        <h2 className="font-semibold text-lg">Product</h2>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer">Features</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <li className="hover:text-white cursor-pointer">Templates</li>
                            <li className="hover:text-white cursor-pointer">Integrations</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                        <h2 className="font-semibold text-lg">Company</h2>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Press</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-3">
                        <h2 className="font-semibold text-lg">Resources</h2>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer">Documentation</li>
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Community</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className=" gap-4 mt-4 md:mt-0">
                        <h2 className="font-semibold text-lg pb-3">Social Links</h2>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                                <FaInstagram />
                            </span>
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                                <FaFacebook />
                            </span>
                            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                                <FaSquareXTwitter />

                            </span>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-700 mt-10 pt-6 max-w-6xl mx-auto px-4">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2026 ToolHive. All rights reserved.
                        </p>

                        <ul className="flex items-center gap-5 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms of Service</li>
                            <li className="hover:text-white cursor-pointer">Cookies</li>
                        </ul>

                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;