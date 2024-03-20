import PropTypes from "prop-types";

RangeField.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function RangeField({ min, max, value, onChange }) {
  return (
    <input
      className="w-full min-h-20"
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default RangeField;
