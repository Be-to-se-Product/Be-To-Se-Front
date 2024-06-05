import PropTypes from "prop-types";

function FooterContentCard({children}) {
  return (
    <div className="text-center flex flex-col gap-y-2">
      {children}
    </div>
  );
}

FooterContentCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterContentCard;
