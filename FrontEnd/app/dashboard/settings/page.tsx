"use client"

import { api } from "@/apis/api";
import { log } from "console";
import { redirect } from "next/navigation";
import * as React from "react"
import toast from "react-hot-toast";

export default function Page() {
    const [settings, setSettings] = React.useState([]);
    const [seasons, setSeasons] = React.useState([]);

    const fetchSettingsData = async () => {
        const response = await api.get('settings');
        setSettings(response.data.data);
    };

    const fetchSeasonsData = async () => {
        const response = await api.get('seasons');
        setSeasons(response.data.data);
    };

    const ref = React.useRef<HTMLFormElement>(null)

    async function handleSubmit(formData: FormData) {
        const response = await api.put('settings', {
            current_season_id: formData.get("current_season_id"),
            enroll_subjects: formData.get("enroll_subjects"),
            update_results: formData.get("update_results"),
            enroll_subjects_count: formData.get("enroll_subjects_count"),
        })
            .then((response) => response.data)
            .catch((error) => {
                ref.current?.reset();
                return toast.error(error.response.data.message);
            });

        toast.success("تم التحديث بنجاح");
    }

    React.useEffect(() => {
        fetchSettingsData();
        fetchSeasonsData();
    }, []);

    return (
        <section className="min-h-screen mt-4">
            <form ref={ref} action={handleSubmit}>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <span className="inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
                        <span className="text-sm font-medium">الإعدادات</span>
                    </span>

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                        إعدادات
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        <span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">
                            إعدادات النظام
                        </span>
                    </p>
                </div>

                <section>
                    <div className="flex items-center">
                        <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
                        <div className="px-3 text-gray-800 text-xl font-bold">إعدادات</div>
                        <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
                    </div>

                    <div className="bg-gradient-to-r from-slate-100 to-slate-50 shadow border border-gray-200 rounded-lg mt-4 mb-4">
                        <div className="grid gap-6 mb-6 md:grid-cols-2 p-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">تفعيل التسجيل بالمقررات</label>
                                {
                                    // @ts-ignore
                                    settings?.enroll_subjects == true &&
                                    <select required name="enroll_subjects" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2">
                                        <option value={1} selected>نعم</option>
                                        <option value={0}>لا</option>
                                    </select>
                                }

                                {
                                    // @ts-ignore
                                    settings?.enroll_subjects == false &&
                                    <select required name="enroll_subjects" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2">
                                        <option value={1}>نعم</option>
                                        <option value={0} selected>لا</option>
                                    </select>
                                }
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">تفعيل تحديث النتائج</label>
                                {
                                    // @ts-ignore
                                    settings?.update_results == true &&
                                    <select required name="update_results" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2">
                                        <option value={1} selected>نعم</option>
                                        <option value={0}>لا</option>
                                    </select>
                                }

                                {
                                    // @ts-ignore
                                    settings?.update_results == false &&
                                    <select required name="update_results" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2">
                                        <option value={1}>نعم</option>
                                        <option value={0} selected>لا</option>
                                    </select>
                                }
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">الفصل الحالي</label>
                                <select required name="current_season_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2">
                                    {seasons.map((item: any) => (
                                        // @ts-ignore
                                        <option key={item.id} value={item.id} selected={
                                            // @ts-ignore
                                            item.id == settings?.current_season_id
                                        }>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">عدد المواد المتاحة للتسجيل بالفصل</label>
                                <input defaultValue={
                                    // @ts-ignore
                                    settings?.enroll_subjects_count
                                } required type="number" min={1} name="enroll_subjects_count" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
                            تحديث الإعدادات
                        </button>
                    </div>
                </section>
            </form>
        </section >
    );
}
