"use client"

import { api } from "@/apis/api";
import { redirect } from "next/navigation";
import * as React from "react"
import toast from "react-hot-toast";

// @ts-ignore
export default function ({ params }) {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const response = await api.get(`seasons/${params.id}`);
    setData(response.data.data);
  };

  const ref = React.useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const response = await api.patch(`seasons/${params.id}`, {
      name: formData.get("name"),
    })
      .then((response) => response.data)
      .catch((error) => {
        ref.current?.reset();
        return toast.error(error.response.data.message);
      });

    if (response?.data) {
      toast.success("تم الإضافة بنجاح");
      redirect('/dashboard/study/terms');
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen mt-4">
      <form ref={ref} action={handleSubmit}>

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <span className="inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
            <span className="text-sm font-medium">الفصول</span>
          </span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            الفصول
          </h1>
        </div>

        <section>
          <div className="flex items-center">
            <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
            <div className="px-3 text-gray-800 text-xl font-bold">التخصص</div>
            <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
          </div>

          <div className="bg-gradient-to-r from-slate-100 to-slate-50 shadow border border-gray-200 rounded-lg mt-4 mb-4">
            <div className="grid gap-6 mb-6 md:grid-cols-1 p-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">إسم التخصص</label>

                <input minLength={2} name="name" type="text" defaultValue={
                  // @ts-ignore
                  data?.name
                } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" required />
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center">
          <button type="submit" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
            تعديل
          </button>
        </div>

      </form>
    </section>
  );
}
