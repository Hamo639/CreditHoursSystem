"use client"

import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';

const menuItems = [
      { label: "الرئيسية", path: "/" },
      { label: "موقع الجامعة", path: "https://kfs.edu.eg/" },
];
  
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
    <nav className="fixed top-0 z-50 w-full bg-blue-600 shadow">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
            <button onClick={toggleSidebar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
            </svg>
            </button>

            <Link className="ms-2 md:me-24 flex" href="/">
                <Image width={30} height={30} src="/images/logo.png" alt="شعار جامعة كفر الشيخ" />
                 <div className='hidden md:flex'>
                    <span className="self-center font-semibold whitespace-nowrap px-2 text-white">الساعات المعتمدة | كلية الحاسبات والمعلومات</span>
                 </div>
            </Link>

        </div>
        <div className="flex items-center">
            <div className="flex items-center ms-3">
            <div>
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                </button>
            </div>
            {isSidebarOpen && (
            <div className="fixed top-16 left-0 w-full bg-white shadow text-center items-center justify-center">
                <ul className="py-1" role="none">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.path}
                                className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            )}
            </div>
        </div>
        </div>
    </div>
    </nav>
  );
};

export default Header;