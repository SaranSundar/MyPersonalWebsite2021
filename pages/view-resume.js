// import dynamic from 'next/dynamic';
import ProgressiveImageLoader from "components/ProgressiveImageLoader";
import React from "react";

export default function ResumePage() {

    // const PDFViewer = dynamic(
    //     () => import('components/PDFViewer'),
    //     {ssr: false}
    // );

    return (

        <div className="relative pb-20 px-4 sm:px-6">
            <div className="relative max-w-7xl mx-auto ">
                <div className="flex">
                    <a type="button" href="/images/resume/resume.pdf" download="SaranSundar_Resume.pdf"
                            className="mx-auto inline-flex items-center px-6 py-3 mt-10 mb-1 md:-mb-5 z-50 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        Download Resume
                    </a>
                </div>
                <div className="mx-auto max-w-none">
                    <ProgressiveImageLoader
                        src="/images/resume/Resume-medium.jpg"
                        placeholder="/images/resume/Resume-small.jpg"
                        classes="w-full h-full object-cover"
                        alt="Resume"
                    />
                </div>
            </div>
        </div>
    )
}