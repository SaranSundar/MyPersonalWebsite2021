import blogPosts from 'data/blogPosts.json'

export default function GETBlogPosts (req, res) {
    res.statusCode = 200
    res.json(blogPosts)
}