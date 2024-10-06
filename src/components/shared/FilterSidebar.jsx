import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSidebar = ({ filters, onClose, onApplyFilters }) => {
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full mt-4 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Filter Jobs</h2>
        <button
          onClick={onClose}
          className="text-gray-600 lg:hidden hover:text-gray-800"
        >
          <FaTimes size={24} />
        </button>
      </div>
      {filters.map((filter, index) => (
        <div key={index} className="mb-6">
          <div
            className="flex justify-between items-center mb-3 cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              {filter.filterType}
            </h3>
            {openDropdowns[index] ? (
              <FaChevronUp size={20} className="text-gray-600" />
            ) : (
              <FaChevronDown size={20} className="text-gray-600" />
            )}
          </div>
          {openDropdowns[index] && (
            <ul className="space-y-2 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400">
              {filter.array.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${filter.filterType}-${idx}`}
                    className="mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`${filter.filterType}-${idx}`}
                    className="text-gray-600"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <button
        onClick={onApplyFilters}
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Apply Filters
      </button>
    </div>
  );
};

FilterSidebar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      filterType: PropTypes.string.isRequired,
      array: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default FilterSidebar;
