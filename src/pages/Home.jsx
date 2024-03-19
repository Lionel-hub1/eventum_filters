import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { ICONS } from "../data/constants";
// import spaces from "../data/spaces";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Home = () => {
  const [activeFilters, setActiveFilters] = useState({
    category: "",
    participants: 0,
    budget: 0,
    date: "",
    food: {
      available: true,
      alcohol: "Can be enjoyed on site",
      alcoholOffered: true,
      food: "Can be brought in",
      foodOffered: true,
    },
    arrangement: "",
  });

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  const spaces = [
    {
      id: 1,
      name: "Space 1",
      description: "This is the first space",
      isFavorite: false,
      category: "company premises",
      location: "Norway",
      price: "46,500",
      images: [
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      capacity: {
        seating: 100,
        standing: 200,
        roundTable: 150,
        longTable: 120,
        classroom: 80,
        cinemaConference: 150,
        area: "",
      },
      foodAndDrinks: {
        available: true,
        alcohol: "Can be enjoyed on site",
        alcoholOffered: "Alcohol is offered through the landlord",
        food: "Can be brought in",
        foodOffered: "Food is offered through the landlord",
      },
      facilities: {
        wifi: true,
        airConditioning: true,
        heating: true,
        soundSystem: true,
        projector: true,
        whiteboard: true,
        microphone: true,
        television: true,
        kitchen: true,
        parking: true,
        elevator: true,
        wheelchairAccessible: true,
        naturalLight: true,
        stage: true,
        swimmingPool: true,
        rooftop: true,
        garden: true,
        terrace: true,
        grill: true,
        furniture: true,
      },
      prices: {
        startingFrom: "00:00",
        endingAt: "23:59",
        price: "46,500",
        space: "The whole room",
        rentingType: "local rent",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      reviews: [
        {
          id: 1,
          name: "John Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
        {
          id: 2,
          name: "Jane Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
      ],
    },
    {
      id: 2,
      name: "Space 2",
      description: "This is the second space",
      isFavorite: false,
      category: "company premises",
      location: "Norway",
      price: "46,500",
      images: [
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      capacity: {
        seating: 100,
        standing: 200,
        roundTable: 150,
        longTable: 120,
        classroom: 80,
        cinemaConference: 150,
        area: "",
      },
      foodAndDrinks: {
        available: true,
        alcohol: "Can be enjoyed on site",
        alcoholOffered: "Alcohol is offered through the landlord",
        food: "Can be brought in",
        foodOffered: "Food is offered through the landlord",
      },
      facilities: {
        wifi: true,
        airConditioning: true,
        heating: true,
        soundSystem: true,
        projector: true,
        whiteboard: true,
        microphone: true,
        television: true,
        kitchen: true,
        parking: true,
        elevator: true,
        wheelchairAccessible: true,
        naturalLight: true,
        stage: true,
      },
      prices: {
        startingFrom: "00:00",
        endingAt: "23:59",
        price: "46,500",
        space: "The whole room",
        rentingType: "local rent",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      reviews: [
        {
          id: 1,
          name: "John Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
        {
          id: 2,
          name: "Jane Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
      ],
    },
    {
      id: 3,
      name: "Space 3",
      description: "This is the third space",
      isFavorite: false,
      category: "company premises",
      location: "Norway",
      price: "46,500",
      images: [
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      capacity: {
        seating: 100,
        standing: 200,
        roundTable: 150,
        longTable: 120,
        classroom: 80,
        cinemaConference: 150,
        area: "",
      },
      foodAndDrinks: {
        available: true,
        alcohol: "Can be enjoyed on site",
        alcoholOffered: "Alcohol is offered through the landlord",
        food: "Can be brought in",
        foodOffered: "Food is offered through the landlord",
      },
      facilities: {
        wifi: true,
        airConditioning: true,
        heating: true,
        soundSystem: true,
        projector: true,
        whiteboard: true,
        microphone: true,
        television: true,
        kitchen: true,
        parking: true,
        elevator: true,
        wheelchairAccessible: true,
        naturalLight: true,
        stage: true,
      },
      prices: {
        startingFrom: "00:00",
        endingAt: "23:59",
        price: "46,500",
        space: "The whole room",
        rentingType: "local rent",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      reviews: [
        {
          id: 1,
          name: "John Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
        {
          id: 2,
          name: "Jane Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
      ],
    },
    {
      id: 4,
      name: "Space 4",
      description: "This is the fourth space",
      isFavorite: false,
      category: "company premises",
      location: "Norway",
      price: "46,500",
      images: [
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      capacity: {
        seating: 100,
        standing: 200,
        roundTable: 150,
        longTable: 120,
        classroom: 80,
        cinemaConference: 150,
        area: "",
      },
      foodAndDrinks: {
        available: true,
        alcohol: "Can be enjoyed on site",
        alcoholOffered: "Alcohol is offered through the landlord",
        food: "Can be brought in",
        foodOffered: "Food is offered through the landlord",
      },
      facilities: {
        wifi: true,
        airConditioning: true,
        heating: true,
        soundSystem: true,
        projector: true,
        whiteboard: true,
        microphone: true,
        television: true,
        kitchen: true,
        parking: true,
        elevator: true,
        wheelchairAccessible: true,
        naturalLight: true,
        stage: true,
      },
      prices: {
        startingFrom: "00:00",
        endingAt: "23:59",
        price: "46,500",
        space: "The whole room",
        rentingType: "local rent",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      reviews: [
        {
          id: 1,
          name: "John Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
        {
          id: 2,
          name: "Jane Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
      ],
    },
    {
      id: 5,
      name: "Space 5",
      description: "This is the fifth space",
      isFavorite: true,
      category: "company premises",
      location: "Norway",
      price: "46,500",
      images: [
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      capacity: {
        seating: 100,
        standing: 200,
        roundTable: 150,
        longTable: 120,
        classroom: 80,
        cinemaConference: 150,
        area: "",
      },
      foodAndDrinks: {
        available: false,
        alcohol: "Can be enjoyed on site",
        alcoholOffered: "Alcohol is offered through the landlord",
        food: "Can be brought in",
        foodOffered: "Food is offered through the landlord",
      },
      facilities: {
        wifi: true,
        airConditioning: true,
        heating: true,
        soundSystem: true,
        projector: true,
        whiteboard: true,
        microphone: true,
        television: true,
        kitchen: true,
        parking: true,
        elevator: true,
        wheelchairAccessible: true,
        naturalLight: true,
        stage: true,
      },
      prices: {
        startingFrom: "00:00",
        endingAt: "23:59",
        price: "46,500",
        space: "The whole room",
        rentingType: "local rent",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      reviews: [
        {
          id: 1,
          name: "John Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
        {
          id: 2,
          name: "Jane Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
      ],
    },
    {
      id: 6,
      name: "Space 6",
      description: "This is the sixth space",
      isFavorite: false,
      category: "company premises",
      location: "Norway",
      price: "46,500",
      images: [
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1570126646281-5ec88111777f?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      capacity: {
        seating: 100,
        standing: 200,
        roundTable: 150,
        longTable: 120,
        classroom: 80,
        cinemaConference: 150,
        area: "",
      },
      foodAndDrinks: {
        available: true,
        alcohol: "Can be enjoyed on site",
        alcoholOffered: "Alcohol is offered through the landlord",
        food: "Can be brought in",
        foodOffered: "Food is offered through the landlord",
      },
      facilities: {
        wifi: true,
        airConditioning: true,
        heating: true,
        soundSystem: true,
        projector: true,
        whiteboard: true,
        microphone: true,
        television: true,
        kitchen: true,
        parking: true,
        elevator: true,
        wheelchairAccessible: true,
        naturalLight: true,
        stage: true,
      },
      prices: {
        startingFrom: "00:00",
        endingAt: "23:59",
        price: "46,500",
        space: "The whole room",
        rentingType: "local rent",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      reviews: [
        {
          id: 1,
          name: "John Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
        {
          id: 2,
          name: "Jane Doe",
          date: "2021-09-01",
          rating: 5,
          comment: "This is the best space ever",
        },
      ],
    },
  ];

  const filteredSpaces = spaces.filter((space) => {
    return (
      space.category === activeFilters.category ||
      space.capacity.seating >= activeFilters.participants ||
      space.prices.price <= activeFilters.budget ||
      space.foodAndDrinks.available === activeFilters.food.available ||
      space.foodAndDrinks.alcohol === activeFilters.food.alcohol ||
      space.foodAndDrinks.alcoholOffered ===
        activeFilters.food.alcoholOffered ||
      space.foodAndDrinks.food === activeFilters.food.food ||
      space.foodAndDrinks.foodOffered === activeFilters.food.foodOffered ||
      space.rentingType === activeFilters.arrangement
    );
  });

  return (
    <div className="flex flex-col sm:flex-row-reverse w-full">
      <div className="bg-tertiary w-[42vw] text-center h-screen sticky top-10 z-50">
        <APIProvider className="z-50" apiKey="">
          <Map
            className="w-full h-full"
            defaultCenter={{ lat: -1.9885147, lng: 30.1017755 }}
            defaultZoom={3}
          />
        </APIProvider>
      </div>
      <div className="w-[58vw] h-[120rem]  bg-background">
        {/* Div for Filters  starts here */}
        <div className="bg-white px-4">
          {/* First Filter for categories */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Category</p>
            <div className="flex w-3/4 justify-around text-bodyText py-3">
              <label className="flex flex-col items-center cursor-pointer">
                <img className="h-9 w-9" src={ICONS.conferenceIc} alt="" />
                <span>
                  <input
                    type="radio"
                    name="category"
                    value={activeFilters.category}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        category: "company premises",
                      });
                    }}
                  />
                  Company premises
                </span>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <img className="h-9 w-9" src={ICONS.meetingIc} alt="" />
                <span>
                  <input
                    type="radio"
                    name="category"
                    value={activeFilters.category}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        category: "meeting premises",
                      });
                    }}
                  />{" "}
                  Meeting / conference room
                </span>
              </label>
            </div>
          </div>
          {/* Second Filter for number of participants */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">
              Number of participants
            </p>
            <div className="w-3/4 px-4 py-4 text-bodyText flex flex-col">
              <p>{`From ${activeFilters.participants} per`}</p>
              <input
                className="w-full min-h-20"
                type="range"
                min="1"
                max="100"
                defaultValue={activeFilters.participants}
                onChange={(e) => {
                  setActiveFilters({
                    ...activeFilters,
                    participants: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          {/* Third Filter for Budget */}
          <div className="flex items-center">
            <span className="w-1/4">
              <p className="  text-headText font-bold">Budget</p>
              <p className="text-bodyText text-sm">
                Including food where it is offered
              </p>
            </span>
            <div className="w-3/4 px-4 py-4  text-bodyText flex flex-col">
              <p>Max NOK 156,000</p>
              <input
                className="w-full min-h-20"
                type="range"
                min="1"
                max="395000"
                defaultValue={activeFilters.budget}
                onChange={(e) => {
                  setActiveFilters({
                    ...activeFilters,
                    budget: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          {/* Fourth Filter for Date */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Date</p>
            <div className="w-3/4 px-4 py-4  text-bodyText flex flex-col">
              <label
                className="flex border border-bodyText py-1 w-36 font-bold items-center justify-around cursor-pointer"
                htmlFor="chooseDate"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("chooseDate").showPicker();
                }}
              >
                <input
                  className="sr-only"
                  type="date"
                  id="chooseDate"
                  onChange={() => {
                    document.getElementById("selectedDate").innerText =
                      document.getElementById("chooseDate").value;
                    setActiveFilters({
                      ...activeFilters,
                      date: document.getElementById("chooseDate").value,
                    });
                  }}
                />
                <img className="w-8 h-8" src={ICONS.calendarIc} alt="" />
                <span id="selectedDate">Choose date</span>
              </label>
            </div>
          </div>
          {/* Fifth Filter for Food and Drink */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Food and drink</p>
            <div className="w-3/4 px-4 py-4 text-bodyText flex justify-between">
              <label className="flex flex-col items-center cursor-pointer">
                <img className="w-9 h-9" src={ICONS.drinkIc} alt="" />
                <span className="flex space-x-2 items-start">
                  <input
                    className="mt-1"
                    type="checkbox"
                    name="food"
                    value={activeFilters.food.available}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        food: {
                          ...activeFilters.food,
                          alcohol: "Can be brought in",
                        },
                      });
                    }}
                  />
                  <span>Can be brought in</span>
                </span>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <img className="w-9 h-9" src={ICONS.foodIc} alt="" />
                <span className="flex space-x-2 items-start">
                  <input
                    className="mt-1"
                    type="checkbox"
                    name="food"
                    value={activeFilters.food.food}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        food: {
                          ...activeFilters.food,
                          food: "Can be brought in",
                          foodOffered: "Food is offered through the landlord",
                        },
                      });
                    }}
                  />
                  <span>Bringing food allowed</span>
                </span>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <img className="w-9 h-9" src={ICONS.cateringIc} alt="" />
                <span className="flex space-x-2 items-start">
                  <input
                    className="mt-1"
                    type="checkbox"
                    name="food"
                    value={activeFilters.food.foodOffered}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        food: {
                          ...activeFilters.food,
                          food: "Can be brought in",
                          foodOffered: "Food is offered through the landlord",
                        },
                      });
                    }}
                  />
                  <span>The landlord offers catering</span>
                </span>
              </label>
            </div>
          </div>
          {/* Sixth Filter for Type of Arrangement */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Type of arrangement</p>
            <div className="w-3/4 px-4 py-4 text-bodyText flex flex-wrap justify-between">
              <label className="space-x-2">
                <input
                  type="radio"
                  name="arrangement"
                  value={activeFilters.arrangement}
                  onChange={() => {
                    setActiveFilters({
                      ...activeFilters,
                      arrangement: "Corporate Event",
                    });
                  }}
                />
                <span>Corporate Event</span>
              </label>
              <label className="space-x-2">
                <input
                  type="radio"
                  name="arrangement"
                  value={activeFilters.arrangement}
                  onChange={() => {
                    setActiveFilters({
                      ...activeFilters,
                      arrangement: "Wedding",
                    });
                  }}
                />
                <span>Wedding</span>
              </label>
              <label className="space-x-2">
                <input
                  type="radio"
                  name="arrangement"
                  value={activeFilters.arrangement}
                  onChange={() => {
                    setActiveFilters({
                      ...activeFilters,
                      arrangement: "Feast",
                    });
                  }}
                />
                <span>Feast</span>
              </label>
              <label className="space-x-2">
                <input
                  type="radio"
                  name="arrangement"
                  value={activeFilters.arrangement}
                  onChange={() => {
                    setActiveFilters({
                      ...activeFilters,
                      arrangement: "Christmas party",
                    });
                  }}
                />
                <span>Christmas party</span>
              </label>
            </div>
          </div>
        </div>
        {/* Div for Filters ends here */}
        <hr />
        {/* Div for Results starts here */}
        <div className="flex flex-col px-4">
          <div>
            <h1 className="text-headText">3 Results</h1>
          </div>
          <div className="flex justify-between items-center h-12">
            <button className="border border-secondary text-secondaryDark px-4 py-1 font-bold">
              More search options
            </button>
            <div className="flex space-x-2 items-center">
              <p className="text-bodyText">Change to:</p>
              <button className="text-secondaryDark hover:underline">
                Cheapest first
              </button>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4">
            {filteredSpaces.map((space) => (
              <EventCard key={space.id} eventDetails={space} />
            ))}
          </div>
        </div>
        {/* Div for Results ends here */}
      </div>
    </div>
  );
};

export default Home;
