"use client"

import { api } from "@/apis/api";
import * as React from "react"
import { useState } from "react";
import toast from "react-hot-toast";

export default function ({
  // @ts-ignore
  params
}) {
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = React.useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    console.log(JSON.stringify(years));

    try {
      await api.put(`years`, {
        years: JSON.stringify(years),
      })
      toast.success("تم التحديث بنجاح");
    } catch (error) {
      toast.error("حدث خطأ أثناء التحديث");
    }
  }

  const handleChange = (index: number, type: string, value: number) => {
    const updatedYears = [...years];

    if (type == 'min_hours')
      // @ts-ignore
      updatedYears[index].min_hours = value;

    if (type == 'hours') {
      // @ts-ignore
      updatedYears[index].hours = value;
    }

    setYears(updatedYears);
  }

  const fetchYears = async () => {
    const response = await api.get(`years`);
    setYears(response.data);
    setLoading(true);
  };

  React.useEffect(() => {
    fetchYears();
  }, []);

  return (
    <section className="min-h-screen mt-4">
      <form ref={ref} action={handleSubmit}>

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <span className="inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
            <span className="text-sm font-medium">الأعوام</span>
          </span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            الأعوام الدراسية
          </h1>
        </div>

        <section>
          <div className="flex items-center">
            <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
            <div className="px-3 text-gray-800 text-xl font-bold">الأعوام</div>
            <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
          </div>

          {years && years.map((item, key) => (
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 shadow border border-gray-200 rounded-lg mt-4 mb-4" key={key}>
              <div className="grid gap-6 mb-6 md:grid-cols-3 p-4">
                <div className="hidden">
                  <label className="block mb-2 text-sm font-medium text-gray-900">الرقم التعريفي</label>
                  <input type="text" hidden defaultValue={
                    // @ts-ignore
                    item?.id
                  } placeholder="" required />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">السنة</label>
                  <input type="text" disabled defaultValue={
                    // @ts-ignore
                    item?.name
                  } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">اقل عدد ساعات</label>
                  <input type="number" defaultValue={
                    // @ts-ignore
                    item?.min_hours
                  }
                    onChange={
                      // @ts-ignore
                      (e) => handleChange(key, 'min_hours', parseInt(e.target.value))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">الساعات المطلوبة</label>
                  <input type="number" required defaultValue={
                    // @ts-ignore
                    item?.hours
                  }
                    onChange={
                      // @ts-ignore
                      (e) => handleChange(key, 'hours', parseInt(e.target.value))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" min={0} />
                </div>
              </div>
            </div>
          ))}

          {
            loading && years && years.length == 0 &&
            <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
              لا يوجد أعوام دراسية متوفرة الآن.
            </div>
          }

        </section>
        <div className="flex items-center justify-center">
          <button type="submit" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
            تحديث
          </button>
        </div>
      </form>
    </section >
  );
}
