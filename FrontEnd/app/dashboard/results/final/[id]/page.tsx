"use client"

import { api } from "@/apis/api";
import * as React from "react"
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPrint } from "react-icons/fa";
// @ts-ignore
import html2pdf from 'html2pdf.js/dist/html2pdf.min';

export default function ({
  // @ts-ignore
  params
}) {
  const [subject, setSubject] = useState();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = React.useState([]);

  const ref = React.useRef<HTMLFormElement>(null)

  const printHandler = async (): Promise<void> => {
    const element = document.getElementById('print-content') as HTMLElement;

    if (!element) {
      console.error('Element with id "print-content" not found');
      return;
    }

    const originalDisplay: string = element.style.display;

    element.style.display = 'block';

    const opt = {
      margin: 1,
      filename: 'الدرجات.pdf',
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      await html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error('Error generating PDF', error);
    } finally {
      element.style.display = originalDisplay;
    }
  };

  async function handleSubmit(formData: FormData) {
    try {
      await api.post(`results/${params.id}`, {
        results: JSON.stringify(results),
      })
      toast.success("تم تحديث النتائج بنجاح");
    } catch (error) {
      toast.error("حدث خطأ أثناء تحديث النتائج");
    }

    fetchResults();
  }

  const handleChange = (index: number, type: string, value: number) => {
    const updatedResults = [...results];
    if (type == 'exam_grade')
      // @ts-ignore
      updatedResults[index].exam_grade = value;

    if (type == 'extra_grade') {
      // @ts-ignore
      updatedResults[index].extra_grade = value;
    }
    setResults(updatedResults);
  }

  const fetchResults = async () => {
    const response = await api.get(`subjects/${params.id}/students`);
    setResults(response.data);
    setLoading(true);
  };

  const fetchSubject = async () => {
    const response = await api.get(`subjects/${params.id}`);
    setSubject(response.data.data);
  };

  const fetchSettingsData = async () => {
    const response = await api.get('settings');
    setSettings(response.data.data);
  };

  React.useEffect(() => {
    fetchSubject();
    fetchResults();
    fetchSettingsData();
  }, []);


  const content = () => {
    return (
      <section className="min-h-screen mt-4" hidden id="print-content">

        <h1 className="text-4xl mb-8 text-center">
          نتائج الإمتحان النهائي
        </h1>

        <section>
          <h1 className="text-2xl mb-8 text-center">
          كود المادة : {
                  // @ts-ignore
                  subject?.name
                }
          </h1>

          <div className="overflow-x-auto p-4">
          {results && results.map((item, key) => (
            <table className="w-full text-sm text-left text-gray-500 mt-2">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">البند</th>
                  <th scope="col" className="px-6 py-3">التفاصيل</th>
                </tr>
              </thead>
                <tbody className="text-center">
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900">إسم الطالب</th>
                    <td className="px-6 py-4">{
                      // @ts-ignore
                      item?.student?.name
                    }</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900">البريد الإلكتروني</th>
                    <td className="px-6 py-4">{
                      // @ts-ignore
                      item?.student?.email
                    }</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900">درجة اعمال السنة</th>
                    <td className="px-6 py-4">{
                      // @ts-ignore
                      item?.student?.result?.exam_grade ?? 0
                    }</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900">درجة الاختبار</th>
                    <td className="px-6 py-4">{
                      // @ts-ignore
                      item?.student?.result?.extra_grade ?? 0
                    }</td>
                  </tr>
                </tbody>
            </table>
              ))}
          </div>
        </section>

      </section>
    );
  };

  return (
    <>
      {content()}

      <section className="min-h-screen mt-4">
        <form ref={ref} action={handleSubmit}>

          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <span className="inline-flex justify-between items-center py-1 px-2 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
              <span className="text-sm font-medium">النتائج</span>
            </span>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              نتائج الإمتحان النهائي
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
              <span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">
                كود المادة : {
                  // @ts-ignore
                  subject?.name
                }
              </span>
            </p>
          </div>

          <section>
            <div className="flex items-center">
              <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
              <div className="px-3 text-gray-800 text-xl font-bold">الدرجات</div>
              <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
            </div>

            {results && results.map((item, key) => (
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 shadow border border-gray-200 rounded-lg mt-4 mb-4" key={key}>
                <div className="grid gap-6 mb-6 md:grid-cols-4 p-4">
                  <div className="hidden">
                    <label className="block mb-2 text-sm font-medium text-gray-900">الرقم التعريفي</label>
                    <input type="text" hidden defaultValue={
                      // @ts-ignore
                      item?.student?.id
                    } placeholder="" required />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">إسم الطالب</label>
                    <input type="text" disabled defaultValue={
                      // @ts-ignore
                      item?.student?.name
                    } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">البريد الإلكتروني</label>
                    <input type="text" disabled defaultValue={
                      // @ts-ignore
                      item?.student?.email
                    } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" required />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">درجة اعمال السنة</label>
                    <input type="number" required defaultValue={
                      // @ts-ignore
                      item?.student?.result?.exam_grade ?? 0
                    }
                      onChange={
                        // @ts-ignore
                        (e) => handleChange(key, 'exam_grade', parseInt(e.target.value))
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" min={0} />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">درجة الاختبار</label>
                    <input type="number" required defaultValue={
                      // @ts-ignore
                      item?.student?.result?.extra_grade ?? 0
                    }
                      onChange={
                        // @ts-ignore
                        (e) => handleChange(key, 'extra_grade', parseInt(e.target.value))
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5-gray-600 p-2" placeholder="" min={0} />
                  </div>
                </div>
              </div>
            ))}

            {
              loading && results && results.length == 0 &&
              <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                لا يوجد طلاب مسجلة بالمادة.
              </div>
            }

          </section>
          {
            <div className="flex items-center justify-center gap-4">
              {
                // @ts-ignore
                settings?.update_results == true &&
                <button type="submit" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 hover:rounded">
                  تسجيل النتائج
                </button>
              }

              <button type="button" onClick={() => printHandler()} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 hover:scale-110 hover:rounded">
                <FaPrint />
                طباعة
              </button>
            </div>
          }
        </form>
      </section >
    </>
  );
}
