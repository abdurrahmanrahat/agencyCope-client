import { useEffect, useState } from "react";
import ServicesBanner from "./ServicesBanner";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <div className="my-14 text-center">
                <h4 className="uppercase text-lg text-[#28ADD7] font-semibold">See Our Services</h4>
                <h2 className="text-xl mt-1">Collection of Services to help you Build a strong Brand Identity, with Graphic, Website and marketing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-y-10">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;