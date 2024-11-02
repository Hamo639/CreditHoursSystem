"use client";

import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useAuthStore } from '@/stores/useAuthStore';

const LoginViaSession = ({ children }: { children: React.ReactNode }) => {
  const { loginViaSession, session } = useAuthStore();

  useEffect(() => {
    loginViaSession();
  }, []);

  return (
    <>
      {session !== 'loading' ? (
        children
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <ReactLoading type={'bubbles'} color={'#2563eb'} height={667} width={375} />
        </div>
      )}
    </>
  );
};

export default LoginViaSession;
