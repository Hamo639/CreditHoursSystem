"use client";

import React from 'react'
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react"
import { redirect } from 'next/navigation';

const AuthenticatedMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthStore();

  const middleware = () => {
    if ((session == 'authenticated'))
      return true;
  };

  useEffect(() => {
    if (!middleware()) redirect('/');
  }, []);

  return (<>{middleware() && children}</>)
}

export default AuthenticatedMiddleware