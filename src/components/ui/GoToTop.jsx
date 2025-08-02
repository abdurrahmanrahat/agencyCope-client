import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

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
          className="text-[18px] w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px] text-primary border-[2.3px] hover:bg-primary hover:text-dark transition-all duration-500 border-primary rounded-full fixed bottom-[32px] right-[32px] sm:bottom-[50px] sm:right-[50px] z-[999] flex justify-center items-center cursor-pointer"
          onClick={goToHandler}
        >
          <IoIosArrowUp className="" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
