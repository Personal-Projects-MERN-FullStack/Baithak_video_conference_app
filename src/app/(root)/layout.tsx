import { ReactNode } from 'react';
import StreamVideoProvider from '../../../providers/StreamClientProvider';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Baithak",
  description: "Video calling App",
  icons: {
    icon: "/icons/icon.png",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;