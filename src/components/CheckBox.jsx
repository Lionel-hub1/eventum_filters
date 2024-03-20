import PropTypes from "prop-types";

CheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function CheckBox({ value, handleChange, icon, reference, name }) {
  console.log("The list is here", reference);
  console.log("The value is here", value);
  return (
    <label className="flex flex-col items-center cursor-pointer">
      <img className="w-9 h-9" src={icon} alt="" />
      <span className="flex space-x-2 items-start">
        <input
          className="mt-1"
          type="checkbox"
          name={name}
          checked={reference === value}
          onChange={handleChange}
        />
        <span>{value}</span>
      </span>
    </label>
  );
}

export default CheckBox;
