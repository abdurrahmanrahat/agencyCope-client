import ButtonDesign from "../../components/ButtonDesign/ButtonDesign";


const ServiceCard = ({ service }) => {

    const { image, title, includes, price, time } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="text-start">
                    <p className="text-lg">Includes some features:</p>
                    <div className="ml-8">
                        {
                            includes.map(i => <li key={i}>{i}</li>)
                        }
                    </div>
                    <p className="mt-1">Starts at: ${price} usd</p>
                    <p>Timeframe: {time}</p>
                </div>
                <div className="card-actions justify-end">
                    <ButtonDesign
                        name={'Book Now'}
                        bgColor={'#FEE600'}
                        hoverColor={'#4CBED2'}
                    ></ButtonDesign>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;