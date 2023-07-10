import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from '../../../assets/logo.jpg';

const Footer = () => {
    return (
        <div className='p-8 pb-0'>
            <footer className="footer pt-12 p-8 text-base-content">
                <div>
                    <div className='flex items-center'>
                        <img className='w-28 rounded' src={Logo} alt="" />
                    </div>
                    <p className='text-lg'>AgencyCope is running on best <br /> ever performance throught the world.</p>
                </div>
                <div>
                    <span className="footer-title opacity-100 text-2xl underline">Contact Info</span>
                    <div className='flex flex-col text-lg'>
                        <p>Phone: 0088-3674-3972</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title opacity-100 text-2xl underline">Let&apos;s Contact</span>
                    <div className='text-2xl flex gap-3 mx-auto pt-2'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
                <div>
                    <span className="footer-title opacity-100 text-2xl underline">Address</span>
                    <p className='text-lg'>123 Main Street <br />
                        Anytown, USA 12345
                    </p>
                </div>
            </footer>

            {/* Copyright */}
            <div className="text-center pb-2 ">
                <p className='text-center m-0 text-xl'><small>© copyright of my design.</small></p>
            </div>
        </div>
    );
};

export default Footer;