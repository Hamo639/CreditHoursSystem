"use client"

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default class Footer extends Component {
  render() {
    return (
        <>
            <footer className="bg-slate-100 shadow border-t bottom-0">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image width={30} height={30} src="/images/logo.png" className="h-8" alt="Logo" />
                        <span className="self-center text-md font-semibold whitespace-nowrap"> © كلية الحاسبات والمعلومات  {new Date().getFullYear()}</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                        <Link href="/privacy" className="hover:underline me-4 md:me-6">سياسة الخصوصية</Link>
                        </li>
                        <li>
                        <Link href="/faq" className="hover:underline me-4 md:me-6">الأسئلة الشائعة</Link>
                        </li>
                        <li>
                        <Link href="/about" className="hover:underline me-4 md:me-6">حول</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </footer>
        </>
    )
  }
}
