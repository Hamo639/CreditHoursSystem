"use client"

import { useState } from 'react';
import 'animate.css';

const Faq = (props: {title: string, content: string}) => {
  const [isFaqOpen, setFaqOpen] = useState(false);

  const toggleFaq = () => {
    setFaqOpen(!isFaqOpen);
  };

  return (
    <div className="bg-white shadow hover:shadow-lg">
          <h2>
            <button onClick={toggleFaq} type="button" className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
              <span className="flex items-center ">
              <svg className="w-h h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg> 
                {props.title}
              </span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-open-body" className={isFaqOpen ? '' : 'hidden'}>
            <div className="p-5 border border-b-0 border-gray-200-gray-700">
              <p className="text-gray-500">{props.content}</p>
            </div>
          </div>
      </div>
    );
  };

export default Faq;
