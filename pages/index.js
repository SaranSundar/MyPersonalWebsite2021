import ProgressiveImageLoader from "components/ProgressiveImageLoader"
import Link from 'next/link'
import {PAGE_ROUTES} from "utils/ROUTES";

export default function HomePage() {

    return (
        <div className="relative bg-gray-50">
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block ">Developer by day</span>
                            <span className="block text-indigo-600">Inventor for life</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            I'm passionate about new technology and an advocate for mentoring. Some of my favorite
                            projects include a responsive store front for cake pops,
                            automating the scraping of Chinese novels, and creating a new framework
                            to package native desktop apps. I've also recently launched a YouTube channel to teach
                            Python. Come take a look at who I am and what I've done.
                        </p>
                        <div className="mt-10 flex justify-center lg:justify-start">
                            <div className="mt-3 rounded-md shadow mt-0 ml-3">
                                <Link href={PAGE_ROUTES.EXPLORE_PORTFOLIO}>
                                    <a
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Explore Portfolio
                                    </a>
                                </Link>
                            </div>
                            <div className="mt-3 rounded-md shadow mt-0 ml-3">
                                <Link href={PAGE_ROUTES.VIEW_RESUME}>
                                    <a
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                        View Resume
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                    <ProgressiveImageLoader
                        // https://unsplash.com/photos/l74VaCZon7I
                        src="/images/home/rover-medium.jpg"
                        placeholder="/images/home/rover-small.jpg"
                        classes="absolute inset-0 w-full h-full object-cover"
                        alt="Robot Rover"
                    />
                </div>
            </main>
        </div>
    )
}
