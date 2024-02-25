import PropTypes from "prop-types";

const Input = ({ type, name, placeholder, onChange = "" }) => {
  return (
    <input
      className=" text-black px-2"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.objectOf(PropTypes.any).isRequired,
  placeholder: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Input;
