import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiLogOut, FiBookOpen } from "react-icons/fi";
import { FaBuilding, FaUserTie, FaEdge, FaEdgeLegacy, FaBell, FaGear, FaCheckDouble, FaBook, FaCloudMoon, FaUserGraduate, FaUserShield, FaUserSecret, FaPersonChalkboard, FaNewspaper, FaRegFolder, FaI, FaAddressCard, FaCheck, FaDatabase } from "react-icons/fa6";
import { useAuthStore } from '@/stores/useAuthStore';

export default function () {
  const { session, profile, logout } = useAuthStore();
  const [data, setData] = useState({});

  useEffect(() => {
    // Super admin
    if (session == 'authenticated' && profile?.role === 'superadmin') {
      setData({
        "لوحة التحكم": [
          { label: "الرئيسية", path: "/dashboard", icon: <FaBuilding /> },
        ],
        "المستخدمين": [
          { label: "الطلاب", path: "/dashboard/users/students", icon: <FaUserGraduate /> },
          { label: "الموظفين", path: "/dashboard/users/employees", icon: <FaUserTie /> },
          { label: "المراقبين", path: "/dashboard/users/supervisors", icon: <FaUserShield /> },
          { label: "الأساتذة الجامعيين", path: "/dashboard/users/doctors", icon: <FaPersonChalkboard /> },
          { label: "رؤساء الاقسام", path: "/dashboard/users/professors", icon: <FaUserSecret /> },
        ],
        "الدراسة": [
          { label: "الأعوام", path: "/dashboard/study/years", icon: <FaDatabase /> },
          { label: "التخصصات", path: "/dashboard/study/majors", icon: <FaAddressCard /> },
          { label: "الفصول", path: "/dashboard/study/terms", icon: <FaCloudMoon /> },
          { label: "المواد", path: "/dashboard/study/subjects", icon: <FaBook /> },
        ],
        "النتائج": [
          { label: "إعلان النتيجة", path: "/dashboard/results/submit", icon: <FaCheckDouble /> },
        ],
        "الطالب": [
          { label: "النتائج", path: "/dashboard/student/results", icon: <FaNewspaper /> },
          { label: "التسجيلات الحالية", path: "/dashboard/student/subjects", icon: <FaRegFolder /> },
        ]
      });
    }

    // Student
    if (session == 'authenticated' && profile?.role == 'student') {
      setData({
        "لوحة التحكم": [
          { label: "الرئيسية", path: "/dashboard", icon: <FaBuilding /> },
        ],
        "الطالب": [
          { label: "النتائج", path: "/dashboard/student/results", icon: <FaNewspaper /> },
          { label: "التسجيلات الحالية", path: "/dashboard/student/subjects", icon: <FaRegFolder /> },
          profile?.year != null ? { label: "تسجيل المقررات", path: "/dashboard/student/term", icon: <FaI /> } : null
        ].filter(Boolean)
      });
    }

    // Doctor
    if (session == 'authenticated' && profile?.role === 'doctor') {
      setData({
        "لوحة التحكم": [
          { label: "الرئيسية", path: "/dashboard", icon: <FaBuilding /> },
        ],
        "النتائج": [
          { label: "نتيجة المواد", path: "/dashboard/results/final", icon: <FaCheckDouble /> },
        ]
      });
    }

    // Employee
    if (session == 'authenticated' && profile?.role === 'employee') {
      setData({
        "لوحة التحكم": [
          { label: "الرئيسية", path: "/dashboard", icon: <FaBuilding /> },
        ],
        "المستخدمين": [
          { label: "الطلاب", path: "/dashboard/users/students", icon: <FaUserGraduate /> },
        ],
        "الدراسة": [
          { label: "الأعوام", path: "/dashboard/study/years", icon: <FaDatabase /> },
          { label: "التخصصات", path: "/dashboard/study/majors", icon: <FaAddressCard /> },
          { label: "الفصول", path: "/dashboard/study/terms", icon: <FaCloudMoon /> },
          { label: "المواد", path: "/dashboard/study/subjects", icon: <FaBook /> },
        ],
        "النتائج": [
          { label: "إعلان النتيجة", path: "/dashboard/results/submit", icon: <FaCheckDouble /> },
        ],
      });
    }

    // Professor
    if (session == 'authenticated' && profile?.role === 'professor') {
      setData({
        "لوحة التحكم": [
          { label: "الرئيسية", path: "/dashboard", icon: <FaBuilding /> },
        ],
        "المستخدمين": [
          { label: "الأساتذة الجامعيين", path: "/dashboard/users/doctors", icon: <FaPersonChalkboard /> },
        ],
      });
    }

    // Supervisor
    if (session == 'authenticated' && profile?.role === 'supervisor') {
      setData({
        "لوحة التحكم": [
          { label: "الرئيسية", path: "/dashboard", icon: <FaBuilding /> },
        ],
        "المستخدمين": [
          { label: "الطلاب", path: "/dashboard/users/students", icon: <FaUserGraduate /> },
          { label: "الموظفين", path: "/dashboard/users/employees", icon: <FaUserTie /> },
          { label: "المراقبين", path: "/dashboard/users/supervisors", icon: <FaUserShield /> },
        ],
        "الدراسة": [
          { label: "الأعوام", path: "/dashboard/study/years", icon: <FaDatabase /> },
          { label: "التخصصات", path: "/dashboard/study/majors", icon: <FaAddressCard /> },
          { label: "الفصول", path: "/dashboard/study/terms", icon: <FaCloudMoon /> },
          { label: "المواد", path: "/dashboard/study/subjects", icon: <FaBook /> },
        ],
        "النتائج": [
          { label: "إعلان النتيجة", path: "/dashboard/results/submit", icon: <FaCheckDouble /> },
        ],
      });
    }
  }, []);

  const signout = () => {
    logout();
    window.location.reload();
  };

  return (
    <aside className="hidden bg-blue-900 md:block fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 to-slate-100 shadow" aria-label="Sidebar">
      <div className="h-full  overflow-y-auto">
        <ul className="space-y-4 font-medium my-4">
          {Object.entries(data).map(([category, items]) => (
            <li key={category}>
              <span className="text-gray-300 font-bold mt-4 mb-2 mx-2">{category}</span>
              <ul className="space-y-2">
                {
                  // @ts-ignore
                  items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path} passHref>
                        <span className="flex items-center p-2 mt-4 text-white hover:bg-gray-200 hover:text-black group">
                          <span className="flex whitespace-nowrap items-center justify-items-start gap-2">
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            {item.label}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))}
        </ul>

        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200-gray-700">
          {session == 'authenticated' && (profile?.role === 'superadmin' || profile?.role === 'employee' || profile?.role === 'supervisor') &&
            <li>
              <Link href="/dashboard/settings" className="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-200 hover:text-black group">
                <FaGear className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white" />
                <span className="ms-3">الإعدادات</span>
              </Link>
            </li>
          }
          <li>
            <Link href="/dashboard/notifications" className="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-200 hover:text-black group">
              <FaBell className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white" />
              <span className="ms-3">الإشعارات</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/about" className="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-200 hover:text-black group">
              <FiBookOpen className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white" />
              <span className="ms-3">مساعدة</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-200 hover:text-black group">
              <FaEdge className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white" />
              <span className="ms-3">رئيسية الموقع</span>
            </Link>
          </li>
          <li>
            <Link href="https://kfs.edu.eg/" target="_blank" className="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-200 hover:text-black group">
              <FaEdgeLegacy className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white" />
              <span className="ms-3">موقع الجامعة</span>
            </Link>
          </li>

          <li>
            <button onClick={() => { signout(); }} className="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-200 hover:text-black group cursor-pointer">
              <FiLogOut className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-white dark:group-hover:text-white" />
              <span className="ms-3">تسجيل خروج</span>
            </button>
          </li>
        </ul>

        <div id="dropdown-cta" className="p-4 mt-6" role="alert">
          <div className="flex items-center mb-3">
            <span className="bg-sky-100 text-sm font-semibold me-2 px-2.5 py-0.5 rounded">الساعات المعتمدة</span>
          </div>
          <p className="mb-3 text-sm text-white">
            كلية الحاسبات والمعلومات.
            <br />
            جامعة كفر الشيخ.
          </p>
        </div>

      </div>
    </aside>
  );
};