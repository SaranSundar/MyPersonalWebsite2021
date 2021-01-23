import ProgressiveImageLoader from "../components/ProgressiveImageLoader";
import React from "react";
import {randomShuffle} from "utils/Utils";
import fs from 'fs'
import path from 'path'

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    const aboutMeImagesDirectory = path.join(process.cwd(), 'public', 'images', 'about-me')
    const relativeAboutMeImagesDirectory = path.join('/images', 'about-me')
    const filenames = fs.readdirSync(aboutMeImagesDirectory)

    const collageImagesUnsorted = filenames.map((filename) => {
        const filePath = path.join(relativeAboutMeImagesDirectory, filename)
        return {
            filePath
        }
    })
    collageImagesUnsorted.sort()
    let collageImages = []
    for (let i = 0; i < collageImagesUnsorted.length; i += 2) {
        let mediumImage = collageImagesUnsorted[i]
        let smallImage = collageImagesUnsorted[i]
        collageImages.push({'medium': mediumImage['filePath'], 'small': smallImage['filePath']})
    }
    return {
        props: {
            collageImages
        },
    }
}

export default function AboutMePage({collageImages}) {

    const widths = randomShuffle(["w-40", "w-44", "w-48", "w-52", "w-56", "w-60", "w-64", "w-72", "w-80", "w-96"])
    const colors = randomShuffle(["bg-red-500", "bg-yellow-300", "bg-green-500", "bg-blue-600", "bg-pink-300"])
    const items = randomShuffle(collageImages)

    console.log('collage images are')
    console.log(items)

    const ImageContainer = ({imageSrc, width, backgroundColor}) => {
        return (
            <div
                className={"flex-grow flex-shrink-0 font-black text-3xl mt-0 ml-0 mr-4 mb-4 text-center text-whites " + width + " " + backgroundColor}>
                <ProgressiveImageLoader
                    src={imageSrc['medium']}
                    placeholder={imageSrc['small']}
                    classes="h-full w-full object-cover"
                    alt="About Me Hobby or Interest"
                />
            </div>
        )
    }

    const ImageGrid = () => {
        return (
            <div className="flex flex-wrap" id="masonry-with-columns">
                {items.map(((value, index) => <ImageContainer key={value['medium']} imageSrc={value}
                                                              width={widths[index % widths.length]}
                                                              backgroundColor={colors[index % colors.length]}/>))}
            </div>
        )
    }

    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        A little about me...
                    </h2>
                </div>
                <div className="mt-12 max-w-lg mx-auto lg:max-w-none">

                    <ImageGrid/>

                </div>
            </div>
        </div>
    )
}