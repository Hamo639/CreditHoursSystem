"use client";

import React from 'react'
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react"
import { redirect } from 'next/navigation';

const DashboardMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { session, profile } = useAuthStore();

  const middleware = () => {
    if ((session == 'authenticated') && (profile.role == "superadmin" || profile.role == "employee"))
      return true;
  };

  useEffect(() => {
    if (middleware()) return;

    redirect('/');
  }, []);
  return (<>{middleware() && children }</>)
}

export default DashboardMiddleware