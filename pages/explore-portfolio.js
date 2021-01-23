import React from "react";
import ProgressiveImageLoader from "components/ProgressiveImageLoader";
import BlogPost from "components/BlogPost";

const PortfolioPage = () => {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-5/12 sm:w-4/12 md:w-3/12 lg:w-3/12 px-4 mb-8">
                            <ProgressiveImageLoader
                                // https://unsplash.com/photos/l74VaCZon7I
                                src="/images/portfolio/saran-medium.png"
                                placeholder="/images/portfolio/saran-small.png"
                                classes="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                                alt="Profile Photo Headshot"
                            />
                        </div>
                    </div>
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        Saran Sundararajan
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Full-Stack Software Engineer
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                    <BlogPost/>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover"
                                 src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                 alt=""/>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <a href="/" className="hover:underline">
                                        Video
                                    </a>
                                </p>
                                <a href="/" className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">
                                        How to use search engine optimization to drive sales
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis
                                        asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut
                                        inventore optio animi., tempore temporibus quo laudantium.
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="/">
                                        <span className="sr-only">Brenna Goyette</span>
                                        <img className="h-10 w-10 rounded-full"
                                             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""/>
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="/" className="hover:underline">
                                            Brenna Goyette
                                        </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2020-03-10">
                                            Mar 10, 2020
                                        </time>
                                        <span aria-hidden="true">
                                          &#xB7;
                                        </span>
                                        <span>
                                          4 min read
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover"
                                 src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                 alt=""/>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <a href="/" className="hover:underline">
                                        Case Study
                                    </a>
                                </p>
                                <a href="/" className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Improve your customer experience
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum
                                        voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi
                                        cumque corporis perferendis hic.
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="/">
                                        <span className="sr-only">Daniela Metz</span>
                                        <img className="h-10 w-10 rounded-full"
                                             src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""/>
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="/" className="hover:underline">
                                            Daniela Metz
                                        </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2020-02-12">
                                            Feb 12, 2020
                                        </time>
                                        <span aria-hidden="true">
                                          &#xB7;
                                        </span>
                                        <span>
                                          11 min read
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;