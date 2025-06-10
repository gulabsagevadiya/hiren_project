'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, Phone } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  { name: 'Services', href: '/services/' },
  { name: 'Industries', href: '/industries/' },
  { name: 'Contact', href: '/contact/' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" prefetch={false}>
            <Shield className="h-8 w-8 text-blue-600" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">Inspectra</div>
              <div className="text-sm text-gray-600">Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+917600869646" className="flex items-center text-gray-700 hover:text-blue-600" prefetch={false}>
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">+91 7600869646</span>
            </Link>
            <Button asChild>
              <Link href="/contact" prefetch={false}>Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)} prefetch={false}>
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900">Inspectra</div>
                    <div className="text-sm text-gray-600">Services</div>
                  </div>
                </Link>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="flex flex-col space-y-4 pt-4 border-t">
                  <Link href="tel:+917600869646" className="flex items-center text-gray-700" prefetch={false}>
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91 7600869646</span>
                  </Link>
                  <Button asChild onClick={() => setIsOpen(false)}>
                    <Link href="/contact" prefetch={false}>Request Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}