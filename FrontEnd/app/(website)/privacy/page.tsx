"use client"

import 'animate.css';
import React from 'react';

export default function Page() {
    return (
        <section className="min-h-screen bg-white md:p-24 sm:p-4 bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">سياسة الخصوصية</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">تجد هنا المزيد عن سياسة الخصوصية.</p>
            </div>
            
            <article className="format lg:format-lg p-6 bg-white border border-gray-200 rounded-lg shadow bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">مقدمة:</h2>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    نحن ملتزمون بحماية خصوصيتك ومعلوماتك الشخصية. من فضلك اطلع على هذه السياسة بعناية لفهم كيفية جمعنا ونستخدم ونحمي معلوماتك الشخصية.
                </p>
                <br />
                <hr />
                <br />

                <h2 className="text-xl font-semibold mb-4 text-gray-800">المعلومات التي نجمعها:</h2>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    عندما تستخدم موقعنا، قد نجمع معلومات محددة تتعلق بك وباستخدامك للموقع. يمكن أن تشمل هذه المعلومات الاسم والبريد الإلكتروني.
                </p>
                <br />
                <hr />
                <br />

                <h2 className="text-xl font-semibold mb-4 text-gray-800">كيف نستخدم المعلومات:</h2>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    نستخدم المعلومات التي نجمعها لمجموعة من الأغراض، بما في ذلك تحسين تجربتك على الموقع، وتخصيص المحتوى والإعلانات، وتحليل استخدام الموقع، وتحسين خدماتنا.
                </p>
                <br />
                <hr />
                <br />

                <h2 className="text-xl font-semibold mb-4 text-gray-800">مشاركة المعلومات مع أطراف ثالثة:</h2>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. قد نشارك بعض المعلومات مع الشركاء الذين نثق بهم لدعم خدماتنا وتحسينها.
                </p>
                <br />
                <hr />
                <br />
                
                <h2 className="text-xl font-semibold mb-4 text-gray-800">حقوقك:</h2>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                    لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها وحذفها. يمكنك أيضًا تقديم طلب لنقل المعلومات إلى طرف ثالث.
                </p>
                <br />
            </article>
        </section>
    );
}
