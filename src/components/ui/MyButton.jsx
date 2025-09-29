const MyButton = ({ mobileText, desktopText, isOutline, icon }) => {
  return (
    <button
      className={`text-[18px] rounded-md ${
        isOutline
          ? "border border-primary text-primary hover:text-primary/80"
          : "border border-primary bg-primary text-black hover:bg-transparent hover:text-primary"
      } duration-700 px-[14px] py-[7px] md:px-[20px] md:py-[12px] flex gap-3 items-center`}
    >
      <span className="lg:hidden">{mobileText}</span>
      <span className="hidden lg:block">{desktopText}</span>
      {icon}
    </button>
  );
};

export default MyButton;
