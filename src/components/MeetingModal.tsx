import React from 'react'
interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    instantMeeting?: boolean;
    image?: string;
    buttonClassName?: string;
    buttonIcon?: string;
  }
  
const MeetingModal = ({isOpen,onClose,title,className,children,handleClick,buttonText,image,buttonIcon}:MeetingModalProps) => {
  return (
    <div>
        
    </div>
  )
}

export default MeetingModal