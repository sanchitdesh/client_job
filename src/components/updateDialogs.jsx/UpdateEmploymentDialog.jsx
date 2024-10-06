import { ShieldIcon } from "lucide-react";

const UpdateEmploymentDialog = ({
  updateEmploymentDialogToggle,
  employmentData,
}) => {
  const radioOptions = ["Yes", "No"];
  const employmentTypes = ["Full Time", "Part Time", "Contract", "Internship"];
  const years = ["2024", "2023", "2022", "2021", "2020", "2019"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const salaryBreakdowns = [
    "Fixed",
    "Fixed + Variable",
    "Fixed + Variable + Stocks",
    "Fixed + Stocks",
  ];
  const noticePeriods = [
    "15 Days or Less",
    "1 Month",
    "2 Months",
    "3 Months",
    "More than 3 Months",
    "Serving Notice Period",
  ];
  const currencyOptions = ["Rupees", "Dollar"];

  return (
    <div className="fixed inset-0 flex bg-black bg-opacity-50 justify-center py-6">
      <div className="relative max-w-4xl mx-auto flex flex-col space-y-4 rounded-lg shadow-lg bg-white px-6 py-5 overflow-y-auto custom-scrollbar">
        <form className="w-full space-y-6">
          {/* Close Icon */}
          <span
            className="absolute top-4 right-3 hover:text-blue-600 cursor-pointer"
            onClick={updateEmploymentDialogToggle}
          >
            <ShieldIcon size={18} />
          </span>

          {/* Employment Header */}
          <div className="flex space-x-6 justify-between items-center">
            <div className="flex-col">
              <h1 className="text-base font-semibold">Employment</h1>
              <span className="text-sm text-gray-500">
                Details like job title, company name, etc., help employers
                understand your work.
              </span>
            </div>
            <button
              type="button"
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              Delete
            </button>
          </div>

          {/* Current Employment */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">
              Is this your current employment?
            </label>
            <div className="flex space-x-8">
              {radioOptions.map((option, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="currentEmployment"
                    value={option}
                    className="cursor-pointer"
                  />
                  <label className="text-sm cursor-pointer">{option}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Employment Type */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Employment Type</label>
            <select className="w-full rounded-full text-sm px-3 py-2 bg-gray-200 border border-black outline-none">
              {employmentTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Total Experience */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Total Experience</label>
            <div className="flex space-x-4">
              <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
                {years.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year} Year
                  </option>
                ))}
              </select>
              <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
                {months.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">
              Current Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Job Title */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Current Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Joining Date */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Joining Date</label>
            <div className="flex space-x-4">
              <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
                {years.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
                {months.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Salary */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Current Salary</label>
            <div className="flex space-x-4">
              <select className="w-28 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
                {currencyOptions.map((currency, idx) => (
                  <option key={idx} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Salary Amount"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Salary Breakdown */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Salary Breakdown</label>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
              {salaryBreakdowns.map((breakdown, idx) => (
                <option key={idx} value={breakdown}>
                  {breakdown}
                </option>
              ))}
            </select>
          </div>

          {/* Key Skills */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Key Skills</label>
            <input
              type="text"
              placeholder="Skills"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Job Profile */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Job Profile</label>
            <textarea
              placeholder="Describe your job profile"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Notice Period */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Notice Period</label>
            <select className="w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
              {noticePeriods.map((period, idx) => (
                <option key={idx} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>

          {/* Offered Salary */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Offered Salary</label>
            <div className="flex space-x-4">
              <select className="w-28 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none">
                {currencyOptions.map((currency, idx) => (
                  <option key={idx} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Offered Salary"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Offer Designation */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Offer Designation</label>
            <input
              type="text"
              placeholder="Designation"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Next Employer */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Next Employer</label>
            <input
              type="text"
              placeholder="Next Employer"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-200"
              onClick={updateEmploymentDialogToggle}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Custom CSS to hide the scrollbar
const customStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .custom-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Append custom styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = customStyles;
document.head.appendChild(styleSheet);

export default UpdateEmploymentDialog;
