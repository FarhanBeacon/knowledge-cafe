import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center w-[95%] mx-auto pt-8 pb-2 border-b-2'>
            <h1 className='text-[40px]'>Knowledge Cafe</h1>
            <img className='border-2 border-green-500 rounded-[60px] bg-sky-400' src={profile} alt="profile" height={"60px"} width={"60px"} />          
        </div>
    );
};

export default Header;