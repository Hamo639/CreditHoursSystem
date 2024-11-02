"use client"

import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-medium-image-zoom/dist/styles.css'
import './globals.css'
import AuthenticatedMiddleware from "@/middleware/AuthenticatedMiddleware";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <div className="p-4 sm:mr-64 mt-14 bg-gray-50">
          <AuthenticatedMiddleware>
            {children}
          </AuthenticatedMiddleware>
        </div>
      </div>
      <Footer />
    </>
  );
}
