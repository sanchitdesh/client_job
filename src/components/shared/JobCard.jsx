import React from "react";
import { Badge } from "../ui/badge";
import { FaMapMarkerAlt, FaSuitcase, FaDollarSign } from "react-icons/fa";

const JobCard = ({
  title,
  company,
  location,
  experience,
  position,
  totalPackage,
  jobType,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mr-4">
          {company[0]}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <h3 className="text-md text-gray-600">{company}</h3>
        </div>
      </div>
      <div className="text-gray-600 mb-4">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-blue-500 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaSuitcase className="text-green-500 mr-2" />
          <span className="text-sm">{experience}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaDollarSign className="text-yellow-500 mr-2" />
          <span className="text-sm">{totalPackage}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge
            className="bg-green-100 text-green-700 font-medium px-3 py-1 border border-green-300"
            variant="ghost"
          >
            {jobType}
          </Badge>
          <Badge
            className="bg-yellow-100 text-yellow-700 font-medium px-3 py-1 border border-yellow-300"
            variant="ghost"
          >
            {position}
          </Badge>
          <Badge
            className="bg-red-100 text-red-700 font-medium px-3 py-1 border border-red-300"
            variant="ghost"
          >
            {totalPackage}
          </Badge>
        </div>
      </div>
      <div className="text-right">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
