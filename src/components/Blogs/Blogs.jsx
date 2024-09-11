import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropType from 'prop-types';

const Blogs = ({handleBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
            .then(res=>res.json())
            .then(data=>setBlogs(data));
    }, []);

    return (
        <div className="md:w-[70%] my-8 me-6">
            {
                blogs.map(blog=><Blog handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead} blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropType.func,
    handleMarkAsRead: PropType.func,
}

export default Blogs;