import PropTypes from "prop-types";

function DescriptionCard({ children }) {
  return (
    <div className="border-b border-t border-white-gray py-4">{children}</div>
  );
}

DescriptionCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DescriptionCard;
