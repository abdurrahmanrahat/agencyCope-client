import { useForm } from "react-hook-form";
import { IoMdCheckboxOutline } from "react-icons/io";
import GifImg from "../../../assets/home/free-guid.gif";

const FreeGuide = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-24  md:flex gap-12 mx-4 md:mx-0">
          {/* gif image */}
          <div className="md:w-1/2 flex justify-end mb-8 md:mb-0">
            <img src={GifImg} alt="" className="w-[520px]" />
          </div>

          {/* content div */}
          <div className="md:w-1/2 flex flex-col justify-evenly gap-y-2 md:gap-y-0">
            <h4 className="font-bold text-[#ffe600] text-[18px]">FREE GUIDE</h4>
            <h2 className="font-[500] text-[24px] md:text-[32px]">
              Lead-Magnet / Ebook Template
            </h2>
            <p className="text-[16px] md:text-[18px]">
              Download now and get immediate access to the Fully-Customizable
              Template File so you can start creating:
            </p>
            <div className="flex flex-col gap-y-1">
              <div className="flex gap-3">
                <IoMdCheckboxOutline className="text-[#ffe600] font-bold text-[40px] md:text-[30px]" />
                <p className="text-[18px]">
                  High-Converting Lead Magnets to build your Email List
                </p>
              </div>
              <div className="flex gap-3">
                <IoMdCheckboxOutline className="text-[#ffe600] font-bold text-[40px] md:text-[30px]" />
                <p className="text-[18px]">
                  Create Digital Files to make passive income
                </p>
              </div>
              <div className="flex gap-3">
                <IoMdCheckboxOutline className="text-[#ffe600] font-bold text-[40px] md:text-[30px]" />
                <p className="text-[18px]">
                  Design Guides and PDFs for your group program / course
                </p>
              </div>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* First Name */}
              <div>
                <input
                  className="w-full p-3 border border-solid border-[#ccc]"
                  type="text"
                  placeholder="First Name"
                  {...register("name", { required: true })}
                ></input>
              </div>
              {/* Email */}
              <div className="mt-4">
                <input
                  className="w-full p-3 border border-solid border-[#ccc] "
                  type="email"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                ></input>
              </div>

              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="w-[100%] bg-[#ffe600] py-2 text-[16px] text-white font-[600] uppercase"
                >
                  Get Instant Access
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuide;
