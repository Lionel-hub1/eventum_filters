import PropTypes from 'prop-types';
import { ICONS } from '../data/constants';

DateField.propTypes = {
    handleDateChange: PropTypes.func.isRequired,
};

function DateField({handleDateChange}) {
    return (
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
            handleDateChange(document.getElementById("chooseDate").value);
          }}
        />
        <img className="w-8 h-8" src={ICONS.calendarIc} alt="" />
        <span id="selectedDate">Choose date</span>
      </label>
    );
}

export default DateField;