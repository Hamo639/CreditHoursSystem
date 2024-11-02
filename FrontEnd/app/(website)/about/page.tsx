"use client"

import 'animate.css';
import React from 'react';

export default function Page() {
    return (
        <section className="min-h-screen bg-white md:p-24 sm:p-4 bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">حول</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">النظام الإلكتروني للساعات المعتمدة.</p>
            </div>
            
            <article className="text-lg pt-28 pb-28 bg-white border border-gray-200 rounded-lg shadow text-center items-center bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    يُعَتَبَرُ النظام الإلكتروني للساعات المعتمدة وسيلة مبتكرة لتسهيل متابعتك.
                </p>
                <br />

                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    يقدم النظام تجربة مستخدم سلسة وآمنة، مما يسهل على الطلاب الوصول إلى الخدمات الأكاديمية بكل يسر ويسر.
                </p>
                <br />

                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    يتيح النظام للطالب متابعة تقدمه الدراسي ودرجاته في الإمتحانات النهائية وغيرها.
                </p>
            </article>
        </section>
    );
}
