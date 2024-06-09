import PropTypes from "prop-types";

function ContentInfoCard({ children }) {
  return (
    <div className="p-4 flex flex-col gap-y-4 bg-black-900 rounded-b-lg">
      {children}
    </div>
  );
}

ContentInfoCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentInfoCard;
