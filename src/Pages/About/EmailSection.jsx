import { useState } from "react";

const EmailSection = () => {
  const [isCopy, setIsCopy] = useState(false);

  return (
    <span
      onClick={() => {
        navigator.clipboard.writeText("gdmarket20@gmail.com");
        setIsCopy((prev) => !prev);
      }}
      className="text-[#caff00] font-medium text-sm underline mt-1 block cursor-pointer transition hover:text-white uppercase"
    >
      {isCopy ? "copied!" : "gdmarket20@gmail.com"}
    </span>
  );
};

export default EmailSection;
