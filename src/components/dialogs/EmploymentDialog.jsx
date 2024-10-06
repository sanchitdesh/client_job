import { ShieldClose } from "lucide-react";

const EmploymentDialog = ({ employmentDialogToggle }) => {
  const radioOptions = [
    {
      label: "Is this your current employment?",
      name: "current-employment",
      options: ["Yes", "No"],
    },
    {
      label: "Employment Type",
      name: "employment-type",
      options: ["Full Time", "Internship"],
    },
  ];

  const experienceOptions = {
    years: ["0 Years", "1 Year", "2 Years", "3 Years", "4 Years", "5 Years"],
    months: [
      "0 Months",
      "1 Month",
      "2 Months",
      "3 Months",
      "4 Months",
      "5 Months",
      "6 Months",
      "7 Months",
      "8 Months",
      "9 Months",
      "10 Months",
      "11 Months",
      "12 Months",
    ],
  };

  const selectOptions = {
    salaryCurrency: ["Rupees", "Dollars"],
    noticePeriod: [
      "15 Days or less",
      "1 Month",
      "2 Months",
      "3 Months or More",
    ],
    joiningYear: ["2020", "2021", "2022", "2023", "2024"],
    joiningMonth: [
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
    ],
  };

  return (
    <div className="fixed bg-black bg-opacity-50  inset-0 z-50 flex items-start justify-center overflow-y-auto">
      <div className="relative max-w-4xl mx-auto mt-10">
        <div
          className="relative flex flex-col space-y-6 bg-white rounded-lg shadow-lg px-8 py-6 w-[700px] max-h-[90vh] overflow-y-auto"
          style={{
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            msOverflowStyle: "none", // Hide scrollbar in IE/Edge
          }}
        >
          <button className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 transition-colors">
            <ShieldClose onClick={employmentDialogToggle} size={20} />
          </button>
          {/* Form */}
          <form>
            <div className="flex flex-col space-y-8">
              {/* Header */}
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl font-semibold text-gray-800">
                  Employment
                </h1>
                <span className="text-sm text-gray-500">
                  Details like job title, company name, etc., help employers
                  understand your work.
                </span>
              </div>

              {/* Radio Groups */}
              {radioOptions.map((radio, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <span className="font-semibold text-gray-700">
                    {radio.label}
                  </span>
                  <div className="flex items-center space-x-8">
                    {radio.options.map((option, idx) => (
                      <label key={idx} className="flex items-center space-x-1">
                        <input
                          type="radio"
                          name={radio.name}
                          className="text-blue-600"
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {/* Total Experience */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Total Experience
                </label>
                <div className="flex space-y-2 sm:space-y-0 sm:space-x-6 flex-col sm:flex-row">
                  <select className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600">
                    {experienceOptions.years.map((year, idx) => (
                      <option key={idx} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <select className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600">
                    {experienceOptions.months.map((month, idx) => (
                      <option key={idx} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Input Fields */}
              {[
                {
                  label: "Current Company Name",
                  placeholder: "Type Your Organization",
                },
                {
                  label: "Current Job Title",
                  placeholder: "Type Your Job Title",
                },
                { label: "Skills Used", placeholder: "Type Your Skills" },
              ].map((field, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600"
                  />
                </div>
              ))}

              {/* Joining Date */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Joining Date
                </label>
                <div className="flex space-y-2 sm:space-y-0 sm:space-x-6 flex-col sm:flex-row">
                  <select className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600">
                    {selectOptions.joiningYear.map((year, idx) => (
                      <option key={idx} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <select className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600">
                    {selectOptions.joiningMonth.map((month, idx) => (
                      <option key={idx} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Current Salary */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Current Salary
                </label>
                <div className="flex space-y-2 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
                  <select className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600">
                    {selectOptions.salaryCurrency.map((currency, idx) => (
                      <option key={idx} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="E.g - 4,50,000"
                    className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Type here..."
                  className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600 h-32"
                />
              </div>

              {/* Notice Period */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Notice Period
                </label>
                <select className="border border-gray-300 rounded-lg w-full px-3 py-2 text-sm text-gray-700 focus:border-blue-600">
                  {selectOptions.noticePeriod.map((period, idx) => (
                    <option key={idx} value={period}>
                      {period}
                    </option>
                  ))}
                </select>
              </div>

              {/* Save and Cancel Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  onClick={employmentDialogToggle}
                  className="text-sm bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={employmentDialogToggle}
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmploymentDialog;
