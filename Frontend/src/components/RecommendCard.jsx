import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

const RecommendCard = ({ trip }) => {
  const navigate = useNavigate();
  const destination = trip?.destination || "Your next escape";
  const image = trip?.image || trip?.days?.[0]?.activities?.[0]?.photos?.[0];
  const title = trip?.tripTitle || `${trip?.numberOfDays || 1} days in ${destination}`;
  const description = trip?.tripIntro || "A thoughtfully planned journey ready to explore.";

  return (
    <button
      type="button"
      onClick={() => navigate("/recommendation")}
      className='group flex w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:w-80'
      aria-label={`Explore ${destination} recommendations`}
    >
      <div className='relative h-64 w-full shrink-0 overflow-hidden'>
        <ImageWithFallback
          src={image}
          alt={destination}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <span className="absolute left-4 top-4 rounded-full bg-amber-300/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-amber-950 shadow-sm">
          Featured trip
        </span>
      </div>
      <div className="p-2 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <span className="rounded-full bg-amber-50 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-tighter text-amber-700">{destination}</span>
        </div>
        <p className="line-clamp-2 text-xs text-gray-500">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-md font-bold text-blue-600">Explore itinerary</span>
          <FaHeart
            className="text-blue-500 text-sm"
            style={{ fill: "none", stroke: "#3b82f6", strokeWidth: 40 }}
          />
        </div>
      </div>
    </button>
  )
}

export default RecommendCard