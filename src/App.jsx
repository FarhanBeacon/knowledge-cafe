import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/BookMarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id, time) =>{
    const newTime = readingTime + parseInt(time);
    setReadingTime(newTime);
    // Remove Read Item
    const newBookMark = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(newBookMark);
  }

  const handleBookmarks = blog => {
    const newArray = [...bookmarks, blog];
    setBookmarks(newArray);
  }
  return (
    <>
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row justify-between w-[95%] mx-auto'>
        <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
