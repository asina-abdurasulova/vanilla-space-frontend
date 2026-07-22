import type { JSX } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import {Home} from '@/pages/home/ui/home';


export default function AppRoutes(): JSX.Element {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home.html" element={<Home />} />
          <Route path="*" element={<div className="flex h-[50vh] items-center justify-center text-xl font-medium">404 — Страница не найдена</div>} />
        </Routes>
      </main>
    </>
  );
}