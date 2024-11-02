"use client"

import { api } from '@/apis/api';
import 'animate.css';
import React, { useState } from 'react';

export default function () {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get(`notifications`);
    setData(response.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen md:p-24 sm:p-4">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">الإشعارات</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">تابع كل المستجدات.</p>
      </div>

      <div>
        {data && data.map((item, key) => (
          <div className="bg-white shadow hover:shadow-lg">
            <h2>
              <a href="/" className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
                <span className="flex items-center ">
                  {
                    // @ts-ignore
                    item?.message
                  }
                </span>
              </a>
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
