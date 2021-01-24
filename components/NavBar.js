import GithubSVG from "public/images/navbar/github.svg"
import YoutubeSVG from "public/images/navbar/youtube.svg"
import LinkedinSVG from "public/images/navbar/linkedin.svg"
import CodeSVG from "public/images/navbar/code2.svg"
import Link from 'next/link'
import {PAGE_ROUTES} from "utils/Routes";
import MobileNavBar from "./MobileNavBar";
import {openInNewTab} from "utils/Utils";
import {useState} from "react"

const NavBar = () => {

    const [activeLink, setActiveLink] = useState(PAGE_ROUTES.HOME)

    return (
        <div className="bg-gray-100">
            <nav className="bg-white shadow">
                {/* Desktop menu which contains mobile menu */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">

                            {/* Desktop logo on left side of navbar */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href={PAGE_ROUTES.HOME}>
                                    <a className="inline-flex items-center px-1 pt-1" onClick={()=>setActiveLink(PAGE_ROUTES.HOME)}>
                                        {/*<img className="block lg:hidden h-8 w-auto"*/}
                                        {/*     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"*/}
                                        {/*     alt="Workflow"/>*/}
                                        <CodeSVG className="block lg:hidden h-8 w-auto"/>
                                        {/*<img className="hidden lg:block h-8 w-auto"*/}
                                        {/*     src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"*/}
                                        {/*     alt="Workflow"/>*/}
                                        <p className="hidden lg:block font-extrabold text-xl">Intro</p>
                                    </a>
                                </Link>
                            </div>

                            {/* Desktop menu with routes */}
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                <Link href={PAGE_ROUTES.EXPLORE_PORTFOLIO}>
                                    <a onClick={()=>setActiveLink(PAGE_ROUTES.EXPLORE_PORTFOLIO)}
                                        className={(activeLink === PAGE_ROUTES.EXPLORE_PORTFOLIO ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700") + " inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>
                                        Explore Portfolio
                                    </a>
                                </Link>
                                <Link href={PAGE_ROUTES.VIEW_RESUME}>
                                    <a onClick={()=>setActiveLink(PAGE_ROUTES.VIEW_RESUME)}
                                        className={(activeLink === PAGE_ROUTES.VIEW_RESUME ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700") + " inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>
                                        View Resume
                                    </a>
                                </Link>
                                <Link href={PAGE_ROUTES.ABOUT_ME}>
                                    <a onClick={()=>setActiveLink(PAGE_ROUTES.ABOUT_ME)}
                                        className={(activeLink === PAGE_ROUTES.ABOUT_ME ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700") + " inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>
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
                        <MobileNavBar/>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
