import {
    getDirectory,
    getFileNames,
    getItemInPath,
    getAllItems,
    markdownToHTML,
  } from "./markdown";
  import { Blog } from "../interfaces/Blog";
  
  const BLOG_DIR = getDirectory("writeups");
  
  const getBlogFileNames = () => {
    return getFileNames(BLOG_DIR);
  };
  
  const getBlog = (fileName: string): Blog => {
    const blog = getItemInPath(`${BLOG_DIR}/${fileName}`) as Blog;
    blog.slug = fileName.replace(".md", "");
    return blog;
  };
  
  const getAllBlogSlugs = () => {
    return getBlogFileNames().map((fileName) => fileName.replace(".md", ""));
    // return getBlogFileNames().map((fileName) => fileName.replace(/\.md$/, ""));
  };
  
  const getBlogs = (): Blog[] => {
    const blogFileNames = getBlogFileNames();
    return getAllItems(blogFileNames, getBlog) as Blog[];
  };
  
  const getBlogBySlug = (slug: string): Blog => {
    const fileName = slug + ".md";
    return getBlog(fileName);
  }
  
  const getBlogBySlugWithMarkdown = async (slug : string) : Promise<Blog>=> {
    const blog = getBlogBySlug(slug)
    blog.content = await markdownToHTML(blog.content)
    return blog
  }
  
  export const fetchBlogs = async (): Promise<object> => {
    const blogs = getBlogs();
    console.log(blogs);
  
    return {
      props: { blogs },
    };
  };
  export { getBlogFileNames, getBlog, getBlogs, getAllBlogSlugs, getBlogBySlug, getBlogBySlugWithMarkdown };
  