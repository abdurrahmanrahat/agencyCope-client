import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import Logo from '../../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {

    const navLinks = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/services'>Services</ActiveLink></li>
        <li><ActiveLink to='/portfolio'>Portfolio</ActiveLink></li>
        <li><ActiveLink to='/contact'>Contact</ActiveLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-36">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <img src={Logo} className="w-40 rounded" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="md:flex justify-center items-center font-medium uppercase">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-active text-md bg-[#FEE600] hover:bg-[#0E0C1A] text-black hover:text-white">Button</button>
            </div>
        </div>
    );
};

export default Navbar;