import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Loader from '@/src/components/common/Loader';
import Sidebar from '@/src/layout/admin-layout/Sidebar';
import Header from '@/src/layout/admin-layout/Header';

export default function AdminLayout({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Head>
        <title> Metaquity network </title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Built with Next.js and TypeScript" />
        <link rel="shortcut icon" href="/image/logo/logo.png" />
      </Head>

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
    </>
  );
}
