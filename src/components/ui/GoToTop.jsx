import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 320;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      {isVisible && (
        <div
          className="bg-white flex items-center gap-2 rounded-full fixed bottom-[32px] right-[32px] sm:bottom-[50px] sm:right-[50px] z-[999] px-4 py-2 cursor-pointer"
          onClick={goToHandler}
        >
          <div className="w-[20px] h-[20px] 2xl:w-[24px] 2xl:h-[24px] bg-dark transition-all duration-500 rounded-full flex justify-center items-center">
            <IoArrowUp />
          </div>
          <span className="text-dark text-sm font-medium 2xl:text-base">
            Back to Top
          </span>
        </div>
      )}
    </div>
  );
};

export default GoToTop;
