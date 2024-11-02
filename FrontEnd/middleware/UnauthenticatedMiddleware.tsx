"use client";

import React from 'react'
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react"
import { redirect } from 'next/navigation';

const UnauthenticatedMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthStore();

  const middleware = () => {
    if ((session == 'unauthenticated'))
      return true;
  };

  useEffect(() => {
    if (!middleware()) redirect('/');
  }, []);

  return (<>{middleware() && children}</>)
}

export default UnauthenticatedMiddleware