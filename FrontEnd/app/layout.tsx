import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import LoginViaSession from '@/components/auth/LoginViaSession'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'النظام الالكتروني لجامعة كفر الشيخ',
  description: 'النظام الالكتروني لجامعة كفر الشيخ - لطلبات الإلتحاق والتحويلات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body  dir='rtl' className={tajawal.className}>
      <Toaster />
            <LoginViaSession>
              {children}
            </LoginViaSession>
      </body>
    </html>
  )
}
