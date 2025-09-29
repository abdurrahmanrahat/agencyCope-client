import ProgressBar from "@ramonak/react-progress-bar";

const SkillBar = ({ label, percent }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1 text-sm font-medium">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>

      <ProgressBar
        completed={percent}
        height="12px"
        isLabelVisible={false}
        bgColor="#caff00"
        baseBgColor="#3a3a3a"
        borderRadius="999px"
        animateOnRender={true}
        transitionDuration="1s"
      />
    </div>
  );
};

export default SkillBar;
