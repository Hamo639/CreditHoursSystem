"use client"

import Link from "next/link";
import * as React from "react"
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { api } from '@/apis/api';
import toast from "react-hot-toast";
import DeleteConfirmation from "@/components/dashboard/DeleteConfirmation";
import { FaEye, FaPlus } from "react-icons/fa";

export default function () {
  const columns = [
    {
      name: 'المادة',
      selector: (row: { name: string; }) => row?.name,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'الكود',
      selector: (row: { code: string; }) => row?.code,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'الدكتور',
      selector: (row: { doctor: { name: string} }) => row?.doctor?.name,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'القسم',
      selector: (row: { specialty: { name: string} }) => row?.specialty?.name,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'الإجراءات',
      cell: (row: { id: number; }) => (
        <div className="flex flex-row gap-2">
          <Link href={`/dashboard/study/subjects/${row.id}`}>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-blue-500/50 font-medium rounded-full text-sm text-center py-2 px-3"><FaEye /></button>
          </Link>

          <DeleteConfirmation handleDelete={handleDelete} itemId={row.id} />
        </div>
      ),
      button: true,
    },
  ];

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get('subjects');
    setData(response.data.data);
  };

  const deleteDataById = async (id: string) => {
    await api.delete(`subjects/${id}`);
  };

  const handleDelete = (id: string) => {
    deleteDataById(id);
    fetchData();

    toast.success("تم الحذف بنجاح");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen mt-4">

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <span className="inline-flex justify-between items-center py-1 px-3 pe-4 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
          <span className="text-sm font-medium py-1 px-2">المواد</span>
        </span>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          المواد
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          سجل بجميع المواد.
        </p>
      </div>

      <section className="bg-gradient-to-r from-slate-50 to-slate-100 mb-4 rounded border border-gray-200 hover:shadow p-4">
        <div className="flex justify-between items-center">
          <div className="text-right">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900">المواد</h1>
            <p className="text-md mt-2 font-normal text-gray-500 dark:text-gray-400">سجل بجميع المواد.</p>
          </div>

          <div className="text-left">
            <Link href="/dashboard/study/subjects/create">
              <button type="button" className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-blue-500/50 font-medium rounded-full text-sm text-center py-2 px-3">
                <FaPlus /> اضافة
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="block p-2 bg-white border border-gray-200 rounded bg-gradient-to-r from-slate-50 to-slate-100">

        <div className="bg-white mb-4 rounded border-gray-200 border p-2">
          <p className="text-md font-normal text-gray-500">السجل الآتي يعرض المواد : </p>
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