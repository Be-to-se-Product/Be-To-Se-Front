import PropTypes from "prop-types";

function HeaderCard({ children }) {
  return <div className="flex justify-between w-full ">{children}</div>;
}

HeaderCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderCard;
