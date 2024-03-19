import { ICONS } from "../data/constants";
import PropTypes from "prop-types";

const LikeButton = ({isFavorite}) => {
    const getIcon = () => {
      if (isFavorite) {
        return ICONS.heartFilledIc;
      }
      return ICONS.heartOutLineIc;
    };
    return (
      <img
        className="absolute top-3 left-3 w-8 h-8 group-hover:w-9 group-hover:h-9"
        src={getIcon()}
        alt=""
      />
    );
}

LikeButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
};

export default LikeButton;