"use client"

import { api } from "@/apis/api";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [specialty, setSpecialty] = useState(1);

  const fetchDoctorsData = async () => {
    const response = await api.get('users/groups/doctor');
    setDoctors(response.data.data);
  };

  const ref = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const response = await api.post('subjects', {
      name: formData.get("name"),
      score: formData.get("score"),
      code: formData.get("code"),
      user_id: formData.get("user_id"),
      specialty_id: specialty,
    })
      .then((response) => response.data)
      .catch((error) => {
        ref.current?.reset();
        return toast.error(error.response.data.message);
      });

    if (response?.data) {
      toast.success("تم الإضافة بنجاح");
      redirect('/dashboard/study/subjects');
    }
  }

  const changeSpecialty = async (key: string) => {
    // @ts-ignore
    setSpecialty(key);
  };

  const fetchSpecialties = async () => {
    const response = await api.get('specialties');
    setSpecialties(response.data.data);
    setSpecialty(response.data.data[0].id);
  };
  
  useEffect(() => {
    fetchDoctorsData();
    fetchSpecialties();
  }, []);

  return (
    <section className="min-h-screen mt-4">
      <form ref={ref} action={handleSubmit}>

        <div className="mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <span className="inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
            <span className="text-sm font-medium">المواد</span>
          </span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            المواد
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            اضافة مادة جديد.
          </p>
        </div>

        <section>
          <div className="flex items-center">
            <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
            <div className="px-3 text-gray-800 text-xl font-bold">المادة</div>
            <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
          </div>

          <div className="bg-gradient-to-r from-slate-100 to-slate-50 shadow border border-gray-200 rounded-lg mt-4 mb-4">
            <div className="grid gap-6 mb-6 md:grid-cols-5 p-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">إسم المادة</label>
                <input name="name" required min={2} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">كود المادة</label>
                <input name="code" required min={2} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">عدد الساعات</label>
                <input name="score" required type="number" min={1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">التخصص</label>
                <select onChange={(e) => changeSpecialty(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2">
                  {specialties && specialties.map((item: any) => (
                    // @ts-ignore
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">دكتور المادة</label>
                <select required name="user_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2">
                  {doctors.map((doctor: any) => (
                    // @ts-ignore
                    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center">
          <button type="submit" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
            إضافة المادة
          </button>
        </div>
      </form>
    </section>
  );
}