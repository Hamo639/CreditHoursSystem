"use client"

import 'animate.css';
import React from 'react';

export default function Page() {
    return (
        <section className="min-h-screen bg-white md:p-24 sm:p-4 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">الملف الشخصي</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">يمكنك تحديث بياناتك الشخصية وتغيير كلمة السر من هنا.</p>
            </div>

        <section>
          <div className="flex items-center">
              <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
              <div className="px-3 text-gray-800 text-xl font-bold border-r-2 border-l-2 rounded-lg">البيانات الشخصية</div>
              <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
          </div>   

          <div>
            <div className="grid gap-6 mb-6 md:grid-cols-1 p-4">
                <label className="block text-sm font-medium text-gray-900">الإسم</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
            </div>

              <div className="grid gap-6 mb-6 md:grid-cols-3 p-4">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">الرقم القومي</label>
                      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">البريد الإلكتروني</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                  </div>
              </div>
          </div>

          <div className="flex items-center justify-center mb-6">
                <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
                    تحديث البيانات الشخصية
                </button>
          </div>
        </section>

        <section>
          <div className="flex items-center">
              <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
              <div className="px-3 text-gray-800 text-xl font-bold border-r-2 border-l-2 rounded-lg">كلمة السر</div>
              <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
          </div>   

          <div>
              <div className="grid gap-6 mb-6 md:grid-cols-3 p-4">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">كلمة السر</label>
                      <input type="password" min="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                  </div>

                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">تأكيد كلمة السر</label>
                      <input type="password" min="6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                  </div>
              </div>
          </div>

          <div className="flex items-center justify-center mb-6">
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
                تغيير كلمة السر 
            </button>
        </div>
        </section>

        </section>
    );
}
