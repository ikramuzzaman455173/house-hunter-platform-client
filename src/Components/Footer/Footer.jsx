import React from 'react';
import { FaClock } from 'react-icons/fa';
import { TfiLocationPin } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import SoclialMediaIcon from '../SharedComponents/SocialMediaIcon';
const Footer = () => {
  // todo:some section styles project end
  return (
      <footer className="p-5 border-2 mt-[5rem]" id="animation">
        <div className="container px-6 py-12 mx-auto relative  z-10">
          <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl">Subscribe our newsletter to get update.</h1>

            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <Link to='/register' className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-accent rounded-lg gap-x-3 hover:bg-neutral focus:ring focus:ring-gray-300 focus:ring-opacity-80 cursor-pointer">
                <span>Sign Up Now</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold">Quick Link</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <span className="footer-span">Home</span>
                <span className="footer-span">About Us</span>
                <Link  className="footer-span">Blogs</Link>
                <Link  className="footer-span">find new house</Link>
              </div>
            </div>

            <div>
              <p className="font-semibold">Our features</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <ul className="footer-ul"><li>rent house</li></ul>
                <ul className="footer-ul"><li>sell house</li></ul>
                <ul className="footer-ul"><li>best house</li></ul>
                <ul className="footer-ul"><li>new house collection</li></ul>
                <ul className="footer-ul"><li>modern house collection</li></ul>
              </div>
            </div>

            <div>
              <p className="font-semibold">Get In Touch</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <div className='flex items-center gap-4'>
                  <FaClock className='text-4xl bg-blue-600 p-2 border-0 rounded-full' />
                  <div className='flex flex-col gap-2'>
                  <p className='text-slate-400 font-medium'>Monday- Friday:</p>
                  <p><strong>08am - 12pm</strong></p>
                  </div>
                </div>


                <div className='flex items-center gap-4'>
                  <TfiLocationPin className='text-4xl bg-blue-600 p-2 border-0 rounded-full' />
                  <div className='flex flex-col gap-2'>
                  <p className='text-slate-400 font-medium'>8121 Sierra Lane Tampa,</p>
                  <p><strong>Florida 33604</strong></p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <p className="font-semibold">Contact Us</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <span className="footer-span">+880 768 473 4978</span>
                <span className="footer-span lowercase">info@<span className='text-info lowercase'>houseHunter</span>123.com</span>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex lg:flex-row md:flex-col flex-col items-center justify-between">
            <div className='flex items-center gap-2'>
            <img className='w-12' src="/src/assets/logo/logo.png" alt="site logo" />
            <h3 className='text-info'>House<span className='text-slate-500'>Hunter</span></h3>
          </div>
          <div className='pt-5'>
          <SoclialMediaIcon/>
          </div>
            <p className="mt-4 text-sm text-white text-center sm:mt-0">© Copyright 2023. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;