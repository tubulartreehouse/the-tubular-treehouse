// components/Layout.tsx

import { ReactNode } from 'react';
import Header from './header/header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;