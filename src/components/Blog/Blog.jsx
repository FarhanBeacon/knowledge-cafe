import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    const {id, cover, author_img, author, posted_date, time, title, tags} = blog;
    return (
        <div className="border-b-2 pb-8 mb-10">
           <div className='md:w-[845px] md:h-[450px]'>
                <img className="w-full h-full rounded-lg" src={cover} alt="" />
           </div>
           <div className='my-6 flex justify-between items-center'>
                <div className='flex gap-4'>
                    <div className='rounded-[50%]'><img className='w-[60px] h-[60px] rounded-[50%]' src={author_img} alt="" /></div>
                    <div>
                        <h4 className='text-2xl font-semibold'>{author}</h4>
                        <p className='text-base text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <div 
                        className='text-xl text-gray-500 flex items-center'>
                        {time} min read 
                        <button 
                            onClick={()=>handleBookmarks(blog)}
                        ><CiBookmark />
                        </button>
                    </div>
                </div>
           </div> 
           <div>
                <h1 className='text-[40px]'>{title}</h1>
                <h4 className='text-xl'>
                    {
                        tags.map((tag, inx)=><span className='me-4' key={inx}>#{tag}</span>)
                    }
                </h4>
                <button
                    onClick={()=>handleMarkAsRead(id, time)}
                    className='text-lg text-blue-700 font-semibold underline'
                >Mark As Read</button>
           </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired, 
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;