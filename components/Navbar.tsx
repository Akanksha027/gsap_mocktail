"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navLinks } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: 'bottom top',
        scrub: true,
      },
    });

    navTween.fromTo(
      navRef.current,
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );

    return () => {
      navTween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 p-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="h-8 w-auto" />
          <p className="text-white font-bold text-xl">Velvet Pour</p>
        </a>

        <ul className="flex gap-6 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-gray-300 transition">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
