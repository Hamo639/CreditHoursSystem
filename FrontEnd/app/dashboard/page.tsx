"use client"

import React from 'react'
import { FcGraduationCap } from "react-icons/fc";
import { useAuthStore } from '@/stores/useAuthStore';

export default function () {
  const { session, profile } = useAuthStore();

  return (
    <>
      <section className="mt-8">
        <div className="text-center">
          <span className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
            <span className="text-sm font-medium py-1 px-2">نظام الساعات المعتمدة</span>
          </span>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900">كلية الحاسبات والمعلومات</h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl">
            النظام الإلكتروني لجامعة كفر الشيخ
          </p>
        </div>
      </section>


      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">

          <section className="flex items-center">
            <div className="border-t-2 border-b-2 h-2 border-gray-200 flex-grow" />
            <span className="text-lg font-medium py-1 px-2">نظام الساعات المعتمدة</span>
            <div className="border-t-2 border-b-2 h-2 border-gray-200 flex-grow" />
          </section>

          <div className="mt-4">
            <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
              لمتابعة التقدم الدراسي.
            </p>

            {profile.role == 'student' &&
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center mt-4 px-2 py-1 rounded-full border border-blue-400">
                  {profile?.year?.name ?? 'خريج'}
                </span>
              </div>
            }

          </div>

          <div className="w-full mt-4">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

              <div className="w-full max-w-sm mb-4 md:mb-0 hover:scale-110 hover:rounded ">
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 shadow border border-gray-200 rounded-lg">
                  <div className="flex flex-col items-center p-10">
                    <FcGraduationCap className="text-9xl" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">الساعات المعتمدة</h5>
                    <span className="text-sm text-gray-500">نظام الساعات المعتمدة.</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center mt-4 px-2 py-1 rounded-full border border-blue-400">
                      {profile?.name}
                    </span>
                    <div className="flex mt-4">
                      <b className="text-blue-600 dark:text-blue-500 font-medium text-lg inline-flex items-center">اهلا بك!</b>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}