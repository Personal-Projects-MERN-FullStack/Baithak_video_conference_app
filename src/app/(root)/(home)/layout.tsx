import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "Baithak",
  description: "Video calling App",
  icons: {
    icon: "/icons/icon.png",
  },
};

const HomeLayout = ({children} :{children :ReactNode}) => {
  
  return (
    <div className='relative'>
        <Navbar/>
         
        <div className="flex">
            <Sidebar/>
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                <div className="w-full text-white">
        {children}

                </div>
            </section>
        </div>
            
    </div>
  )
}

export default HomeLayout