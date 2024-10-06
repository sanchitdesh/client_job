import React from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaBookmark,
  FaUserTie,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllJobsCard = ({
  title,
  company,
  location,
  experience,
  position,
  totalPackage,
  jobType,
  companyIcon,
  postedDate,
}) => {
  const navigate = useNavigate();
  const jobId = "abc";
  return (
    <article className="w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-2xl relative m-4 hover:bg-gray-50">
      <button className="absolute top-4 right-4" aria-label="Save job">
        <FaBookmark className="text-gray-400 text-xl hover:text-blue-600 cursor-pointer transition-colors duration-300" />
      </button>
      <div className="flex items-center mb-6">
        {companyIcon && (
          <img
            src={companyIcon}
            alt={`${company} logo`}
            className="w-16 h-16 rounded-full border border-gray-300 mr-4 object-contain"
          />
        )}
        <div>
          <h3 className="text-xl md:pt-4 font-bold text-gray-800">{title}</h3>
          <h4 className="text-lg text-gray-600">{company}</h4>
        </div>
      </div>
      <div className="text-gray-700 mb-6 space-y-3">
        <div className="flex items-center">
          <FaBuilding className="text-blue-600 text-xl" />
          <span className="ml-3 text-base font-medium">{company}</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-green-600 text-xl" />
          <span className="ml-3 text-base font-medium">{location}</span>
        </div>
        <div className="flex items-center">
          <FaUserTie className="text-yellow-600 text-xl" />
          <span className="ml-3 text-base font-medium">{experience}</span>
        </div>
        <div className="flex items-center">
          <FaDollarSign className="text-red-600 text-xl" />
          <span className="ml-3 text-base font-medium">{totalPackage}</span>
        </div>
        <div className="flex items-center">
          <FaBriefcase className="text-purple-600 text-xl" />
          <span className="ml-3 text-base font-medium">{position}</span>
        </div>
        <div className="flex items-center">
          <FaClock className="text-indigo-600 text-xl" />
          <span className="ml-3 text-base font-medium">{jobType}</span>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="text-orange-600 text-xl" />
          <span className="ml-3 text-base font-medium">{postedDate}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate(`/description/${jobId}`)}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Details
        </button>
        <button className="w-full py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          Save for later
        </button>
      </div>
    </article>
  );
};

export default AllJobsCard;
