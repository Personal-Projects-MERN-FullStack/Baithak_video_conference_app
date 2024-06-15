import {  SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <>
    <nav className="flex-around fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
        <div className="flex items-center gap-1 justify-center">
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
        </div>
        <div className="flex-between gap-5">
     
        </div>
      </nav>
      <section className="flex h-screen w-full items-end justify-center">
            
        <SignUp />
      </section>
    </>
  );
}