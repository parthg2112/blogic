'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          BLOGIC
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/blog" className={`nav-link ${pathname.startsWith('/blog') ? 'active' : ''}`}>
            Blog
          </Link>
        </nav>
        <div className="flex items-center">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;