import React from "react";
import ProgressiveImageLoader from "components/ProgressiveImageLoader";
import BlogPost from "components/BlogPost";
import useSWR from "swr";
import fs from 'fs';
import path from 'path';
import {API_ROUTES} from "utils/ROUTES";

const fetcher = url => fetch(url).then(r => r.json())

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps() {
    const blogPostsDirectory = path.join(process.cwd(), 'data')
    const filePath = path.join(blogPostsDirectory, 'blogPosts.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const blogPosts = JSON.parse(fileContents)

    return {
        props: {
            blogPosts
        }
    }
}


const PortfolioPage = (props) => {
    const {data: blogPosts} = useSWR(API_ROUTES.GET_BLOG_POSTS, fetcher, {initialData: props.blogPosts})
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
                    <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Full-Stack Software Engineer
                    </p>
                    <p className="mt-1 sm:mt-2 max-w-2xl mx-auto text-lg text-gray-400">
                        Web &#xB7; Mobile &#xB7; Desktop &#xB7; IOT
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                    {blogPosts !== undefined && blogPosts.map((blogPost) =>
                        <BlogPost key={blogPost.blogTitle} {...blogPost}/>
                    )}


                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;