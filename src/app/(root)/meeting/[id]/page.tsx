'use client'
import MeetingRoom from '@/components/MeetingRoom'
import MeetingSetup from '@/components/MeetingSetup'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'
import { useGetCallById } from '../../../../../hooks/useGetCallById'
import Loader from '@/components/Loader'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Meeting = () => {
  const { id } = useParams();
  const {user,isLoaded} = useUser()
  const [isSetupComplete, setisSetupComplete] = useState(false)
  const {call,isCallLoading} = useGetCallById(id) 
  if(!isLoaded || isCallLoading) return <Loader/>
  return (
    <main className="h-screen w-full">
          <nav className="flex-between fixed z-50 w-full  px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1 justify-center">
        <Image
          src="/icons/icon.png"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white flex items-center justify-center">
          BAITHAK
        </p>
      </Link>
      <div className="flex-between gap-5">
   
      </div>
    </nav>
      <StreamCall call={call} >
        <StreamTheme >
          {
            !isSetupComplete ? (
              <MeetingSetup setisSetupComplete={setisSetupComplete}/>
            ):(
              <MeetingRoom/>
            )
          }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting