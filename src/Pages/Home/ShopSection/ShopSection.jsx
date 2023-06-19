import ButtonDesign from "../../../components/ButtonDesign/ButtonDesign";
import socialImg from '../../../assets/social-img.jpg';

const ShopSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 text-center py-6 mb-24 md:py-0 bg-[#f4f4f4]">
            <div className="p-8 md:p-20">
                <img src={socialImg} className="w-fit" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-8">
                <div>
                    <h4 className="uppercase text-lg text-[#28ADD7] font-semibold">–SHOP–</h4>
                    <h2 className="text-2xl mt-2">Content Cure – Social Media Templates</h2>
                </div>
                <p>A Done-for-you set of 99 Social Media Templates to create viral, high-engaging, value-driven Social Media Content that Increses Engagement, Gains More Profile Views, Increases Sales and Revenue.</p>
                <span>
                    <ButtonDesign name='Learn More' bgColor='#FEE600'></ButtonDesign>
                </span>
            </div>
        </div>
    );
};

export default ShopSection;