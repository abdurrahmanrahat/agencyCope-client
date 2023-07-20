import { useState } from "react";

const Schedual = () => {
//   const [service, setService] = useState("");
//   const [time, setTime] = useState("");

//   const handleContactForm = (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const whatsapp = form.whatsapp.value;
//     const date = form.date.value;
//   };

  return (
    <div>
      <div className="mt-16">
        <h3 className="text-xl font-bold text-center">
          Schedule your Free Consultation call using the scheduler below
        </h3>

        <form
        //   onSubmit={handleContactForm}
          action="https://formspree.io/f/mqkvabwb"
          method="POST"
          className="w-2/3 mx-auto my-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>

            {/* Phone/WhatsApp  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">WhatsApp Number</span>
              </label>
              <input
                type="number"
                name="whatsapp"
                placeholder="Number"
                className="input input-bordered"
              />
            </div>

            {/* Select Service */}
            <div className="form-control w-full">
              <label className="label">Select your service</label>
              <select
                className="select select-bordered font-normal"
                // onBlur={(e) => setService(e.target.value)}
                name="service"
              >
                <option disabled className="font-semibold">
                  Pick one
                </option>
                <option>Graphic Design</option>
                <option>Web Design & Development</option>
                <option>Digital Marketing</option>
                <option>Facebook Page Management</option>
              </select>
            </div>

            {/* Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>

            {/* Select Schedule */}
            <div className="form-control w-full">
              <label className="label">Select Schedule Range</label>
              <select
                className="select select-bordered font-normal"
                // onBlur={(e) => setTime(e.target.value)}
                name="time-schedule"
              >
                <option disabled className="font-semibold">
                  Pick one
                </option>
                <option>8am - 9am</option>
                <option>10am - 11am</option>
                <option>2pm - 3pm</option>
                <option>5pm - 6pm</option>
                <option>7pm - 8pm</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Confirm Schedule"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedual;
