import React, { useState, useEffect } from "react";
import AllJobsCard from "@/components/shared/AllJobsCard";
const jobs = [
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

const Browse = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="font-bold text-xl my-5">Search Results: {jobs.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 mt-5">
        {jobs.length > 0 ? (
          <>
            {jobs.map((job, index) => (
              <AllJobsCard key={index} {...job} />
            ))}
          </>
        ) : (
          <>
            <h1>No Jobs Found</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;

/*

jobs.length = 0 -  no job found

jobs.length > 0 - 1, 3,4 - data map 

*/
