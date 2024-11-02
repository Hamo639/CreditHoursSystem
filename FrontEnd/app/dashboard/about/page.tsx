"use client"

import 'animate.css';
import React from 'react';
import Faq from '@/components/Faq';

export default function Page() {
    const items = [
        {
          title: 'هل يشمل النظام متابعة الطالب ساعاته المعتمدة؟',
          content: 'نعم يتيح النظام متابعة الطالب ساعاته الدراسية المعتمدة.'
        },
        {
          title: 'هل تتحدث جميع البيانات بإستمرار؟',
          content: 'نعم, صحيح جميع البيانات تتحدث بإستمرار.'
        },
        {
          title: 'هل يعمل النظام اونلاين بطريقة كاملة؟',
          content: 'نعم تتم جميع العمليات اونلاين بطريقة كاملة.'
        }
    ];

    return (
        <section className="min-h-screen md:p-24 sm:p-4">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">مساعدة</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">تجد هنا اجابات علي الأسئلة الشائعة لمساعدتك.</p>
            </div>
            
            <div>
                {items.map((item, key) => (
                    <Faq key={key} title={item.title} content={item.content}/>
                ))}
            </div>
        </section>
    );
}
