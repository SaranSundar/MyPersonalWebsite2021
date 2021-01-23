import GithubSVG from "public/images/navbar/github.svg"
import YoutubeSVG from "public/images/navbar/youtube.svg"
import LinkedinSVG from "public/images/navbar/linkedin.svg"
import Link from 'next/link'
import {PAGE_ROUTES} from "utils/ROUTES";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="bg-gray-100">
            <nav data-todo-x-data="{ open: false }" className="bg-white shadow">
                {/* Desktop menu which contains mobile menu */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">

                            {/* Desktop logo on left side of navbar */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href={PAGE_ROUTES.HOME}>
                                    <a className="inline-flex items-center px-1 pt-1">
                                        <img className="block lg:hidden h-8 w-auto"
                                             src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                             alt="Workflow"/>
                                        <img className="hidden lg:block h-8 w-auto"
                                             src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                             alt="Workflow"/>
                                    </a>
                                </Link>
                            </div>

                            {/* Desktop menu with routes */}
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                <Link href={PAGE_ROUTES.EXPLORE_PORTFOLIO}>
                                    <a
                                        className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        Explore Portfolio
                                    </a>
                                </Link>
                                <Link href={PAGE_ROUTES.VIEW_RESUME}>
                                    <a
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        View Resume
                                    </a>
                                </Link>
                                <Link href={PAGE_ROUTES.ABOUT_ME}>
                                    <a
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                        About Me
                                    </a>
                                </Link>
                            </div>

                        </div>

                        {/* Right side of nav bar for desktop, hidden on mobile */}
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <YoutubeSVG width={40} className="mr-2 cursor-pointer"
                                        onClick={() => openInNewTab("https://www.youtube.com/channel/UCI1-IN8JwmFxtY_eVcIATTg")}/>
                            <GithubSVG width={30} className="mr-2 cursor-pointer"
                                       onClick={() => openInNewTab("https://github.com/SaranSundar")}/>
                            <LinkedinSVG width={30} className="mr-2 cursor-pointer"
                                         onClick={() => openInNewTab("https://www.linkedin.com/in/saran-sundararajan/")}/>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button data-todo-at-click="open = !open"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    data-todo-x-bind-aria-expanded="open" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed. */}
                                <svg className="block h-6 w-6"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                                {/* Icon when menu is open. */}
                                <svg className="hidden h-6 w-6"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <MobileNavBar/>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
