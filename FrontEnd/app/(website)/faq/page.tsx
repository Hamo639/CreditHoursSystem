"use client"

import 'animate.css';
import React from 'react';
import Faq from '@/components/Faq';

export default function Page() {
    const items = [
        {
          title: 'هل يمكن متابعة درجاتي كطالب في الامتحانات النهائية؟',
          content: 'نعم كطالب يمكنك النظام من متابعة درجات الإمتحانات النهائية.'
        },
        {
          title: 'هل يمكنني متابعة تقديري التراكمي كطالب؟',
          content: 'نعم من خلال النظام يمكنك متابعة تقديرك التراكمي كطالب.'
        },
        {
          title: 'ماهي البيانات التي يمكن الإطلاع عليها كطالب بواسطة النظام؟',
          content: 'يمكنك الإطلاع علي بيناتك ودرجاتك وتقديرك التراكمي وغيرها.'
        }
    ];

    return (
        <section className="min-h-screen bg-white md:p-24 sm:p-4 bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">الأسئلة الشائعة</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">تجد هنا اجابات علي الأسئلة الشائعة.</p>
            </div>
            
            <div>
                {items.map((item, key) => (
                    <Faq key={key} title={item.title} content={item.content}/>
                ))}
            </div>
        </section>
    );
}
