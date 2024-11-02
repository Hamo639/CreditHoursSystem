"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/stores/useAuthStore';
import { api } from '@/apis/api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter()

    const { login } = useAuthStore();

    async function handleSubmit(formData: FormData) {
        const response = await api.post('auth/login', {
            national_id: formData.get("national_id"),
            password: formData.get("password")
        })
            .then((response) => response.data)
            .catch((error) => {
                toast.error(error.response.data.message);
            });

        if (response?.success) {
            login(response.data.token, response.data.user);

            toast.success(response.message);
            
            router.push('/');

            window.location.reload();
        }
    }

    return (
        <section className="bg-center bg-no-repeat bg-cover bg-[url('/images/education_bg.webp')] bg-gray-400 bg-blend-multiply shadow-lg hover:shadow">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link href="/" className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900">
                <Image width={90} height={90} src="/images/logo.png" alt="شعار جامعة كفر الشيخ" />
                <h1 className="text-lg font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
                كلية الحاسبات والمعلومات
                </h1>

                <p className="text-sm text-gray-300 text-center">
                نظام الساعات المعتمدة
                </p>
            </Link>
            <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 text-center">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-no-repeat bg-[url('/images/pattern_bg.jpg')] bg-cover">
                <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                تسجيل الدخول
                </h1>

                <hr />

                <form className="space-y-4 md:space-y-6" action={handleSubmit}>
                <div>
                    <label htmlFor="website-admin" className="block mb-2 text font-medium text-gray-900">الرقم القومي</label>
                    <div className="flex">
                        <input name="national_id" type="text" id="website-admin" className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="رقمك القومي" />
                    </div>
                </div>

                <div>
                    <label htmlFor="website-admin" className="block mb-2 text font-medium text-gray-900">كلمة السر</label>
                    <div className="flex">
                        <input name="password" type="password" id="website-admin" className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="كلمة سرك" />
                    </div>
                </div>

                <div className='flex flex-col gap-6 items-center justify-center'>
                    <button type="submit" className=" py-3 px-5 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
                        تسجيل الدخول
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
    )
}
