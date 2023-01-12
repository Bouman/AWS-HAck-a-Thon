import PropTypes from "prop-types";

function CheckBoxFilter({ name }) {
  return (
    <div className="flex items-center mr-4">
      <input
        checked
        id="red-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="red-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {name}
      </label>
    </div>
  );
}

export default CheckBoxFilter;

CheckBoxFilter.propTypes = {
  name: PropTypes.element.isRequired,
};
