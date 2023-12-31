
import './Navbar.css'
import profile from '../../../assets/all skills/profile.jpg'



const Navbar = () => {
    const navOptions = <>
        <li className='hover:bg-white rounded-lg'><a href='#home' className="letter-spacing">Home</a></li>
        <li className='hover:bg-white rounded-lg'><a href='#about'>About</a></li>
        <li className='hover:bg-white rounded-lg'><a href='#skills'>Skills</a></li>
        <li className='hover:bg-white rounded-lg'><a href='#projects'>Projects</a></li>
        <li className='hover:bg-white rounded-lg'><a href='#services'>Services</a></li>
        <li className='hover:bg-white rounded-lg'><a href='#contract'>Contract</a></li>
    </>
    return (
        <div className="navbar bg-base-100 top-nav fixed z-10 max-w-screen-xl shadow-xl shadow-purple-400 bg-black text-white font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav-items text-2xl bg-black">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl">Md.Mosarof Hossen</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="h-10 w-10 rounded-full" src={profile} alt="" />
            </div>
        </div>
    );
};

export default Navbar;