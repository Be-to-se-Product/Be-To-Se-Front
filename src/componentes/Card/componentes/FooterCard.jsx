import PropTypes from "prop-types";

function FooterCard({ children }) {
  return <div className="flex w-full justify-between ">{children}</div>;
}

FooterCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterCard;
