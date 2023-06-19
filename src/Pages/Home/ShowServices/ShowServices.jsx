import { useEffect, useState } from "react";
import ButtonDesign from "../../../components/ButtonDesign/ButtonDesign";

const ShowServices = () => {
    const [services, serServices] = useState([]);

    useEffect(() => {
        fetch('shortServices.json')
            .then(res => res.json())
            .then(data => serServices(data))
    }, [])

    return (
        <div className="text-center mt-32 mb-20">
            <h4 className="uppercase text-lg text-[#28ADD7] font-semibold">HOW MAY I HELP YOU</h4>
            <h2 className="text-2xl my-6">I specialize in creating beautiful design & websites that convert & generate revenue while making an impact with marketing for growing your brand.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                {
                    services.map(service => <div key={service._id} className="card w-96 mt-8 relative">
                        <img src={service.image} className="w-4/5 md:w-80 mx-auto" alt="Shoes" />
                        <div className="absolute top-24 right-4 md:right-0">
                            <span>
                                <ButtonDesign
                                    name={service.title}
                                    bgColor='#FEE600'
                                    hoverColor='#4CBED2'
                                ></ButtonDesign>
                            </span>
                        </div>
                        <div className="card-body">
                            <p className="text-lg">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowServices;