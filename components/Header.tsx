import React from 'react';
import Image from 'next/image';
import { FaPaintBrush } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap">
      {/* Mobile menu button */}
      <div className="block lg:hidden">
        <button className="flex items-center text-white hover:text-white text-lg">
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* Mobile Logo */}
      <div className="flex items-center flex-shrink-0 mr-6 lg:hidden">
        <Image
          src="/images/news/tow_logo_white_long.svg"
          alt="Alta VR Logo"
          height={40}
          width={230}
        />
      </div>
      {/* Menu Sign Up Button */}
      <div className="flex items-center lg:hidden">
        <a className="flex items-center text-white hover:text-yellow-400 cursor-pointer">
          <FaPaintBrush /> <span>Sign Up</span>
        </a>
      </div>

      {/* Desktop menu container */}
      <div className="desktop-menu-container px-5 z-10 hidden lg:flex">
        {/* Desktop Logo */}
        <div className="hidden lg:flex text-white hover:text-yellow-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 407.25 349.76"
            className="w-10 fill-current pt-4"
          >
            <path d="M399,7.32A94.23,94.23,0,0,1,392.19,0Q375.65,17,239.42,14.64h-143c-12.67-2.8-23.21-3-31.63-3H41.85Q27.25,11.68,15.09,1A37.3,37.3,0,0,1,0,13.62,294.69,294.69,0,0,1,20,73.46l26.28,2.92Q44.81,68.61,43.6,62T41.9,50.11q19.93-10.7,73-10.71,7.09,0,14.15.13c18.1.61,40,2.85,44.79,9.94q1.2,8.27,2,22.87l14.32,4.17-14,2.49q1.35,29,1.46,79.16L182,168.92l-4.26,10.93v61.52a6.07,6.07,0,0,0-.64,1.45l3,40.13-1.75,25.87-6.78,2.46c-1.35,2.5-7.41,5.14-18.28,7.94-3.57,1-7.38,1.87-11.43,2.67s-8,1.71-11.92,2.68q-4.38,5.83-4.38,11.67,0,11.68,13.14,11.68,10.16,0,28.78-1.1l8.21-10.09,4.09,9.46c4.86-.19,9.34-.35,13.41-.46,5.84-.17,10.7-.24,14.6-.24s8.83.24,14.83.73,12.9,1.37,20.68,2.67c2,.32,4,.6,5.89.87,15.14-1.39,32.41-2.69,43.39-3.48l2.3-14.9a33.79,33.79,0,0,0-8.76-8.52,18.7,18.7,0,0,0-4.33-2c-.07,0-.1-.07-.18-.1l-.59-.17-.41-.12c-5.09-1.45-8-2.1-12.47-3.09-.32-.34-8.35-1.07-14.75-2.7-12.26-3.13-14-5.83-16.9-18.81A122.06,122.06,0,0,1,235,281q-.48-9.48-.49-23.6a6.88,6.88,0,0,1,.74-2.34l.66-12.22-4.17-20.25V199.05c-2.37-6.31-2.57-13.47-2.57-20.49a61.71,61.71,0,0,1,.49-7.06q.48-4.12,1.22-9t1.46-9a41.85,41.85,0,0,0,.73-7.06q0-32.1,1.45-58.62a359.58,359.58,0,0,1,5.35-47l43.79-1.47q58.86-1.46,81.73,10.22-.48,5.37-1.46,12.17T362,76.38l25.78-2.92a298.73,298.73,0,0,1,19.47-60.33A34.74,34.74,0,0,1,399,7.32Z"></path>
          </svg>
        </div>

        {/* Main menu */}
        <div className="w-full block flex-grow hidden lg:flex lg:items-center lg:gap-12 lg:justify-center lg:w-auto lg:text-lg">
          <a
            href="#responsive-header"
            className="block lg:flex lg:gap-2 lg:items-end lg:mt-0 text-white hover:text-yellow-400 lg:pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 137.24 123.78"
              className="w-6 fill-current"
            >
              <path
                d="M116.05,14.58V27L102,29.53V26.16l-5.57-7.6a41.74,41.74,0,0,0-15.7-13L77.4,3.95a20.88,20.88,0,0,0-18,0L56.17,5.51A41.74,41.74,0,0,0,40.5,18.59L35,26.16v3.37L21,27V14.58l-18.93-.5V47L18.56,58.42l8,4.48L30,78.84H43.4l4,9.47,4,.13,16.34,33.08a.65.65,0,0,0,1.16,0L85.42,88.43l4-.12,4.08-9.47H107l3.51-15.94,8-4.48L135.12,47V14.09Zm-30.6,22.9L70.77,57.36A2.3,2.3,0,0,1,67,57.3l-14.56-21a2.3,2.3,0,0,1,.26-2.93l14.91-15a2.3,2.3,0,0,1,3.35.09L85.32,34.59A2.3,2.3,0,0,1,85.45,37.48Z"
                className="cls-1"
              ></path>
              <path
                d="M67.21,24l-9.45,9.45a2.71,2.71,0,0,0-.28,3.5L66.92,50a2.71,2.71,0,0,0,4.39,0l9.45-13.09a2.71,2.71,0,0,0-.28-3.5L71,24A2.71,2.71,0,0,0,67.21,24Z"
                className="cls-1"
              ></path>
            </svg>{' '}
            Supporter
          </a>
          <a
            href="#responsive-header"
            className="block lg:flex lg:gap-2 lg:items-end lg:mt-0 text-white hover:text-yellow-400 lg:pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-6 fill-current"
            >
              <path d="M18,0H2A2,2,0,0,0,0,2V20l4-4H18a2,2,0,0,0,2-2V2A2,2,0,0,0,18,0ZM16,12H4V10H16Zm0-3H4V7H16Zm0-3H4V4H16Z"></path>
            </svg>
            News
          </a>
          <a
            href="#responsive-header"
            className="block lg:flex lg:gap-2 lg:items-end lg:mt-0 text-white hover:text-yellow-400 lg:pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-6 fill-current"
            >
              <path
                d="M61.82,45.51c-3.56,0-6.38,3.21-6.38,7.16s2.88,7.16,6.38,7.16,6.38-3.22,6.38-7.16S65.4,45.51,61.82,45.51Z"
                className="st0"
              ></path>
              <path
                d="M38.23,45.51c-3.56,0-6.38,3.21-6.38,7.16s2.88,7.16,6.38,7.16,6.38-3.22,6.38-7.16S41.81,45.51,38.23,45.51Z"
                className="st0"
              ></path>
              <path
                d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0ZM85.19,67.89a.2.2,0,0,1-.09.17,58.75,58.75,0,0,1-17.75,9,.22.22,0,0,1-.25-.09A47.72,47.72,0,0,1,63.47,71a.24.24,0,0,1,.12-.32,36.52,36.52,0,0,0,5.54-2.63.23.23,0,0,0,0-.38c-.37-.28-.74-.57-1.1-.87a.21.21,0,0,0-.23,0,42,42,0,0,1-35.68,0,.2.2,0,0,0-.23,0l-1.1.86a.23.23,0,0,0,0,.38,40.22,40.22,0,0,0,5.54,2.64.22.22,0,0,1,.12.31,41.53,41.53,0,0,1-3.63,5.9.23.23,0,0,1-.25.08,59,59,0,0,1-17.72-9,.27.27,0,0,1-.1-.17c-1.23-13.25,1.29-26.66,10.49-40.41a.16.16,0,0,1,.1-.08,58.23,58.23,0,0,1,14.45-4.48.21.21,0,0,1,.23.11,36.14,36.14,0,0,1,1.83,3.69,53.85,53.85,0,0,1,16.23,0A40.45,40.45,0,0,1,59.92,23a.21.21,0,0,1,.23-.11A58,58,0,0,1,74.6,27.4a.16.16,0,0,1,.1.08A59.58,59.58,0,0,1,85.19,67.89Z"
                className="st0"
              ></path>
            </svg>
            Discord
          </a>
          <a
            href="#responsive-header"
            className="block lg:flex lg:gap-2 lg:items-end lg:mt-0 text-white hover:text-yellow-400 lg:pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 fill-current"
            >
              <path d="m256 118.08c-37.276 0-67.603 30.327-67.603 67.603s30.327 67.603 67.603 67.603c37.277 0 67.603-30.327 67.603-67.603s-30.326-67.603-67.603-67.603zm0 114.93c-26.096 0-47.325-21.23-47.325-47.325s21.229-47.325 47.325-47.325 47.325 21.229 47.325 47.325-21.229 47.325-47.325 47.325z"></path>
              <path d="m256 168.78c-9.323 0-16.908 7.585-16.908 16.908s7.585 16.908 16.908 16.908 16.908-7.585 16.908-16.908-7.584-16.908-16.908-16.908z"></path>
              <path d="m256 0c-102.39 0-185.69 83.299-185.69 185.69 0 49.027 18.934 95.274 53.313 130.22l2.729 2.769c10.725 11.278 19.352 24.172 25.64 38.164h208.01c6.259-13.929 14.836-26.769 25.492-38.009l2.876-2.924c34.38-34.944 53.313-81.191 53.313-130.22 1e-3 -102.39-83.299-185.69-185.69-185.69zm124.02 200.9h-27.182c-2.456 15.697-8.653 30.169-17.644 42.479l19.254 19.254-21.508 21.508-19.254-19.254c-12.309 8.99-26.781 15.187-42.479 17.644v27.181h-30.417v-27.181c-15.697-2.456-30.169-8.653-42.479-17.644l-19.254 19.254-21.508-21.508 19.254-19.254c-8.99-12.31-15.188-26.781-17.644-42.479h-27.18v-30.417h27.181c2.456-15.697 8.653-30.169 17.644-42.479l-19.254-19.254 21.508-21.508 19.254 19.254c12.309-8.99 26.781-15.187 42.479-17.644v-27.18h30.417v27.181c15.697 2.456 30.17 8.653 42.479 17.644l19.254-19.254 21.508 21.508-19.255 19.253c8.991 12.31 15.187 26.781 17.644 42.479h27.182v30.417z"></path>
              <path d="m145.31 387.26v33.267c0 13.992 10.74 25.518 24.41 26.779v17.869c0 25.82 21.007 46.827 46.827 46.827h78.904c25.821 0 46.828-21.007 46.828-46.827v-17.869c13.668-1.26 24.409-12.787 24.409-26.779v-33.267h-221.38z"></path>
            </svg>
            Creators
          </a>
          <a
            href="#responsive-header"
            className="block lg:flex lg:gap-2 lg:items-end lg:mt-0 text-white hover:text-yellow-400 lg:pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              className="w-6 fill-current"
            >
              <path d="M1703,478q40,57,18,129l-275,906q-19,64-76.5,107.5t-122.5,43.5h-923q-77,0-148.5-53.5t-99.5-131.5q-24-67-2-127,0-4,3-27t4-37q1-8-3-21.5t-3-19.5q2-11,8-21t16.5-23.5,16.5-23.5q23-38,45-91.5t30-91.5q3-10,.5-30t-.5-28q3-11,17-28t17-23q21-36,42-92t25-90q1-9-2.5-32t.5-28q4-13,22-30.5t22-22.5q19-26,42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8,9-18t18-23,17-21q8-12,16.5-30.5t15-35,16-36,19.5-32,26.5-23.5,36-11.5,47.5,5.5l-1,3q38-9,51-9h761q74,0,114,56t18,130l-274,906q-36,119-71.5,153.5t-128.5,34.5h-869q-27,0-38,15-11,16-1,43,24,70,144,70h923q29,0,56-15.5t35-41.5l300-987q7-22,5-57,38,15,59,43zm-1064,2q-4,13,2,22.5t20,9.5h608q13,0,25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13,0-25.5,9.5t-16.5,22.5zm-83,256q-4,13,2,22.5t20,9.5h608q13,0,25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13,0-25.5,9.5t-16.5,22.5z"></path>
            </svg>
            Presskit
          </a>
        </div>

        {/* Sign Up Button */}
        <div className="flex items-center hidden lg:flex">
          <a className="flex items-center text-white hover:text-yellow-400 cursor-pointer gap-1 pb-1">
            <FaPaintBrush /> <span>Sign Up</span>
          </a>
        </div>
      </div>

      {/* Desktop background container */}
      <div className="desktop-bg-container hidden lg:block">
        <div className="left-menu-bg"></div>
        <div className="center-menu-bg"></div>
        <div className="right-menu-bg"></div>
      </div>
    </nav>
  );
}