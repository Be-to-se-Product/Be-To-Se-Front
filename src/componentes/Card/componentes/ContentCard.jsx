import PropTypes from "prop-types";

function ContentCard({ children }) {
  return (
    <div className=" border w-[300px]  text-white-principal text-sm rounded-lg ">
      {children}
    </div>
  );
}

ContentCard.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContentCard;
