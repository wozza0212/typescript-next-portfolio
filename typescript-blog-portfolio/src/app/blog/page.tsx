import BlogList from "@/components/Blog/blog-list"
import { getBlogs } from "../../../lib/blogs";

const Blog = () => {
    const blogs = getBlogs();
    return (
        <div>
            <h1>Blog</h1>
            <p>Blog page content</p>
            <BlogList blogs={blogs}/>
        </div>
    )
}

export default Blog