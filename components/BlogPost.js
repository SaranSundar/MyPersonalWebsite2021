export default function BlogPost({
                                     blogType = "Article",
                                     blogTitle = "Boost your conversion rate",
                                     blogDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto\n" +
                                     "                            accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos\n" +
                                     "                            quis dolorum.",
                                     blogThumbnailSrc = "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
                                     blogPostingDate = "Mar 16, 2020",
                                     blogReadInMinDuration = "6",
                                     blogURL = "/"
                                 }) {
    return (

        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover"
                     src={blogThumbnailSrc}
                     alt=""/>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <a href={blogURL} className="hover:underline">
                            {blogType}
                        </a>
                    </p>
                    <a href={blogURL} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                            {blogTitle}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                            {blogDescription}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex space-x-1 text-sm text-gray-500">
                        {blogPostingDate}&nbsp;
                        <span aria-hidden="true">
                              &#xB7;
                            </span>
                        <span>
                            {blogReadInMinDuration} {blogReadInMinDuration !== "" ? "min read": ""}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}