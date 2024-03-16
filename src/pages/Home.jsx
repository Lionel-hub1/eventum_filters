import { ICONS } from "../data/constants";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-full pl-4">
      <div className="bg-tertiary w-[42%] text-center h-screen sticky top-10 -z-10">
        Map
      </div>
      <div className="w-[58%] h-[120rem]">
        {/* Div for Filters  starts here */}
        <form className="">
          {/* First Filter with categories */}
          <div className="flex items-center">
            <p className="w-1/4 text-headText font-bold">Category</p>
            <div className="flex w-3/4 justify-around text-bodyText py-3">
              <label className="flex flex-col items-center cursor-pointer">
                <img className="h-8 w-8" src={ICONS.conferenceIc} alt="" />
                <span>
                  <input type="radio" name="category" value="company" /> Company
                  premises
                </span>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <img className="h-8 w-8" src={ICONS.meetingIc} alt="" />
                <span>
                  <input type="radio" name="category" value="meeting" /> Meeting
                  / conference room
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
