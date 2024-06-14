'use client'
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({setisSetupComplete} : {setisSetupComplete:(boolean)=>void}) => {
    const [isMicCarmToggledOn, setisMicCarmToggledOn] = useState(false)
    const call = useCall()
    if(!call){
        throw new Error('usecall must be used within StreamCall componant')
    }
    useEffect(() => {
     if(isMicCarmToggledOn){
        call?.camera?.disable()
        call?.microphone?.disable()
     }else{
        call?.camera?.enable();
        call?.microphone?.enable();

     }
    }, [isMicCarmToggledOn,call?.camera,call?.microphone])
    
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-2xl font-bold">Setup</h1>
        <VideoPreview/>
        <div className="flex h-16 items-center justify-center gap-3">
            <label htmlFor="" className="flex items-center justify-center gap-2 font-medium">
                <input type="checkbox" checked={isMicCarmToggledOn} 
                onChange={(e)=>setisMicCarmToggledOn(e.target.checked)}
                />
                Join without mic and Camera Off
            </label>
            <DeviceSettings/>
        </div>
        <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={()=>{
            call.join() 
            setisSetupComplete(true) 
            }}>
            Join Meeting
        </Button>
    </div>
  )
}

export default MeetingSetup