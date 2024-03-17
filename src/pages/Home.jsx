import { ICONS } from "../data/constants";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-full">
      <div className="bg-tertiary w-[42%] text-center h-screen sticky top-10 -z-10">
        Map
      </div>
      <div className="w-[58%] h-[120rem] px-4">
        {/* Div for Filters  starts here */}
        <form className="">
          {/* First Filter for categories */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Category</p>
            <div className="flex w-3/4 justify-around text-bodyText py-3">
              <label className="flex flex-col items-center cursor-pointer">
                <img className="h-9 w-9" src={ICONS.conferenceIc} alt="" />
                <span>
                  <input type="radio" name="category" value="company" /> Company
                  premises
                </span>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <img className="h-9 w-9" src={ICONS.meetingIc} alt="" />
                <span>
                  <input type="radio" name="category" value="meeting" /> Meeting
                  / conference room
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
              <p>From 50 per</p>
              <input
                className="w-full min-h-20"
                type="range"
                min="1"
                max="100"
                defaultValue="50"
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
                defaultValue="56000"
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
                  <input className="mt-1" type="checkbox" name="food" />
                  <span>Brought drinks allowed</span>
                </span>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <img className="w-9 h-9" src={ICONS.foodIc} alt="" />
                <span className="flex space-x-2 items-start">
                  <input className="mt-1" type="checkbox" name="food" />
                  <span>Bringing food allowed</span>
                </span>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <img className="w-9 h-9" src={ICONS.cateringIc} alt="" />
                <span className="flex space-x-2 items-start">
                  <input className="mt-1" type="checkbox" name="food" />
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
                  value="corporate-event"
                />
                <span>Corporate Event</span>
              </label>
              <label className="space-x-2">
                <input type="radio" name="arrangement" value="wedding" />
                <span>Wedding</span>
              </label>
              <label className="space-x-2">
                <input type="radio" name="arrangement" value="feast" />
                <span>Feast</span>
              </label>
              <label className="space-x-2">
                <input
                  type="radio"
                  name="arrangement"
                  value="christmas-party"
                />
                <span>Christmas party</span>
              </label>
            </div>
          </div>
        </form>
        {/* Div for Filters ends here */}
        {/* Div for Results starts here */}
        <div className="flex flex-col">
          <hr />
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
            <div className="bg-tertiary h-60 w-full"></div>
            <div className="bg-tertiary h-60 w-full"></div>
            <div className="bg-tertiary h-60 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
