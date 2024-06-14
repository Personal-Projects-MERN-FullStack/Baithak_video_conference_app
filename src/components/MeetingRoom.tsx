import { cn } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import { CallControls, CallParticipantsList, CallStatsButton, CallingState, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { LayoutList, Loader, Users } from 'lucide-react'
import EndCallButton from './EndCallButton'
type callLayoutType= 'grid' | 'speaker-left' | 'speaker-right'
const MeetingRoom = () => {
    const [layout, setLayout] = useState('Speaker-left')
    const [showParticipants, setshowParticipants] = useState(false)
 
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get('personal');
    const router = useRouter();
    const CallLayout = ()=>{
        switch(layout){
            case 'grid' :
                return <PaginatedGridLayout/>
            case 'speaker-left':
                return <SpeakerLayout participantsBarPosition='right' /> 
            default:
                return <SpeakerLayout participantsBarPosition='left' /> 
            
        }
    }

    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();

    if (callingState !== CallingState.JOINED) return <Loader />;
  
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
    <div className="relative flex size-full items-center justify-center">
      <div className=" flex size-full max-w-[1000px] items-center">
        <CallLayout />
      </div>
      <div
        className={cn('h-[calc(100vh-86px)]  ml-2', {
          'hidden': !showParticipants,
        })}
      >
        <CallParticipantsList onClose={() => setshowParticipants(false)} />
      </div>
    </div>
    {/* video layout and call controls */}
    <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
      <CallControls onLeave={() => router.push(`/`)} />

      <DropdownMenu>
        <div className="flex items-center">
          <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
            <LayoutList size={20} className="text-white" />
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
          {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
            <div key={index}>
              <DropdownMenuItem
                onClick={() =>
                  setLayout(item.toLowerCase() as callLayoutType)
                }
              >
                {item}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-dark-1" />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <CallStatsButton />
      <button onClick={() => setshowParticipants((prev) => !prev)}>
        <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
          <Users size={20} className="text-white" />
        </div>
      </button>
      {!isPersonalRoom && <EndCallButton />}
    </div>
  </section>
  )
}

export default MeetingRoom