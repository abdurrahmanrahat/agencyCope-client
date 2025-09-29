import { useState } from "react";

const EmailSection = () => {
  const [isCopy, setIsCopy] = useState(false);

  return (
    <>
      {isCopy ? (
        <span className="text-[#caff00] font-medium text-sm mt-1">copied!</span>
      ) : (
        <span
          onClick={() => {
            navigator.clipboard.writeText("gdmarket20@gmail.com");
            setIsCopy((prev) => !prev);
          }}
          className="text-[#caff00] font-medium text-sm underline mt-1 cursor-pointer transition hover:text-white uppercase"
        >
          gdmarket20@gmail.com
        </span>
      )}
    </>
  );
};

export default EmailSection;
