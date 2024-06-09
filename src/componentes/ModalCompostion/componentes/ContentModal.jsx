import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function ContentModal({ children, show }) {
  const [showModal, setShowModal] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (show === false) {
      ref.current = setTimeout(() => {
        setShowModal(false);
      }, 800);
    } else {
      setShowModal(true);
    }

    return () => {
      clearTimeout(ref.current);
    };
  }, [show]);

  if (!showModal) return null;

  return (
    <div
      className={`w-full h-full absolute bg-[rgba(0,0,0,0.5)] top-0 transition-all  ${
        !show ? " opacity-0 invisible  " : "  visible  opacity-100 "
      }`}
    >
      <div className="  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-full absolute">
        <div className="w-full h-1 bg-orange-principal" />
        {children}
      </div>
    </div>
  );
}

ContentModal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ContentModal;
