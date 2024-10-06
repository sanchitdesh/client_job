import ApplicationData from "@/components/shared/ApplicationData";
import { useState } from "react";

const MyApplyJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const dummyApplications = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "Capgemini",
      reviews: 179,
      applicationStatus: "Awaiting Recruiter Action",
      applicationSentDays: 3,
    },
    {
      id: 2,
      jobTitle: "Backend Developer",
      company: "Google",
      reviews: 200,
      applicationStatus: "Application Reviewed",
      applicationSentDays: 2,
    },
    {
      id: 3,
      jobTitle: "Full Stack Developer",
      company: "Facebook",
      reviews: 250,
      applicationStatus: "Interview Scheduled",
      applicationSentDays: 1,
    },
    {
      id: 4,
      jobTitle: "UI/UX Designer",
      company: "Apple",
      reviews: 300,
      applicationStatus: "Applied",
      applicationSentDays: 5,
    },

    {
      id: 5,
      jobTitle: "Frontend Developer",
      company: "Capgemini",
      reviews: 179,
      applicationStatus: "Awaiting Recruiter Action",
      applicationSentDays: 3,
    },
    {
      id: 6,
      jobTitle: "Backend Developer",
      company: "Google",
      reviews: 200,
      applicationStatus: "Application Reviewed",
      applicationSentDays: 2,
    },
    {
      id: 7,
      jobTitle: "Full Stack Developer",
      company: "Facebook",
      reviews: 250,
      applicationStatus: "Interview Scheduled",
      applicationSentDays: 1,
    },
    {
      id: 8,
      jobTitle: "UI/UX Designer",
      company: "Apple",
      reviews: 300,
      applicationStatus: "Applied",
      applicationSentDays: 5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Job Cards */}
        <div className="w-full lg:w-3/5  space-y-4 h-[calc(100vh-12rem)] overflow-y-auto scrollbar-hidden">
          {dummyApplications.map((app) => (
            <div
              key={app.id}
              className={`flex items-center justify-between  p-6 border rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform  hover:bg-gray-100 ${
                selectedJob?.id === app.id ? "bg-blue-50 border-blue-500" : ""
              }`}
              onClick={() => setSelectedJob(app)}
            >
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900">
                  {app.jobTitle}
                </h2>
                <span className="text-sm text-gray-600">{app.company}</span>
              </div>
              <span className="text-sm text-gray-500">
                {app.applicationStatus}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side - Job Details */}
        <div className="w-full lg:w-2/5 pl-6">
          {selectedJob ? (
            <ApplicationData
              jobTitle={selectedJob.jobTitle}
              company={selectedJob.company}
              reviews={selectedJob.reviews}
              applicationStatus={selectedJob.applicationStatus}
              applicationSentDays={selectedJob.applicationSentDays}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500">
                Select a job to view details
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyApplyJobs;
