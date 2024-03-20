import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { ICONS } from "../data/constants";
import spaces from "../data/spaces";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import RangeField from "../components/RangeField";
import DateField from "../components/DateField";
import CheckBox from "../components/CheckBox";
import RadioField from "../components/RadioField";

const Home = () => {

  const [valuesFilters, setValuesFilters] = useState({
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
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    console.log(valuesFilters);
  }, [valuesFilters]);

  const handleFilterChange = (filterName, value) => {
    setValuesFilters({
      ...valuesFilters,
      [filterName]: value,
    });
    setActiveFilter(filterName);
  };
  const handleCategoryChange = (category) => {
    handleFilterChange("category", category);
  };
  const handleParticipantsChange = (participants) => {
    handleFilterChange("participants", participants);
  };
  const handleBudgetChange = (budget) => {
    handleFilterChange("budget", budget);
  };
  const handleDateChange = (date) => {
    handleFilterChange("date", date);
  };

  const handleFoodChange = (food) => {
    setValuesFilters({
      ...valuesFilters,
      food: food,
    });
    setActiveFilter("food");
  };

  const handleArrangementChange = (arrangement) => {
    handleFilterChange("arrangement", arrangement);
  };

  const filteredSpaces = spaces.filter((space) => {
    if (activeFilter === "category") {
      return space.category === valuesFilters.category;
    } else if (activeFilter === "participants") {
      return space.capacity.seating <= valuesFilters.participants;
    } else if (activeFilter === "budget") {
      return parseInt(space.prices.price) <= parseInt(valuesFilters.budget);
    } else if (activeFilter === "date") {
      return space.prices.days.includes(valuesFilters.date);
    } else if (activeFilter === "food") {
      return (
        space.foodAndDrinks.alcohol === valuesFilters.food.alcohol ||
        space.foodAndDrinks.food === valuesFilters.food.food ||
        space.foodAndDrinks.foodOffered === valuesFilters.food.foodOffered
      );
    } else if (activeFilter === "arrangement") {
      return space.arrangement === valuesFilters.arrangement;
    } else {
      return false;
    }
  });

  return (
    <div className="flex flex-col md:flex-row-reverse w-full">
      <div className="bg-tertiary w-full md:w-[42vw] text-center h-screen md:sticky md:top-10 md:z-40">
        <APIProvider className="z-40" apiKey="">
          <Map
            className="w-full h-full"
            defaultCenter={{ lat: -1.9885147, lng: 30.1017755 }}
            defaultZoom={3}
          />
        </APIProvider>
      </div>
      <div className="w-full md:w-[58vw] h-[120rem]  bg-background">
        {/* Div for Filters  starts here */}
        <div className="bg-white px-4">
          {/* First Filter for categories */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Category</p>
            <div className="flex w-3/4 justify-around text-bodyText py-3">
              <RadioField
                name="category"
                reference={valuesFilters.category}
                value="company premises"
                handleChange={() => handleCategoryChange("company premises")}
                image={ICONS.conferenceIc}
              />
              <RadioField
                name="category"
                reference={valuesFilters.category}
                value="meeting premises"
                handleChange={() => handleCategoryChange("meeting premises")}
                image={ICONS.meetingIc}
              />
            </div>
          </div>
          {/* Second Filter for number of participants */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">
              Number of participants
            </p>
            <div className="w-3/4 px-4 py-4 text-bodyText flex flex-col">
              <p>{`From ${valuesFilters.participants} people`}</p>
              <RangeField
                min={1}
                max={1000}
                value={valuesFilters.participants}
                onChange={handleParticipantsChange}
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
              <p>{`Max NOK ${valuesFilters.budget}`}</p>
              <RangeField
                min={0}
                max={395000}
                value={valuesFilters.budget}
                onChange={handleBudgetChange}
              />
            </div>
          </div>
          {/* Fourth Filter for Date */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Date</p>
            <div className="w-3/4 px-4 py-4  text-bodyText flex flex-col">
              <DateField handleDateChange={handleDateChange} />
            </div>
          </div>
          {/* Fifth Filter for Food and Drink */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Food and drink</p>
            <div className="w-3/4 px-4 py-4 text-bodyText flex justify-between">
              <CheckBox
                value="Bringing food allowed"
                reference={valuesFilters.food.food}
                handleChange={() =>
                  handleFoodChange({
                    ...valuesFilters.food,
                    food: "Bringing food allowed",
                  })
                }
                icon={ICONS.foodIc}
                list={valuesFilters}
                name="food"
              />
              <CheckBox
                value="The landlord offers catering"
                reference={valuesFilters.food.food}
                handleChange={() =>
                  handleFoodChange({
                    ...valuesFilters.food,
                    food: "The landlord offers catering",
                  })
                }
                icon={ICONS.cateringIc}
                list={valuesFilters}
                name="food"
              />
              <CheckBox
                value="The landlord offers drinks"
                reference={valuesFilters.food.food}
                handleChange={() =>
                  handleFoodChange({
                    ...valuesFilters.food,
                    food: "The landlord offers drinks",
                  })
                }
                icon={ICONS.drinkIc}
                list={valuesFilters}
                name="food"
              />
            </div>
          </div>
          {/* Sixth Filter for Type of Arrangement */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Type of arrangement</p>
            <div className="w-3/4 px-4 py-4 text-bodyText flex flex-wrap justify-between">
              <RadioField
                name="arrangement"
                reference={valuesFilters.arrangement}
                value="Corporate Event"
                handleChange={() => handleArrangementChange("Corporate Event")}
              />
              <RadioField
                name="arrangement"
                reference={valuesFilters.arrangement}
                value="Wedding"
                handleChange={() => handleArrangementChange("Wedding")}
              />
              <RadioField
                name="arrangement"
                reference={valuesFilters.arrangement}
                value="Feast"
                handleChange={() => handleArrangementChange("Feast")}
              />
              <RadioField
                name="arrangement"
                reference={valuesFilters.arrangement}
                value="Christmas party"
                handleChange={() => handleArrangementChange("Christmas party")}
              />
            </div>
          </div>
        </div>
        {/* Div for Filters ends here */}
        <hr />
        {/* Div for Results starts here */}
        <div className="flex flex-col px-4">
          <div>
            <h1 className="text-headText">{filteredSpaces.length} Results</h1>
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
          {filteredSpaces[0] ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
              {filteredSpaces.map((space) => (
                <EventCard
                  key={space.id}
                  eventDetails={space}
                  className="transition duration-1000 ease-in-out"
                />
              ))}
            </div>
          ) : (
            <p className="w-full text-center mt-10 font-bold text-xl text-headText">
              No results found
            </p>
          )}
        </div>
        {/* Div for Results ends here */}
      </div>
    </div>
  );
};

export default Home;
