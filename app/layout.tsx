'use client';
import './globals.css';
import './satoshi.css';
import { useState, useEffect } from 'react';
import Loader from '@/components/common/Loader';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="h-auto">
                  <div className="mx-4 mt-5 p-4 md:p-6 2xl:p-10 bg-white h-full dark:bg-boxdark-2">{children}</div>
                </main>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
