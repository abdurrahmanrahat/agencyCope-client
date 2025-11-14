export default function BrandCard({ logo, country }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-12 md:h-16 xl:h-[70px] w-20 md:w-28 xl:w-32 flex items-center justify-center bg-white rounded-xl shadow-lg">
        <img src={logo} alt={country} className="max-h-[65%] object-contain" />
      </div>
      <p className="text-white text-sm mt-2 tracking-wide">{country}</p>
    </div>
  );
}
