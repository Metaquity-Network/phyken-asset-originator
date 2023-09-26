'use client';
import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <div className="relative bg-white shadow-[4px_4px_15px_rgba(0,_0,_0,_0.15)] w-full h-[903px] overflow-hidden text-left text-xs text-gray-300 font-inter">
      <div className="flex h-screen">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main className="absolute top-[141px] left-[318px] flex flex-col items-start justify-start gap-[45px]">
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
