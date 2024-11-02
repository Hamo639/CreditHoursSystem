"use client"

import Link from "next/link";
import * as React from "react"
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { api } from '@/apis/api';
import { FaPlus } from "react-icons/fa";

export default function () {
  const columns = [
    {
      name: 'التخصص',
      selector: (row: { name: string; }) => row.name,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    }
  ];

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get('specialties');
    setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen mt-4">

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <span className="inline-flex justify-between items-center py-1 px-3 pe-4 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
          <span className="text-sm font-medium py-1 px-2">التخصصات</span>
        </span>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          التخصصات
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          سجل بجميع التخصصات.
        </p>
      </div>

      <section className="bg-gradient-to-r from-slate-50 to-slate-100 mb-4 rounded border border-gray-200 hover:shadow p-4">
        <div className="flex justify-between items-center">
          <div className="text-right">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900">التخصصات</h1>
            <p className="text-md mt-2 font-normal text-gray-500 dark:text-gray-400">سجل بجميع التخصصات.</p>
          </div>
        </div>
      </section>

      <section className="block p-2 bg-white border border-gray-200 rounded bg-gradient-to-r from-slate-50 to-slate-100">

        <div className="bg-white mb-4 rounded border-gray-200 border p-2">
          <p className="text-md font-normal text-gray-500">السجل الآتي يعرض التخصصات : </p>
        </div>

        <DataTable
          className="shadow-md rounded-lg p-2 hover:shadow-lg border-solid border"
          striped={true}
          highlightOnHover={true}
          // @ts-ignore
          columns={columns}
          data={data}
          fixedHeader={true}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
          paginationComponentOptions={{
            rowsPerPageText: 'عدد الصفوف',
            rangeSeparatorText: 'من',
            selectAllRowsItem: true,
            selectAllRowsItemText: 'كل الصفوف',
          }}
        />

      </section>

    </section>
  );
}