const ToolBadge = ({ icon, name, tag }) => (
  <div className="text-white border border-gray-900 px-2 md:px-4 py-2 rounded-xl flex items-center gap-3 md:gap-4">
    <div className="bg-[#0e0e0e] rounded-lg">
      <img src={icon} alt={name} className="w-12 h-12" />
    </div>
    <div>
      <h5 className="md:text-lg">{name}</h5>
      <p className="text-sm md:text-base text-gray-400">{tag}</p>
    </div>
  </div>
);

export default ToolBadge;
