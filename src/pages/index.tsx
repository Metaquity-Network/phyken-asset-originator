
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Connect = dynamic(() => import('../../components/Connnetct').then(m => m.Connect), {
  ssr: false,
});


export default function Home() {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-gray-900">
    <a href="#" className="text-white font-bold text-xl">Metaquity</a>
  <Connect />
  </header>
  )
}
