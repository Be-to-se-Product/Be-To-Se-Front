import PropTypes from "prop-types";

function CoverCard({ img }) {
  return (
    <div className="w-full h-[250px]">
      <img
        src={img}
        alt="logo placeholder"
        className="w-full h-full object-cover  "
      />
    </div>
  );
}

CoverCard.propTypes = {
  img: PropTypes.string.isRequired,
};

export default CoverCard;
