import React from "react";
import PropTypes from "prop-types";

function InputFilter({ name, type }) {
  return (
    <div className="relative my-4">
      <input
        type={type}
        id="floating_standard"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        min="0"
      />
      <label
        htmlFor="floating_standard"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {name}
      </label>
    </div>
  );
}

export default InputFilter;

InputFilter.propTypes = {
  name: PropTypes.element.isRequired,
  type: PropTypes.element.isRequired,
};
