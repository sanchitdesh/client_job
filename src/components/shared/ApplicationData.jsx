import { Check } from 'lucide-react';
import React from 'react';

const ApplicationData = ({ jobTitle, company, reviews, applicationStatus, applicationSentDays }) => {
  const statusSteps = [
    "Applied",
    "Application Reviewed",
    "Interview Scheduled",
    "Awaiting Recruiter Action",
  ];

  const getStatusIndex = (status) => statusSteps.indexOf(status);

  return (
    <div className="flex flex-col space-y-6 rounded-lg shadow-lg border px-6 py-8 bg-white">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <button className="rounded-full border border-gray-300 px-6 py-2 hover:bg-gray-200 text-gray-600">
            Recruiter Actions
          </button>
          <button className="rounded-full border border-gray-300 px-6 py-2 hover:bg-gray-200 text-gray-600">
            Applies on JobHunt
          </button>
        </div>

        <div className="flex flex-col items-start space-y-2 bg-blue-50 rounded-lg px-4 py-4 w-full">
          <span className="text-md font-semibold">{jobTitle}</span>
          <div className="flex flex-col pb-6 lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
            <h2 className="text-md font-medium">{company}</h2>
            <div className="hidden lg:block w-[1px] h-[16px] bg-gray-300" />
            <span className="text-sm text-gray-600">{reviews} Reviews</span>
          </div>
          <button className="rounded-full border border-gray-300 px-6 py-2 bg-white text-gray-600">
            Application sent {applicationSentDays} days ago
          </button>
        </div>
      </div>
      
      <div className="w-full">
        <div className="flex flex-col items-center space-y-2 bg-blue-50 rounded-lg px-4 py-4 w-full">
          <span className="text-md font-semibold">Application Status</span>
          <div className="flex items-center space-x-2 w-full justify-between">
            {statusSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center space-y-2">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      getStatusIndex(applicationStatus) >= index
                        ? "bg-green-500"
                        : "bg-gray-300"
                    } flex items-center justify-center`}
                  >
                    {getStatusIndex(applicationStatus) === index ? (
                      <Check className="text-white w-5 h-5" />
                    ) : (
                      ""
                    )}
                  </div>
                  <span
                    className={`text-xs ${
                      getStatusIndex(applicationStatus) >= index
                        ? "font-semibold text-black"
                        : "text-gray-500"
                    } text-center`}
                  >
                    {step}
                  </span>
                </div>
                {index < statusSteps.length - 1 && (
                  <div
                    className={`h-[2px] w-full ${
                      getStatusIndex(applicationStatus) > index
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3 mt-6">
          <h1 className="text-xl font-bold">Activity on this job</h1>
          <div className="flex space-x-4 border rounded-lg shadow-lg px-4 py-3">
            <div className="flex space-x-2">
              <span>01</span>
              <span>Total Applications</span>
            </div>
            <div className="w-[1px] h-[30px] bg-gray-300" />
            <div className="flex space-x-2">
              <span>00</span>
              <span>Applications viewed by recruiter</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-6">
          <h2 className="text-md font-semibold">What may work for you?</h2>
          <span className="text-sm text-gray-600">
            Follow criteria suggests how well you match with the job.
          </span>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Check
                size={14}
                className="w-4 h-4 rounded-full bg-green-500 text-white"
              />
              <span className="text-sm text-gray-700">Early Applicant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check
                size={14}
                className="w-4 h-4 rounded-full bg-green-500 text-white"
              />
              <span className="text-sm text-gray-700">Industry</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check
                size={14}
                className="w-4 h-4 rounded-full bg-green-500 text-white"
              />
              <span className="text-sm text-gray-700">Key Skills</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check
                size={14}
                className="w-4 h-4 rounded-full bg-green-500 text-white"
              />
              <span className="text-sm text-gray-700">Work Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationData;
