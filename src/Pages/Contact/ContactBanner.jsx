import ContactImg from '../../assets/contact-cover.jpg';

const ContactBanner = () => {
    return (
        <div className="bg-cover text-white h-80 mt-4 relative" style={{ backgroundImage: `url(${ContactImg})` }}>
            <div className='w-full flex flex-col items-center justify-center gap-6 p-4 md:p-0 mt-16 md:mt-0 absolute inset-0 bg-black opacity-75'>
                <h2 className='text-4xl'>Contact Us</h2>
                <h4 className='text-lg'>Let’s build you a gorgeous Brand & Website that Converts.</h4>
            </div>
        </div>
    );
};

export default ContactBanner;