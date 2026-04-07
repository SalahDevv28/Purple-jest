'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { company } from '@/lib/data';
import { useState } from 'react';

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-neutral-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary-700 font-serif text-xl md:text-2xl font-bold tracking-tight">
              {company.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-neutral-700 hover:text-primary-700 font-medium transition-colors">
              Home
            </Link>
            <Link href="/information" className="text-neutral-700 hover:text-primary-700 font-medium transition-colors">
              Information
            </Link>
            <Link href="/shop" className="text-neutral-700 hover:text-primary-700 font-medium transition-colors">
              Shop
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-neutral-700 hover:text-primary-700 font-medium transition-colors"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-6 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-neutral-700"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-6 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-700 p-2"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="text-neutral-700 hover:text-primary-700 font-medium transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/information"
                  className="text-neutral-700 hover:text-primary-700 font-medium transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Information
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-neutral-700 hover:text-primary-700 font-medium transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
