import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { TripContext } from '../context/TripContext.jsx';
import { HiOutlineMapPin } from 'react-icons/hi2';
import StarRating from '../utils/StarRating.jsx';


const Doreview = () => {
  const { getTripById, rateTrip } = useContext(TripContext);
  const [tripdata, setTripData] = useState({});
  const [loading, setLoading] = useState(true);
  const [overallRating, setRating] = useState(0);
  const [activityRating, setActivityRating] = useState(0);
  const [overallFeedback, setOverallFeedback] = useState("");
  const [accommodationRating, setAccommodationRating] = useState(0);
  // const [activityRatings, setActivityRatings] = useState([
  //   tripdata?.days.map(day => ({}))
  // ]);

  const { id } = useParams();
  useEffect(() => {
    const fetchTrip = async () => {
      const response = await getTripById(id);
      //console.log("response", response);
      setTripData(response.trip); // Assuming the response has a 'data' property containing the trip details
      setLoading(false);
    };
    fetchTrip();
  }, [id]);
  //console.log("trip", tripdata);
  const startDay = tripdata?.startDate;
  const endDay = tripdata?.endDate;

  const start = () => {
    if (startDay) {
      return new Date(startDay).getDate();
    }
    return "NA";
  };

  const end = () => {
    if (endDay) {
      let endDate = new Date(endDay).getDate();
      endDate += "/" + (new Date(endDay).getMonth() + 1); // Months are zero-indexed
      endDate += "/" + new Date(endDay).getFullYear();
      return endDate;
    }
    return "NA";
  }

  const handleSumbit = async(e) => {
    e.preventDefault();
    console.log("Overall Rating:", overallRating);
    console.log("Activity Rating:", activityRating);
    console.log("Accommodation Rating:", accommodationRating);
    console.log("Overall Feedback:", overallFeedback);
    if(overallRating === 0) {
      alert("Please provide an overall rating before submitting your review.");
      return;
    }
    try {
      const response = await rateTrip(tripdata._id, overallRating, overallFeedback);
      console.log("Rating Response:", response);
      setRating(0);
      setActivityRating(0);
      setAccommodationRating(0);
      setOverallFeedback("");
      alert("Thank you for submitting your review!");
    } catch (error) {
      console.error("Error rating trip:", error);
    }
  }

 // console.log("start", start());
  //console.log("end", end());
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className='relative h-[48vh] w-full overflow-hidden sm:h-[52vh] lg:h-[60vh]'>
          {/* Background Image with Gradient Overlay */}
          <img src={tripdata.image} alt={tripdata.destination} className='w-full h-full object-cover' />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

          {/* Overlay Content */}
          <div className='absolute inset-0 mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 sm:pb-10 lg:px-10 lg:pb-16'>
            <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2 text-gray-200'>
                  <HiOutlineMapPin className="text-blue-400" />
                  <span className="font-medium">{tripdata.destination}, {tripdata.days[0].state}</span>
                </div>
                <div className='text-lg md:text-6xl font-semibold md:font-bold text-white'>
                  Share Your Journey
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button content */}
        <div className='flex flex-col md:flex-row m-10 gap-10'>
          {/* Left side content */}
          <div className='md:w-1/3'>
            <h1 className='text-2xl md:text-4xl font-bold'>How was your experience?</h1>

            <p className='mt-4 text-sm text-gray-700' >Your feedback helps fellow travelers find their perfect escape. Share your highlights and help us curate better paths for everyone.</p>

            <div className='mt-8 bg-white rounded-4xl shadow-md px-10 p-6'>
              <div className='flex flex-row gap-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-globe-americas" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
                <div className='flex flex-col'>
                  <p>Verified Stay</p>
                  <p className='text-sm text-gray-500'>{start()}-{end()}</p>
                </div>
              </div>

              <div className='flex flex-row gap-4 items-center mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-camera-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                </svg>
                <div className='flex flex-col'>
                  <p>32 Photos Shared</p>
                  <p className='text-sm text-gray-500'>Your gallery is being updated.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className='md:w-2/3 bg-white rounded-4xl shadow-md px-10 p-6'>
            <form onSubmit={handleSumbit}>
              <label htmlFor="overallRating" className='block font-medium text-gray-700'>OVERALL RATING</label>
              <div className='mt-2'>
                {/* <input type="range" id="overallRating" name="overallRating" min="1" max="5" className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' /> */}
                <StarRating totalStars={5} onRatingChange={setRating} />
                <p className='mt-2 text-sm text-gray-700'>Select 1 to 5 stars to rate your trip.</p>
              </div>
              <div className='mt-8'>
                <label htmlFor='overallFeedback' className='block font-medium text-gray-700'>YOUR EXPERIENCE</label>
                <textarea id='overallFeedback' name='overallFeedback' onChange={(e) => setOverallFeedback(e.target.value)} rows='4' column='60' className='p-4 mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50' placeholder='Share your thoughts about the trip...' required></textarea>
              </div>

              <div className='mt-8 flex flex-col md:flex-row md:items-center md:justify-between'>
                <div>
                  <label htmlFor="activityRating" className='mb-2 block font-medium text-gray-700'>ACTIVITY RATING</label>
                  <StarRating totalStars={5} onRatingChange={setActivityRating} />
                  <p className='mt-2 text-sm text-gray-700'>Rate the activities you participated in.</p>
                </div>

                <div className='mt-8 md:mt-0'>
                  <label htmlFor="accommodationRating" className='mb-2 block font-medium text-gray-700'>ACCOMMODATION RATING</label>
                  <StarRating totalStars={5} onRatingChange={setAccommodationRating} />
                  <p className='mt-2 text-sm text-gray-700'>Rate your accommodation.</p>
                </div>
              </div>

              <button type='submit' className='mt-8 w-full rounded-4xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Doreview