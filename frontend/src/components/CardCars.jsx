import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardCars({ name, rate, carId, carImage }) {
  return (
    <div className="overflow-hidden max-w-sm bg-rose-800 border-b-4 rounded-lg border-rose-800 shadow-md ">
      <div className="overflow-hidden">
        <Link to={`/details/${carId}`}>
          <img
            className="h-[15rem] hover:scale-125 hover:rotate-5 transition ease-in-out delay-150"
            src={carImage}
            alt=""
          />
        </Link>
      </div>
      <div className="p-5 bg-white rounded-br-[50%] ">
        <hr className="bg-rose-800 h-1 rounded my-2" />
        <h5 className="mb-2 text-4xl font-bebas font-medium tracking-tight text-gray-900">
          - {name} -
        </h5>
        <div className="flex">
          <p className="w-1/3 font-bebas">{rate}/10</p>
          <Link
            to={`/details/${carId}`}
            className="transition ease-in-out delay-150 inline-flex items-center px-3 py-2 text-medium font-bebas text-center text-gray-300 bg-rose-800 rounded-lg hover:bg-rose-900 hover:scale-110 tran focus:ring-4 focus:outline-none focus:ring-rose-400 "
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCars;

CardCars.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  carId: PropTypes.string.isRequired,
  carImage: PropTypes.string.isRequired,
};
