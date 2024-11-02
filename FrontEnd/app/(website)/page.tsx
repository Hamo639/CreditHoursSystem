import type { Metadata } from 'next'
import 'animate.css';
import Contact from '@/components/Contact';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'الرئيسية | نظام الساعات المعتمدة',
}

export default function Home() {
  return (
    <>
        <section className="bg-center bg-no-repeat bg-[url('/images/education_bg.webp')] bg-cover bg-sky-200 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 animate__animated animate__backInDown">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">كلية الحاسبات والمعلومات</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">النظام الإلكتروني للساعات المعتمدة.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
                تصفح
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>

              <Link href="/about" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-full border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 hover:scale-110 hover:rounded">
                اعرف المزيد
              </Link>  
            </div>
          </div>
        </section>

        <section className="bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover border-b">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">الساعات المعتمدة</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">نظام متكامل للساعات المعتمدة عبر الإنترنت.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 hover:scale-110 hover:rounded">
                للذهاب
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
              <Link href="/about" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-full border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100-gray-700 hover:scale-110 hover:rounded">
                اعرف المزيد...
              </Link>  
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">

          <div className="text-center">
          <span className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
            <span className="text-sm font-medium py-1 px-2">نظام الساعات المعتمدة</span> 
          </span>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            نبسط تجربتك لإستخدام نظام الساعات المعتمدة عبر الإنترنت.
          </p>
          </div>

          <div className="bg-gray-50 border border-gray-200-gray-700 rounded-lg mt-8 p-8 md:p-12 mb-8 hover:scale-105 hover:rounded hover:shadow text-center bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mb-2">
                المقررات
              </span>
              <h1 className="text-gray-900 md:text-5xl font-extrabold mb-2">الفصول الدراسية</h1>
              <p className="text-lg font-normal text-gray-500 mb-6">يمكنك متابعة المقررات الدراسية.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-200-gray-700 rounded-lg p-8 md:p-12 hover:scale-105 hover:rounded hover:shadow bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
                <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:text-green-400 mb-2">
                  أعمال السنة
                </span>
                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">أعمال السنة</h2>
                <p className="text-lg font-normal text-gray-500 mb-4">يمكنك متابعة أعمال السنة من امتحانات منتصف الفصل وغيرها.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200-gray-700 rounded-lg p-8 md:p-12 hover:scale-105 hover:rounded hover:shadow bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:text-purple-400 mb-2">
                  الإختبارات
                </span>
                <h2 className="text-gray-900 text-3xl font-extrabold mb-2">درجات الإختبارات</h2>
                <p className="text-lg font-normal text-gray-500 mb-4">يمكنك تتبع درجات الإختبارات النهائية والتقدير.</p>
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
    </>
  )
}
