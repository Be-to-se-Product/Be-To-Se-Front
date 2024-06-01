/* eslint-disable react/jsx-props-no-spreading */
import Button from "../../Button/Button";

function CloseModal({ ...props }) {
  return (
    <div className="w-10 ml-auto">
      <Button
        variants={{
          sizes: "max",
        }}
        {...props}
      >
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 10L0.5 9L4.5 5L0.5 1L1.5 0L5.5 4L9.5 0L10.5 1L6.5 5L10.5 9L9.5 10L5.5 6L1.5 10Z"
            fill="white"
          />
        </svg>
      </Button>
    </div>
  );
}

export default CloseModal;
