"use client"

import { api } from "@/apis/api";
import { log } from "console";
import { redirect } from "next/navigation";
import * as React from "react"
import toast from "react-hot-toast";

export default function Page() {
    const ref = React.useRef<HTMLFormElement>(null)

    async function handleSubmit(formData: FormData) {
        const response = await api.post('results/submit', {})
            .then((response) => response.data)
            .catch((error) => { });

        toast.success("تم اعلان النتيجة");
    }

    return (
        <section className="min-h-screen mt-4">
            <form ref={ref} action={handleSubmit}>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <span className="inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
                        <span className="text-sm font-medium">النتائج</span>
                    </span>

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                        النتائج
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        <span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">
                            إعلان النتيجة
                        </span>
                    </p>
                </div>

                <section>
                    <div className="flex items-center">
                        <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
                        <div className="px-3 text-gray-800 text-xl font-bold">اعلان النتيجة</div>
                        <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
                    </div>

                    <div className="flex items-center justify-center mt-8">
                        <div className="flex flex-col">
                            <p className="px-3 text-gray-800 text-xl font-bold text-center">
                                عند النقر علي الزر سيتم نشر النتيجة واشعار الطلاب بنشرها.
                            </p>
                            <button type="submit" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded mt-4">
                                اعتماد النتيجة
                            </button>
                        </div>
                    </div>
                </section>
            </form>
        </section >
    );
}
