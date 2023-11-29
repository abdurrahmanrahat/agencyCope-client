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
        <h3 className="text-[24px] font-medium text-center">
          Any Query? Keep In Tauch Please!
        </h3>

        <form
          //   onSubmit={handleContactForm}
          action="https://formspree.io/f/mqkvabwb"
          method="POST"
          className="w-2/3 mx-auto my-10"
        >
          <div className="">
            <div className="md:flex gap-6">
              {/* Name */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-2 border border-solid border-[#ccc]"
                />
              </div>

              {/* Email */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 border border-solid border-[#ccc]"
                />
              </div>
            </div>

            {/* message  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Write message*</span>
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="4"
                className="w-full p-3 border border-solid border-[#ccc]"
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="w-[100%] bg-[#ffe600] py-2 text-[16px] text-[#16191e] rounded-md font-[600] uppercase cursor-pointer"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedual;
