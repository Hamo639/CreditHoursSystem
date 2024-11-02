"use client"

import { api } from "@/apis/api";
import * as React from "react";
import DataTable from "react-data-table-component";
import { useAuthStore } from '@/stores/useAuthStore';

const ResultsPage: React.FC = () => {

  const columns = [
    {
      name: 'المادة',
      selector: (row: any) => row?.subject?.name,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'الكود',
      selector: (row: any) => row?.subject?.code,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
    {
      name: 'الدرجة',
      selector: (row: any) => row?.grade,
      sortable: true,
      style: {
        fontSize: '14px',
      },
    },
  ];

  const [data, setData] = React.useState([]);
  const [seasons, setSeasons] = React.useState([]);
  const [years, setYears] = React.useState([]);

  const [currentYear, setCurrentYear] = React.useState<string>('2024');
  const [currentSeason, setCurrentSeason] = React.useState<string>('1');

  const { profile } = useAuthStore();

  const fetchSeasons = async () => {
    try {
      const response = await api.get('seasons');
      setSeasons(response.data.data);
      if (response.data.data.length > 0) {
        setCurrentSeason(response.data.data[0].id);
      }
    } catch (error) {
      console.error('Error fetching seasons:', error);
    }
  };

  const fetchYears = async () => {
    try {
      const response = await api.get('students/subjects/years');
      setYears(response.data);
      if (response.data.length > 0) {
        setCurrentYear(response.data[0].id);
      }
    } catch (error) {
      console.error('Error fetching years:', error);
    }
  };

  const fetchData = async (seasonId: string, year: string) => {
    try {
      const response = await api.get(`results/${seasonId}/${year}`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchSeasons();
    fetchYears();
  }, []);

  React.useEffect(() => {
    if (currentSeason && currentYear) {
      fetchData(currentSeason, currentYear);
    }
  }, [currentSeason, currentYear]);

  return (
    <section className="min-h-screen mt-4">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <span className="inline-flex justify-between items-center py-1 px-3 pe-4 mb-7 text-sm text-gray-700 bg-blue-200 rounded-full">
          <span className="text-sm font-medium py-1 px-2">التسجيلات والنتائج السابقة</span>
        </span>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          النتائج
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          سجل بالتسجيلات والنتائج السابقة.
        </p>
      </div>
      <section className="bg-gradient-to-r from-slate-50 to-slate-100 mb-4 rounded border border-gray-200 hover:shadow p-4">
        <div className="flex justify-between items-center">
          <div className="text-right">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900">النتائج</h1>
            <p className="text-md mt-2 font-normal text-gray-500 dark:text-gray-400">سجل بجميع التسجيلات والنتائج السابقة.</p>
          </div>
          <div className="text-center flex flex-row gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="yearSelect" className="block mb-2 text-sm font-medium text-gray-900">العام</label>
              <select
                id="yearSelect"
                onChange={(e) => setCurrentYear(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {years.map((item: any) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="seasonSelect" className="block mb-2 text-sm font-medium text-gray-900">الترم</label>
              <select
                id="seasonSelect"
                onChange={(e) => setCurrentSeason(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {seasons.map((item: any) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="block p-2 bg-white border border-gray-200 rounded bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="bg-white mb-4 rounded border-gray-200 border p-2">
          <p className="text-md font-normal text-gray-500">السجل الآتي يعرض التسجيلات والنتائج السابقة :</p>
        </div>
        {!profile?.blocked ? (
          <DataTable
            className="shadow-md rounded-lg p-2 hover:shadow-lg border-solid border"
            striped={true}
            highlightOnHover={true}
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
        ) : (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">تنبيه!</strong>
            <span className="block sm:inline"> الطالب محجوب ولا يمكن عرض بياناته.</span>
          </div>
        )}
      </section>
    </section>
  );
};

export default ResultsPage;
