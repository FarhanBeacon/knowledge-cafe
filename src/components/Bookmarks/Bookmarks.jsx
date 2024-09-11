import Bookmark from '../Bookmark/Bookmark';
import PropType from 'prop-types'

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-[30%] my-8'>
            <div className='bg-[#dbd5ff] p-6 rounded-xl'>
                <h3 
                    className='text-xl font-semibold text-[#6047EC]'>
                Spent time on read: {readingTime} min</h3>
            </div>
            <div className="my-8 p-[30px] bg-gray-200 rounded-xl">
                <h4 className="text-xl mb-4">Bookmarked Blogs: {bookmarks.length}</h4>
                {
                    bookmarks.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropType.array,
    readingTime: PropType.number,
}

export default Bookmarks;