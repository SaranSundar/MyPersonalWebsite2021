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
    let centerPhoto;
    let collageImages = []
    for (let i = 0; i < collageImagesUnsorted.length; i += 2) {
        let mediumImage = collageImagesUnsorted[i]
        let smallImage = collageImagesUnsorted[i + 1]
        if (mediumImage['filePath'].includes('newme-medium')) {
            centerPhoto = {'medium': mediumImage['filePath'], 'small': smallImage['filePath']}
        } else {
            collageImages.push({'medium': mediumImage['filePath'], 'small': smallImage['filePath']})
        }
    }
    //collageImages = randomShuffle(collageImages)
    // This is insert in java script
    collageImages.splice(5, 0, centerPhoto);
    collageImages = [
        {
            "medium": "/images/about-me/tennis-medium.jpg",
            "small": "/images/about-me/tennis-small.jpg"
        },
        {
            "medium": "/images/about-me/pokemon2-medium.jpg",
            "small": "/images/about-me/pokemon2-small.jpg"
        },
        {
            "medium": "/images/about-me/pokemon1-medium.jpg",
            "small": "/images/about-me/pokemon1-small.jpg"
        },
        {
            "medium": "/images/about-me/snow-medium.jpg",
            "small": "/images/about-me/snow-small.jpg"
        },
        {
            "medium": "/images/about-me/laptop-medium.jpg",
            "small": "/images/about-me/laptop-small.jpg"
        },
        {
            "medium": "/images/about-me/newme-medium.jpg",
            "small": "/images/about-me/newme-small.jpg"
        },
        {
            "medium": "/images/about-me/drinks-medium.jpg",
            "small": "/images/about-me/drinks-small.jpg"
        },
        {
            "medium": "/images/about-me/grill-food-medium.jpg",
            "small": "/images/about-me/grill-food-small.jpg"
        },
        {
            "medium": "/images/about-me/Shounen-medium.jpg",
            "small": "/images/about-me/Shounen-small.jpg"
        },
        {
            "medium": "/images/about-me/games-medium.jpg",
            "small": "/images/about-me/games-small.jpg"
        },
        {
            "medium": "/images/about-me/computer-medium.jpg",
            "small": "/images/about-me/computer-small.jpg"
        },
        {
            "medium": "/images/about-me/breakfast-medium.jpg",
            "small": "/images/about-me/breakfast-small.jpg"
        }
    ]
    let widths = randomShuffle(["w-40", "w-44", "w-48", "w-52", "w-56", "w-60", "w-64", "w-72", "w-80", "w-96"])
    // widths =
    // [
    //   "w-52",
    //   "w-56",
    //   "w-44",
    //   "w-48",
    //   "w-64",
    //   "w-40",
    //   "w-80",
    //   "w-96",
    //   "w-72",
    //   "w-60"
    // ]

    widths = [
        "w-44",
        "w-56",
        "w-64",
        "w-80",
        "w-96",
        "w-72",
        "w-60",
        "w-40",
        "w-48",
        "w-52"
    ]

    // widths = [
    //   "w-44",
    //   "w-96",
    //   "w-64",
    //   "w-56",
    //   "w-48",
    //   "w-80",
    //   "w-72",
    //   "w-60",
    //   "w-40",
    //   "w-52"
    // ]

    return {
        props: {
            collageImages,
            widths
        },
    }
}

export default function AboutMePage({collageImages, widths}) {


    const ImageContainer = ({imageSrc, width}) => {
        return (
            <div
                className={"flex-grow flex-shrink-0 font-black text-3xl mt-0 ml-0 mr-4 mb-4 text-center text-whites " + width}>
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
                {collageImages.map(((value, index) => <ImageContainer key={value['medium']} imageSrc={value}
                                                                      width={widths[index % widths.length]}/>))}
            </div>
        )
    }

    // console.log(collageImages)
    // console.log(widths)

    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="tracking-tight font-bold text-gray-900 text-4xl">
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