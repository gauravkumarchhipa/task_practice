import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
      <footer className="rounded-lg shadow text-gray-700 bg-gray-400 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Practice
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0 ">
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline me-4 md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-700 sm:text-center">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              Practice
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
}

export default Footer