  
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function ImagePendingView() {
  return (
    <Loader
      type="Audio"
      color="#ff6b08"
      height={80}
      width={80}
      style={{
        position: "absolute",
        display: "block",
        left: "50%",
        top: "50%",
        transform: "translate (-50%, -50%)",
        zIndex: 1000,
      }}
    />
  );
}

Loader.propTypes = {
  marginLeft: PropTypes.number,
};