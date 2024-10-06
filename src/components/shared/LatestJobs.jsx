import React from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    experience: "3-5 years",
    position: "Full-time",
    totalPackage: "$120,000 - $150,000",
    jobType: "Permanent",
  },
  {
    title: "Product Manager",
    company: "Creative Solutions LLC",
    location: "New York, NY",
    experience: "5-7 years",
    position: "Full-time",
    totalPackage: "$100,000 - $130,000",
    jobType: "Permanent",
  },
  {
    title: "UX Designer",
    company: "Design Pros",
    location: "Los Angeles, CA",
    experience: "2-4 years",
    position: "Contract",
    totalPackage: "$80,000 - $100,000",
    jobType: "Temporary",
  },
  {
    title: "Marketing Specialist",
    company: "Market Masters Ltd.",
    location: "Chicago, IL",
    experience: "1-3 years",
    position: "Part-time",
    totalPackage: "$60,000 - $75,000",
    jobType: "Permanent",
  },
  {
    title: "Data Analyst",
    company: "Data Insights Co.",
    location: "Austin, TX",
    experience: "3-5 years",
    position: "Full-time",
    totalPackage: "$90,000 - $110,000",
    jobType: "Permanent",
  },
  {
    title: "HR Manager",
    company: "People First HR",
    location: "Seattle, WA",
    experience: "4-6 years",
    position: "Full-time",
    totalPackage: "$110,000 - $140,000",
    jobType: "Permanent",
  },
  {
    title: "Sales Associate",
    company: "Retail Giant",
    location: "Miami, FL",
    experience: "0-2 years",
    position: "Part-time",
    totalPackage: "$30,000 - $40,000",
    jobType: "Temporary",
  },
  {
    title: "Software Architect",
    company: "NextGen Technologies",
    location: "Boston, MA",
    experience: "7-10 years",
    position: "Full-time",
    totalPackage: "$150,000 - $200,000",
    jobType: "Permanent",
  },
  {
    title: "Graphic Designer",
    company: "Visual Arts Studio",
    location: "Philadelphia, PA",
    experience: "2-4 years",
    position: "Contract",
    totalPackage: "$70,000 - $85,000",
    jobType: "Temporary",
  },
];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20  items-center flex flex-col ">
      <h1 className="text-4xl font-bold flex justify-center mb-12">
        <span className="text-[#0394f5] mr-2">Latest & Top</span>Job Openings
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 md:gap-6 px-6  lg:px-10 ">
        {jobs.slice(0, 6).map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            experience={job.experience}
            position={job.position}
            totalPackage={job.totalPackage}
            jobType={job.jobType}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
