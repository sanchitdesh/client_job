import { ShieldCloseIcon } from "lucide-react";

const EducationDialog = ({ educationDialogToggle }) => {
  const formFields = [
    {
      label: "Education",
      type: "select",
      options: [
        "Doctorate/PhD",
        "Masters/Post-Graduation",
        "Graduation/Diploma",
        "12th",
      ],
      placeholder: "Select Education",
    },
    {
      label: "Institute/University",
      type: "input",
      placeholder: "Select University/Institute",
    },
    {
      label: "Course",
      type: "input",
      placeholder: "Select Course",
    },
    {
      label: "Course Type",
      type: "radio",
      options: ["Full time", "Part time", "Correspondence/Distance learning"],
    },
    {
      label: "Course duration",
      type: "duration",
      options: Array.from({ length: 10 }, (_, i) => 2000 + i), // Example years
    },
    {
      label: "Grading System",
      type: "select",
      options: [
        "Scale 10 Grading System",
        "Scale 4 Grading System",
        "% Marks of 100 Maximum",
        "Course Requires a Pass",
      ],
    },
    {
      label: "Marks",
      type: "input",
      placeholder: "Enter Marks",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-hidden">
      <div className="relative max-w-4xl mx-auto my-6 overflow-hidden">
        <div
          className="relative flex flex-col space-y-6 bg-white rounded-lg shadow-lg px-8 py-6 w-[700px] max-h-[90vh] overflow-auto"
          style={{
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            msOverflowStyle: "none", // Hide scrollbar in IE/Edge
          }}
        >
          {/* Dialog close icon */}
          <div className="absolute top-4 text-black right-4 flex hover:text-blue-600">
            <ShieldCloseIcon onClick={educationDialogToggle} size={18} />
          </div>

          {/* Header */}
          <div className="flex flex-col mb-4">
            <h1 className="text-md font-bold">Education</h1>
            <p className="text-sm text-gray-500">
              Details like course, university, and more, help recruiters identify your educational background
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <label className="text-sm font-medium">{field.label}</label>
                {field.type === "input" && (
                  <div className="rounded-lg border border-gray-300 px-2 py-1.5">
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="px-2 text-sm text-gray-400 py-1 outline-none w-full"
                    />
                  </div>
                )}
                {field.type === "select" && (
                  <div className="rounded-lg border border-gray-300 px-2 py-1.5">
                    <select className="w-full text-sm text-gray-400 px-2 py-1 outline-none">
                      {field.options.map((option, idx) => (
                        <option key={idx} value="">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {field.type === "radio" && (
                  <div className="flex space-x-6">
                    {field.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input type="radio" name="course-type" />
                        <label className="text-sm text-gray-400">{option}</label>
                      </div>
                    ))}
                  </div>
                )}
                {field.type === "duration" && (
                  <div className="flex space-x-2 items-center">
                    <div className="rounded-lg border text-gray-300 px-3 py-1.5">
                      <select className="w-[250px] text-sm text-gray-400">
                        {field.options.map((year, idx) => (
                          <option key={idx} value="">
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <h2 className="font-semibold text-sm">To</h2>
                    <div className="rounded-lg border text-gray-300 px-3 py-1.5">
                      <select className="w-[250px] text-sm text-gray-400">
                        {field.options.map((year, idx) => (
                          <option key={idx} value="">
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Buttons */}
            <div className="flex justify-end w-full space-x-2 mt-4">
              <button
                type="button"
                onClick={educationDialogToggle}
                className="text-blue-600 rounded-full bg-gray-300 px-6 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-full hover:bg-blue-500 px-6 py-2"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EducationDialog;
