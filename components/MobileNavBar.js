import {Menu, Transition} from "@headlessui/react";
import GithubSVG from "public/images/navbar/github.svg"
import YoutubeSVG from "public/images/navbar/youtube.svg"
import LinkedinSVG from "public/images/navbar/linkedin.svg"
import {openInNewTab} from 'utils/Utils'
import {useRouter} from 'next/router'
import {PAGE_ROUTES} from "utils/Routes"
import {useEffect} from "react";

export default function MobileNavBar() {
    const router = useRouter()

    const handleClick = async (e) => {
        e.preventDefault()
        await router.push(e.target.href)
    }

    useEffect(() => {
        router.prefetch(PAGE_ROUTES.EXPLORE_PORTFOLIO)
        router.prefetch(PAGE_ROUTES.VIEW_RESUME)
        router.prefetch(PAGE_ROUTES.HOME)
        router.prefetch(PAGE_ROUTES.ABOUT_ME)
    }, [])

    return (
        <div className="-mr-2 flex items-center justify-center z-50 sm:hidden">
            <div className="relative inline-block text-left">
                <Menu>
                    {({open}) => (
                        <>
                            <span className="rounded-md shadow-sm">
                                <Menu.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                  <span className="sr-only">Open main menu</span>
                                    {/* Icon when menu is closed. */}
                                    {!open &&
                                    <svg className="block h-6 w-6"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>}
                                    {/* Icon when menu is open. */}
                                    {open &&
                                    <svg className="block h-6 w-6"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>}
                                </Menu.Button>
                              </span>

                            <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                >

                                    <div className="py-1">
                                        <Menu.Item>
                                            {({active}) => (
                                                <a href={PAGE_ROUTES.EXPLORE_PORTFOLIO} onClick={handleClick}
                                                   className={`${
                                                       active
                                                           ? "bg-gray-100 text-gray-900"
                                                           : "text-gray-700"
                                                   } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    Explore Portfolio
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a href={PAGE_ROUTES.VIEW_RESUME} onClick={handleClick}
                                                   className={`${
                                                       active
                                                           ? "bg-gray-100 text-gray-900"
                                                           : "text-gray-700"
                                                   } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    View Resume
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a href={PAGE_ROUTES.ABOUT_ME} onClick={handleClick}
                                                   className={`${
                                                       active
                                                           ? "bg-gray-100 text-gray-900"
                                                           : "text-gray-700"
                                                   } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    About Me
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>

                                    <div className="py-1 flex">
                                        <Menu.Item>
                                            {({active}) => (
                                                <a onClick={() => openInNewTab("https://www.youtube.com/channel/UCI1-IN8JwmFxtY_eVcIATTg")}
                                                   className={`${
                                                       active
                                                           ? "bg-gray-100 text-gray-900"
                                                           : "text-gray-700"
                                                   } flex justify-between w-full px-4 py-1 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    <YoutubeSVG height={40} width={40}/>
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a onClick={() => openInNewTab("https://github.com/SaranSundar")}
                                                   className={`${
                                                       active
                                                           ? "bg-gray-100 text-gray-900"
                                                           : "text-gray-700"
                                                   } flex justify-between w-full px-4 py-1 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    <GithubSVG height={35} width={35}/>
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a onClick={() => openInNewTab("https://www.linkedin.com/in/saran-sundararajan/")}
                                                   className={`${
                                                       active
                                                           ? "bg-gray-100 text-gray-900"
                                                           : "text-gray-700"
                                                   } flex justify-between w-full px-4 py-1 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    <LinkedinSVG height={35} width={35}/>
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    )
}