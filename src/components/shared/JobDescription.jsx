import React from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const jobData = [
  {
    jobName: "Frontend Developer (Flutter)",
    companyName: "Client Co",
    postedBy: "Excellent Opportunity Placements",
    experience: "5 - 8 years",
    salary: "15-25 Lacs P.A.",
    workType: "Remote",
    location: "Bangalore",
    posted: "2 days ago",
    openings: 4,
    applicants: 54,
    jobDescription:
      "4+ years of experience as a Frontend Engineer.3+ years of experience with Flutter and Dart. Proven experience in developing web applications. Strong problem-solving and communication skills. 4+ years of experience as a Frontend Engineer.3+ years of experience with Flutter and Dart. Proven experience in developing web applications. Strong problem-solving and communication skills.",
    requiredExperience: "5+ years experience mandatory",
    mandatorySkills: "Flutter: 4, Dart: 3, Mobile Web Development: 3",
    opportunity: "Full Time, 8 hours a day",
    noticePeriod: "2 weeks only",
    role: "Mobile / App Developer",
    industryType: "IT Services & Consulting",
    department: "Engineering - Software & QA",
    employmentType: "Full Time, Permanent",
    roleCategory: "Software Development",
    education: "B.Tech/B.E. in Any Specialization",
    keySkills: [
      "Flutter",
      "Frontend Engineer",
      "Mobile Web Development",
      "Dart",
    ],
    jobMatchScore: [
      { label: "Early Applicant", status: "positive" },
      { label: "Key Skills", status: "negative" },
      { label: "Location", status: "positive" },
      { label: "Work Experience", status: "negative" },
    ],
  },
];

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-8 space-y-8">
        {jobData.map((item, index) => (
          <div key={index} className="space-y-8">
            {/* Job Header */}
            <div className="flex flex-col space-y-2 border-b pb-4 border-gray-200">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {item.jobName}
              </h1>
              <div className="text-sm flex flex-col text-gray-600">
                <span className="font-medium text-gray-800">
                  {item.companyName}
                </span>
                <span>Posted by {item.postedBy}</span>
              </div>
            </div>

            {/* Job Details */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <FaBriefcase className="text-gray-600 text-lg hover:text-blue-500" />
                  <span>{item.experience}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <FaRupeeSign className="text-gray-600 text-lg hover:text-blue-500" />
                  <span>{item.salary}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <FaMapMarkerAlt className="text-gray-600 text-lg hover:text-blue-500" />
                  <span>
                    {item.workType} ({item.location})
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                Hiring office located in {item.location}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm flex flex-col text-gray-600 space-y-1">
                <span>
                  <strong className="font-medium">Posted:</strong> {item.posted}
                </span>
                <span>
                  <strong className="font-medium">Openings:</strong>{" "}
                  {item.openings}
                </span>
                <span>
                  <strong className="font-medium">Applicants: </strong>
                  {item.applicants}
                </span>
              </div>

              <div className="flex space-x-4">
                <button className="rounded-full border border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition">
                  Save
                </button>

                <button
                  disabled={isApplied}
                  className={`rounded-full ${
                    isApplied
                      ? `bg-green-600 hover:bg-green-700 cursor-not-allowed`
                      : `bg-blue-600 hover:bg-blue-700 cursor-pointer`
                  } px-6 py-2 text-white  font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 transition`}
                >
                  {isApplied ? "Already Applied" : "Apply Now"}
                </button>

                {/* 

                #Another way to apply a conditional rendering:
                
                {isApplied ? (
                  <button 
                  disabled={isApplied}
                  className="cursor-not-allowed rounded-full bg-green-600 px-6 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition">
                    Already Applied
                  </button>
                ) : (
                  <button className="cursor-pointer rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition">
                    Apply Now
                  </button>
                )} 
                 
                 */}
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Job Match Score */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Job Match Score
              </h2>
              <div className="flex flex-col space-y-3 rounded-lg border px-8 py-5 bg-gray-100">
                {item.jobMatchScore.map((score, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                  >
                    <div
                      className={`flex items-center justify-center w-5 h-5 rounded-full ${
                        score.status === "positive"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {score.status === "positive" ? (
                        <FaCheckCircle className="text-lg" />
                      ) : (
                        <FaTimesCircle className="text-lg" />
                      )}
                    </div>
                    <span>{score.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Job Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Job Description
              </h2>
              <p className="text-sm text-gray-700">{item.jobDescription}</p>

              <h2 className="text-xl font-semibold text-gray-900">
                Required Candidate Profile
              </h2>
              <p className="text-sm text-gray-700">
                <strong className="font-medium">Total Years Of Exp:</strong>{" "}
                {item.requiredExperience}
              </p>
              <p className="text-sm text-gray-700">
                <strong className="font-medium">Mandatory Skills:</strong>{" "}
                {item.mandatorySkills}
              </p>

              <h2 className="text-xl font-semibold text-gray-900">
                Additional Details
              </h2>
              <p className="text-sm text-gray-700">
                <strong className="font-medium">Opportunity:</strong>{" "}
                {item.opportunity}
              </p>
              <p className="text-sm text-gray-700">
                <strong className="font-medium">Notice Period: </strong>
                {item.noticePeriod}
              </p>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Job Details */}
            <div className="space-y-4">
              <div className="text-sm text-gray-700">
                <strong className="font-medium">Role:</strong> {item.role}
              </div>
              <div className="text-sm text-gray-700">
                <strong className="font-medium">Industry Type:</strong>{" "}
                {item.industryType}
              </div>
              <div className="text-sm text-gray-700">
                <strong className="font-medium">Department:</strong>{" "}
                {item.department}
              </div>
              <div className="text-sm text-gray-700">
                <strong className="font-medium">Employment Type:</strong>{" "}
                {item.employmentType}
              </div>
              <div className="text-sm text-gray-700">
                <strong className="font-medium">Role Category:</strong>{" "}
                {item.roleCategory}
              </div>
              <div className="text-sm text-gray-700">
                <strong className="font-medium">Education:</strong>{" "}
                {item.education}
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Key Skills */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Key Skills
              </h2>
              <p className="text-sm text-gray-700">
                Skills highlighted with{" "}
                <FaStar className="inline text-yellow-500" /> are preferred key
                skills.
              </p>
              <div className="flex flex-wrap gap-4">
                {item.keySkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-4 py-2 border rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 transition"
                  >
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDescription;
