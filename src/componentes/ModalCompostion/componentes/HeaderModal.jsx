import PropTypes from "prop-types";

function HeaderModal({ children }) {
  return <div className="bg-black-900 p-6 flex ">{children}</div>;
}

HeaderModal.propTypes = {
  children: PropTypes.node,
};

HeaderModal.defaultProps = {
  children: null,
};

export default HeaderModal;
