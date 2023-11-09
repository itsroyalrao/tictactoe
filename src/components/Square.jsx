import PropTypes from "prop-types";

const Square = (props) => {
  return (
    <>
      <div
        className="w-20 h-20 bg-gray-300 hover:bg-gray-400 cursor-pointer flex items-center justify-center"
        onClick={props.clicked}
      >
        <div className="text-3xl">{props.value}</div>
      </div>
    </>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  clicked: PropTypes.func,
};

export default Square;
