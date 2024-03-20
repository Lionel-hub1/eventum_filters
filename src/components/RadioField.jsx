import PropTypes from "prop-types";

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  image: PropTypes.string,
};

function RadioField({ name, reference, value, handleChange, image }) {
  return (
    <label className="flex flex-col items-center cursor-pointer">
      {image && <img className="h-9 w-9" src={image} alt="" />}
      <span className="space-x-2">
        <input
          type="radio"
          name={name}
          value={reference}
          checked={reference === value}
          onChange={handleChange}
        />
        <span>{value}</span>
      </span>
    </label>
  );
}

export default RadioField;
