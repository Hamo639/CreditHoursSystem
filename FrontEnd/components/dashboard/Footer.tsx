"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
    <footer className="bg-no-repeat bg-blue-100 shadow bottom-0 p-4 sm:mr-64">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image width={30} height={30} src="/images/logo.png" className="h-8" alt="Logo" />
            <span className="self-center text-md font-semibold whitespace-nowrap">نظام الساعات المعتمدة</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
            <a href="#" className="hover:underline me-4 md:me-6">سياسة الخصوصية</a>
            </li>
            <li>
            <a href="#" className="hover:underline me-4 md:me-6">تواصل معنا</a>
            </li>
            <li>
            <a href="#" className="hover:underline me-4 md:me-6">الأسئلة الشائعة</a>
            </li>
            <li>
            <a href="#" className="hover:underline me-4 md:me-6">حول</a>
            </li>
        </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} <Link href="/" className="hover:underline">جامعة كفر الشيخ.</Link><br />جميع الحقوق محفوظة.</span>
    </div>
    </footer>
  );
};

export default Footer;