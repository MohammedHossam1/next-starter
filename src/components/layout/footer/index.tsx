import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Site name or logo */}
        <div className="text-lg font-semibold text-gray-800">
          © {new Date().getFullYear()} Hossam | All rights reserved.
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
        </div>

        {/* Social media icons */}
        <div className="flex gap-4 text-gray-600">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
