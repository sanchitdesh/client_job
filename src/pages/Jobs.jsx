import React, { useState } from "react";
import AllJobsCard from "@/components/shared/AllJobsCard";
import FilterSidebar from "@/components/shared/FilterSidebar";
import { FaFilter } from "react-icons/fa";

const allJobs = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    experience: "2-4 years",
    position: "Full-Time",
    totalPackage: "$120,000 - $150,000",
    jobType: "Permanent",
    companyIcon:
      "https://w7.pngwing.com/pngs/848/632/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png",
    postedDate: "2024-07-25",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    experience: "5+ years",
    position: "Full-Time",
    totalPackage: "$130,000 - $160,000",
    jobType: "Permanent",
    companyIcon:
      "https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png",
    postedDate: "2024-07-22",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    experience: "5+ years",
    position: "Full-Time",
    totalPackage: "$130,000 - $160,000",
    jobType: "Permanent",
    companyIcon:
      "https://w7.pngwing.com/pngs/303/254/png-transparent-roblox-alt-macos-bigsur-icon-thumbnail.png",
    postedDate: "2024-07-22",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    experience: "5+ years",
    position: "Full-Time",
    totalPackage: "$130,000 - $160,000",
    jobType: "Permanent",
    companyIcon:
      "https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon-thumbnail.png",
    postedDate: "2024-07-22",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    experience: "5+ years",
    position: "Full-Time",
    totalPackage: "$130,000 - $160,000",
    jobType: "Permanent",
    companyIcon:
      "https://w7.pngwing.com/pngs/207/932/png-transparent-indian-premier-league-espncricinfo-cricket-espn-inc-cricket-text-logo-news-thumbnail.png",
    postedDate: "2024-07-22",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    experience: "5+ years",
    position: "Full-Time",
    totalPackage: "$130,000 - $160,000",
    jobType: "Permanent",
    companyIcon:
      "https://w7.pngwing.com/pngs/689/592/png-transparent-capgemini-sogeti-engineering-information-industry-blockchain-miscellaneous-blue-logo-thumbnail.png",
    postedDate: "2024-07-22",
  },
  {
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    experience: "5+ years",
    position: "Full-Time",
    totalPackage: "$130,000 - $160,000",
    jobType: "Permanent",
    companyIcon:
      "https://w7.pngwing.com/pngs/614/66/png-transparent-tata-business-support-services-tata-consultancy-services-tata-group-consultant-business-blue-angle-text-thumbnail.png",
    postedDate: "2024-07-22",
  },
];

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Pune", "Mumbai", "Hyderabad", "Bangalore"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1Lakh", "1 Lakh to 5 Lakh"],
  },
  {
    filterType: "Industry",
    array: ["Software Engineer", "Product Manager", "Data Analyst"],
  },
  {
    filterType: "Experience",
    array: ["Fresher", "1-2 years", "3-5 years", "5+ years"],
  },
  // Add more filters as needed
];

const Jobs = () => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  const handleFilterDialog = () => {
    setIsFilterDialogOpen(!isFilterDialogOpen);
  };

  const handleApplyFilters = () => {
    // Apply your filter logic here
    handleFilterDialog();
  };

  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row p-8">
      <div className="w-full md:hidden sm:hidden hidden lg:block lg:w-[30%] mb-6 lg:mb-0 lg:pr-4">
        <FilterSidebar
          filters={filterData}
          onClose={handleFilterDialog}
          onApplyFilters={handleApplyFilters}
        />
      </div>
      <div className="w-full lg:w-[70%]">
        <button
          onClick={handleFilterDialog}
          className="lg:hidden mb-6 py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <FaFilter size={20} className="inline-block mr-2" /> Filter Jobs
        </button>
        {allJobs.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-xl font-semibold text-gray-800">
              No Jobs Found
            </h1>
          </div>
        ) : (
          <div className="h-[calc(100vh-160px)] overflow-y-scroll pr-6 no-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allJobs.map((job, index) => (
                <AllJobsCard key={index} {...job} />
              ))}
            </div>
          </div>
        )}
      </div>

      {isFilterDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg">
            <FilterSidebar
              filters={filterData}
              onClose={handleFilterDialog}
              onApplyFilters={handleApplyFilters}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
