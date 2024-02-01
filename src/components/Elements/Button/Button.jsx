import PropTypes from "prop-types";

const Button = (props) => {
  const { textLink, bgLink = "", textColor = "text-white", hover = "" } = props;
  return (
    <a
      className={`w-full rounded-3xl ${bgLink} py-3 px-7 ${textColor} ${hover}`}
    >
      {textLink}
    </a>
  );
};

Button.propTypes = {
  textLink: PropTypes.string.isRequired,
  bgLink: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  hover: PropTypes.string.isRequired,
};

export default Button;
