import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import LikeButton from "./LikeButton";

const EventCard = ({ eventDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { images } = eventDetails;
  const totalImages = images.length;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  const getImage = () => {
    return images[currentImageIndex];
  };

  return (
    <div className="group relative max-w-96 h-96 w-full bg-white">
      <div className="relative h-60">
        <img
          className="absolute object-cover h-60 w-full"
          src={getImage()}
          alt=""
        />
        <button
          className="z-50 absolute top-0 bottom-0 my-auto left-3 w-8 h-8 group-hover:h-9"
          onClick={handlePreviousImage}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="z-50 absolute top-0 bottom-0 my-auto right-3 w-8 h-8 group-hover:h-9"
          onClick={handleNextImage}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
        <div className="absolute w-full h-full bg-black bg-opacity-15"></div>
        <LikeButton />
        <span className="absolute top-3 right-3 w-8 h-8 bg-secondary group-hover:bg-primaryDark flex justify-center items-center rounded-full border-2 border-white">
          2
        </span>
        <span className="absolute bottom-4 left-0 bg-black bg-opacity-80 text-white px-4 py-2 space-x-1">
          <span className="font-semibold text-lg">{`NOK ${eventDetails.prices.price}`}</span>
          <span className="text-sm">{eventDetails.prices.rentingType}</span>
        </span>
        <span className="bg-[#fff0]"></span>
      </div>
      <Link to={`space/${eventDetails.id}`} className="px-3 py-2">
        <h1 className="text-headText text-xl font-semibold">{`${eventDetails.name} - ${eventDetails.location}`}</h1>
        <span className="text-sm text-bodyText">
          <p>{`${eventDetails.capacity.seating} seats ${
            eventDetails.foodAndDrinks.available ? ". Offering catering" : ""
          }`}</p>
          <p>{eventDetails.foodAndDrinks.food}</p>
        </span>
      </Link>
    </div>
  );
};

EventCard.propTypes = {
  eventDetails: PropTypes.object.isRequired,
};

export default EventCard;
