import Image from 'next/image';
import React from 'react';
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white py-4 px-6 md:px-8 flex items-center justify-between flex-wrap">
            {/* Logo and Search Section */}
            <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">MORENT</div>

                {/* Toggle for smaller screens */}
                <div className="md:hidden">
                    <FaSearch className="text-gray-600 text-xl" />
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-[492px] h-[44px] hidden md:block">
                <input
                    type="text"
                    placeholder="Search something here"
                    className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FaSearch />
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl">
                    <VscSettings />
                </div>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-4">
                {/* Favorites */}
                <Link href="/favorites">
                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                        <FaHeart className="text-xl text-gray-600 cursor-pointer" />
                    </div>
                </Link>

                {/* Notifications */}
                <Link href="/notifications">
                    <div className="relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                        <FaBell />
                    </div>
                </Link>

                {/* Settings */}
                <Link href="/settings">
                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                        <FaCog />
                    </div>
                </Link>

                {/* Profile */}
                <Link href="/profile">
                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
                        <Image src={'/images/Image.png'} alt="profile" width={40} height={40} />
                    </div>
                </Link>
            </div>
        </header>
    );
}
