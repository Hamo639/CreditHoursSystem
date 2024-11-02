"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';

const Navbar = () => {
  const route = usePathname();

  const { session, profile, logout } = useAuthStore();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const signout = () => {
    logout();
    window.location.reload();
  };
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image width={70} height={70} className="h-12 w-12" src="/images/logo.png" alt="شعار جامعة كفر الشيخ" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex space-x-4 text-center items-start justify-center">
                <Link href="/" className={`${route == '/' ? 'border border-gray-900' : 'text-black'} rounded-full px-3 py-2 text-sm font-bold hover:border hover:border-gray-900`}>الرئيسية</Link>
                <Link href="/privacy" className={`${route == '/privacy' ? 'border border-gray-900' : 'text-black'} rounded-full px-3 py-2 text-sm font-bold hover:border hover:border-gray-900`}>سياسة الخصوصية</Link>
                <Link href="/faq" className={`${route == '/faq' ? 'border border-gray-900' : 'text-black'} rounded-full px-3 py-2 text-sm font-bold hover:border hover:border-gray-900`}>الأسئلة الشائعة</Link>
                <Link href="/about" className={`${route == '/about' ? 'border border-gray-900' : 'text-black'} rounded-full px-3 py-2 text-sm font-bold hover:border hover:border-gray-900`}>حول</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className='flex flex-row gap-4'>

              {session == 'unauthenticated' &&
                <Link
                  className="inline-flex justify-center hover:text-gray-900 items-center py-1 px-2 sm:ms-4 text-base font-bold text-center text-gray-900 rounded-full border border-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 hover:scale-110 hover:rounded"
                  href="/login">
                  <div className='flex gap-2 items-center justify-center'>
                    <FiUser />
                    تسجيل دخول
                  </div>
                </Link>
              }
              
              {session == 'authenticated' &&
                <>
                  <Link href="/dashboard">
                    <button
                      type="button"
                      className="text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <div className='flex gap-2 items-center justify-center'>
                        لوحة التحكم
                      </div>
                    </button>
                  </Link>
                </>
              }

              {session == 'authenticated' &&
                <>
                  <span className='text-white rounded-md px-3 py-2 text-sm font-medium'>{
                    profile?.name
                  }</span>

                  <button
                    onClick={() => signout()}
                    type="button"
                    className="text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <div className='flex gap-2 items-center justify-center'>
                      تسجيل الخروج
                    </div>
                  </button>
                </>
              }
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 text-sm text-white-500 bg-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link href="/" className={`${route == '/' ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-mediu`}>الرئيسية</Link>
            <Link href="/privacy" className={`${route == '/privacy' ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-mediu`}>سياسة الخصوصية</Link>
            <Link href="/faq" className={`${route == '/faq' ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-mediu`}>الأسئلة الشائعة</Link>
            <Link href="/about" className={`${route == '/about' ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-blue-800 hover:text-white'} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-mediu`}>حول</Link>
          </div>
        </div>
      )}
    </nav>

  );
};

export default Navbar;