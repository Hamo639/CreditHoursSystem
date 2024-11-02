import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'النظام الالكتروني للساعات المعتمدة',
  description: 'النظام الالكتروني للساعات المعتمدة - جامعة كفر الشيخ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}
