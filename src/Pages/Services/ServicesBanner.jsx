import ServicesCover from '../../assets/service-cover.jpg';

const ServicesBanner = () => {
    return (
        <div className="bg-cover text-white h-80 mt-4 relative" style={{ backgroundImage: `url(${ServicesCover})` }}>
            <div className='w-full flex flex-col items-center justify-center gap-6 p-4 md:p-0 mt-16 md:mt-0 absolute inset-0 bg-black opacity-40'>
                <h2 className='text-4xl'>Let’s work together</h2>
                <h4 className='text-lg'>TOWARDS BUILDING YOUR DREAM BRAND IDENTITY & WEBSITE</h4>
            </div>
        </div>
    );
};

export default ServicesBanner;