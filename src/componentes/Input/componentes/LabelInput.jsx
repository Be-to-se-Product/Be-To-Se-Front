import PropTypes from "prop-types";

function LabelInput({ children }) {
  return (
    <label
      htmlFor="inputControl"
      className="text-sm  mb-2  text-black-full flex justify-between items-center "
    >
      {children}
    </label>
  );
}

LabelInput.propTypes = {
  children: PropTypes.node,
};

LabelInput.defaultProps = {
  children: null,
};

export default LabelInput;
