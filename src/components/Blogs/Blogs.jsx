import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";

const Blogs = () => {
    const [blogData, setBlogData] = useState([])
    const blogs = useLoaderData()
    const blogsList = blogs.products;
    
    useEffect(()=> {
        setBlogData(blogsList)
    },[blogsList])

    return (
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 px-4 md:px-0">
            {
                blogData.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;