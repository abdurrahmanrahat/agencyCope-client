import coverImage from '../../../assets/agency-cover.jpg';
import HeaderImg from '../../../assets/header-img.jpg';
import ButtonDesign from '../../../components/ButtonDesign/ButtonDesign';

const BannerSection = () => {

    return (
        <div className="bg-cover text-white grid grid-cols-1 md:grid-cols-2 mt-4" style={{ backgroundImage: `url(${coverImage})`, height: 'calc(100vh - 80px)' }}>
            <div className='w-full flex flex-col items-start justify-center gap-6 md:ml-16 p-4 md:p-0 mt-16 md:mt-0'>
                <h2 className='text-3xl'>Branding with Web & Graphic Design for fearless impact-makers.</h2>
                <h4 className='text-lg'>PROVIDING <span className='font-semibold'>#FOUR</span> PACHAGE THAT CONNECTS, CONVERTS & IMPACTS ON YOUR BRAND.</h4>
                {/* <button className='btn'>Free Brand Consultation</button> */}
                <span>
                    <ButtonDesign 
                    name={'Free Brand Consultation'}
                    bgColor={'#FEE600'}
                    hoverColor={'#4CBED2'}
                     ></ButtonDesign>
                </span>
            </div>
            <div className='w-full md:relative flex items-center justify-center p-8 md:p-0'>
                <div className='md:absolute md:top-44'>
                    <img src={HeaderImg} className='w-96 rounded' alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;