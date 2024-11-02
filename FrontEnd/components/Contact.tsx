"use client"

import Link from 'next/link';
import { FiSend } from 'react-icons/fi'

const Contact = () => {
return (
    <>
        <section className="flex items-center mb-2">
          <div className="border-t-2 border-gray-300 flex-grow"></div>
          <div className="px-3 text-gray-800 text-2xl font-bold border-r-2 border-l-2 rounded-full">كلية الحاسبات والمعلومات</div>
          <div className="border-t-2 border-gray-300 flex-grow"></div>
        </section>

      <section className="rounded-lg bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
      <div className="mx-auto shadow-sm text-center lg:py-16 bg-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">جامعة كفر الشيخ</h1>
      <br />
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
      هدف الجامعة أن تكون جامعة رائدة 
      <br/>
      محليا وإقليميا ودوليا في التعليم والبحث العلمي وقيادة 
      <br/>
      وتنمية المجتمع ومتميزة في صناعة المعرفة.</p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <Link href="https://kfs.edu.eg/" target='_blank' className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-full border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100-gray-700 hover:scale-110 hover:rounded">
        موقع الجامعة الإلكتروني
      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg>
      </Link>  
      </div>
      </div>
      </section>

      <section className="bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover border-b border-t">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">كلية الحاسبات والمعلومات</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">نظام متكامل للساعات المعتمدة عبر الإنترنت.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 hover:scale-110 hover:rounded">
                ادخل للنظام
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      <section className="text-gray-700 body-font relative">
      <div className="absolute inset-0 bg-gray-200">
        <iframe width="100%" height="100%" src="https://www.google.com/maps/embed/v1/place?q=جامعه+كفر+الشيخ،+قسم+كفر+الشيخ،+كفر+الشيخ،+مصر&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
      </div>
      <div className="container px-5 py-24 mx-auto flex text-center">
        <div className="lg:w-1/3 md:w-1/2 bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover border-b border-t rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">جامعة كفر الشيخ</h2>
        <p className="leading-relaxed mb-2 text-gray-900">نظام الساعات المعتمدة بالجامعة.</p>
        <p className="text-xs text-gray-900 mt-1">عبر الإنترنت.</p>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;