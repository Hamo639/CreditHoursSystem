import UnauthenticatedMiddleware from '@/middleware/UnauthenticatedMiddleware'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin', 'arabic'] })

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
    <>
      <UnauthenticatedMiddleware>
        {children}
      </UnauthenticatedMiddleware>
    </>
  )
}
