import { ShieldCloseIcon } from "lucide-react";

const formFields = [
  {
    label: "Project title",
    type: "input",
    placeholder: "Enter project title",
  },
  {
    label: "Tag this project with your employment/education",
    type: "select",
    options: [
      "Professional 1  - Capgemini",
      "UG - Electronics/Telecommunication",
    ],
    placeholder: "Select employment/education",
  },
  {
    label: "Client",
    type: "input",
    placeholder: "Enter client name",
  },
  {
    label: "Project Status",
    type: "radio",
    options: ["In Progress", "Finished"],
  },
  {
    label: "Worked from",
    type: "duration-group",
    fields: [
      {
        type: "duration",
        options: Array.from({ length: 10 }, (_, i) => 2000 + i),
        placeholder: "Select year",
      },
      {
        type: "duration",
        options: [
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
        placeholder: "Select month",
      },
    ],
  },
  {
    label: "Details of project",
    type: "textarea",
    placeholder: "Type here",
  },
  {
    label: "Project location",
    type: "input",
    placeholder: "Enter project location",
  },
  {
    label: "Project site",
    type: "radio",
    options: ["Offsite", "Onsite"],
  },
  {
    label: "Nature of employment",
    type: "radio",
    options: ["Full time", "Part time", "Contractual"],
  },
  {
    label: "Team size",
    type: "select",
    options: [1, 2, 3, 4, 5, 6],
    placeholder: "Select team size",
  },
  {
    label: "Role",
    type: "select",
    options: [
      "Domain Expert",
      "Sr. Project Leader",
      "Solution Architect",
      "Quality Analyst",
      "Database Architect / DBA",
      "Network / System Administrator",
    ],
    placeholder: "Select Role",
  },
  {
    label: "Role description",
    type: "textarea",
    placeholder: "Type here...",
  },
  {
    label: "Skills used",
    type: "input",
    placeholder: "Enter skills used",
  },
];

const ProjectDialog = ({ projectDialogToggle }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative max-w-4xl mx-auto">
        <div className="container flex flex-col space-y-6 rounded-lg border px-8 py-6 bg-white w-[700px] max-h-[90vh] overflow-y-auto">
          <div className="absolute top-3 right-3">
            <ShieldCloseIcon
              onClick={projectDialogToggle}
              size={18}
              className="hover:text-blue-600 cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">Project</h1>
            <p className="text-sm text-gray-400">
              Stand out for employers by adding details about projects you have
              done in college, internships, or at work.
            </p>
          </div>

          <form className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index} className="text-sm flex flex-col space-y-2">
                <label className="text-sm font-medium">{field.label}</label>

                {field.type === "input" && (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 w-full outline-none focus:border-blue-500"
                  />
                )}

                {field.type === "select" && (
                  <div className="rounded-lg border border-gray-300 px-3 py-1.5">
                    <select className="text-sm text-gray-700 w-full outline-none">
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      {field.options.map((option, idx) => (
                        <option value={option} key={idx}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {field.type === "radio" && (
                  <div className="flex space-x-4">
                    {field.options.map((option, idx) => (
                      <label key={idx} className="inline-flex items-center">
                        <input
                          type="radio"
                          name={field.label}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {field.type === "duration-group" && (
                  <div className="flex space-x-4">
                    {field.fields.map((durationField, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none"
                      >
                        <select className="text-sm text-gray-700 w-[283px]">
                          <option value="" disabled>
                            {durationField.placeholder}
                          </option>
                          {durationField.options.map((option, idx) => (
                            <option value={option} key={idx}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}

                {field.type === "textarea" && (
                  <textarea
                    cols="30"
                    rows="5"
                    placeholder={field.placeholder}
                    className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 w-full outline-none focus:border-blue-500"
                  ></textarea>
                )}
              </div>
            ))}

            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={projectDialogToggle}
                className="text-blue-600 rounded-full bg-gray-300 px-5 py-2.5 hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={projectDialogToggle}
                className="text-white rounded-full bg-blue-600 px-5 py-2.5 hover:bg-blue-700 transition-colors"
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

export default ProjectDialog;
