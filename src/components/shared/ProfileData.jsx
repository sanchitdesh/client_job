import { quickLinks } from "@/constants";
import axios from "axios";
import { Download, LucideDelete, Pencil } from "lucide-react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import EducationDialog from "../dialogs/EducationDialog";
import EmploymentDialog from "../dialogs/EmploymentDialog";
import ProjectDialog from "../dialogs/ProjectDialog";
import { setUser } from "@/redux/authSlice";
import UpdateEmploymentDialog from "../updateDialogs.jsx/UpdateEmploymentDialog";

const ProfileData = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const handleNavigation = (route) => {
    navigate(route);
  };

  // useState  for update
  const [isUpdateEmploymentDialog, setIsUpdateEmploymentDialog] = useState();

  // useState
  const [isProjectDialogToggle, setIsProjectDialogToggle] = useState();
  const [isEducationDialog, setIsEducationDialog] = useState();
  const [isEmploymentDialog, setIsEmploymentDialog] = useState();
  const [formData, setFormData] = useState({
    resume: user?.profile?.resume,
    resumeOriginalName: user?.profile?.resumeOriginalName,
  });

  const projectDialogToggle = () => {
    setIsProjectDialogToggle(!isProjectDialogToggle);
  };

  const employmentDialogToggle = () => {
    setIsEmploymentDialog(!isEmploymentDialog);
  };

  const educationDialogToggle = () => {
    setIsEducationDialog(!isEducationDialog);
  };

  // Function for update Dialog
  const updateEmploymentDialogToggle = () => {
    setIsUpdateEmploymentDialog(!isUpdateEmploymentDialog);
  };

  const handleButtonClick = () => {
    // Trigger the file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFormData((prevData) => ({
        ...prevData,
        resume: selectedFile,
        resumeOriginalName: selectedFile.name,
      }));

      const data = new FormData();
      data.append("file", selectedFile); // Ensure the field name matches the one used in multer middleware
      data.append("resumeOriginalName", selectedFile.name);

      try {
        const response = await axios.put(
          "http://localhost:3000/api/v1/user/profile/update",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
        if (response.data.success) {
          dispatch(setUser(response.data.updatedUser));
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error during file upload:", error);
        toast.error(
          error.response?.data?.message ||
            "An error occurred during file upload."
        );
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Quick Links */}
        <aside className="w-full md:max-w-xs border shadow-lg bg-white rounded-xl p-6">
          <div className="space-y-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(link.route)}
                className="flex items-center justify-between w-full px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-full transition duration-200"
              >
                <span className="text-[15px] text-gray-500 text-left">
                  {link.title}
                </span>
                <span className="text-[15px] text-blue-600 font-semibold">
                  {link.updateData}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* User Information */}
        <div className="flex-grow flex flex-col space-y-6 w-full">
          {/* Resume Section */}
          <div className="flex flex-col space-y-4">
            <div className="rounded-lg border shadow-lg p-6 bg-white">
              {/* Title */}
              <h1 className="text-lg font-semibold">Resume</h1>

              {/* File Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-6 space-y-4 sm:space-y-0">
                <div className="flex flex-col">
                  <h2 className="text-md font-medium">
                    {formData.resumeOriginalName
                      ? formData.resumeOriginalName
                      : "No resume uploaded"}
                  </h2>
                  <span className="text-sm text-gray-400">
                    Uploaded on{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <span className="w-10 h-10 text-blue-600 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition duration-200">
                    <Download size={18} />
                  </span>
                  <span className="w-10 h-10 text-blue-600 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition duration-200">
                    <LucideDelete size={18} />
                  </span>
                </div>
              </div>

              {/* Update Resume */}
              <div className="flex items-center justify-center border border-dotted rounded-xl py-8">
                <div className="flex items-center flex-col space-y-2 text-center">
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    accept=".doc, .docx, .rtf, .pdf"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  {/* Visible Button */}
                  <button
                    onClick={handleButtonClick}
                    className="text-md rounded-full border border-blue-600 py-2 px-4 text-blue-600 hover:bg-blue-50 transition duration-200"
                  >
                    Update Resume
                  </button>

                  <span className="text-sm text-gray-500">
                    Supported Formats: doc, docx, rtf, pdf, up to 2 MB
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Employment Section */}
          <div className="w-full flex flex-col space-y-6 border rounded-xl px-6 py-6 shadow-lg bg-white">
            {isEmploymentDialog && (
              <EmploymentDialog
                employmentDialogToggle={employmentDialogToggle}
              />
            )}

            {isUpdateEmploymentDialog && (
              <UpdateEmploymentDialog
                updateEmploymentDialogToggle={updateEmploymentDialogToggle}
              />
            )}
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold text-gray-800">Employment</h1>
              <button
                onClick={employmentDialogToggle}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Add Employment
              </button>
            </div>

            {/* Employment Details */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-start">
                <h2 className="text-md font-semibold text-gray-700 flex items-center">
                  Professional
                  <Pencil
                    onClick={updateEmploymentDialogToggle}
                    size={14}
                    className="text-gray-400 ml-2 hover:text-blue-600 cursor-pointer"
                  />
                </h2>
                <span className="text-sm text-gray-500">Capgemini</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                <span className="text-sm text-gray-600">Full-time</span>
                <div className="hidden md:block w-[1px] h-5 bg-gray-300" />
                <span className="text-sm text-gray-600">
                  Dec 2021 to Present (2 years 9 months)
                </span>
              </div>

              <span className="text-sm text-gray-500 font-medium">
                Serving Notice Period
              </span>

              <p className="text-sm text-gray-700 leading-relaxed">
                Professional Software Engineer at Capgemini with 2.8 years of
                hands-on experience as a React JS Developer. Demonstrates strong
                expertise in JavaScript, React JS, Next.js, Node.js, MongoDB,
                HTML, CSS, and Tailwind CSS. Proven track record of delivering
                high-quality solutions while working with the Kohler client,
                contributing to successful project outcomes. Adept at creating
                responsive and intuitive user interfaces, optimizing application
                performance, and collaborating effectively within a team
                environment.
              </p>

              <div className="text-sm font-medium text-gray-700">
                Top 5 key skills:
                <span className="font-normal ml-1">
                  JavaScript, React.js, Next.js, Node.js, MERN Stack, MongoDB,
                  HTML, CSS, Redux, Context API, GitHub
                </span>
              </div>
            </div>
          </div>

          {/* Education Dialog */}

          {/* Education Section */}
          <div className="w-full flex flex-col space-y-4 border rounded-lg shadow-lg px-6 py-4 bg-white sm:px-8 sm:py-6">
            {/* Education Dialog */}
            {isEducationDialog && (
              <EducationDialog educationDialogToggle={educationDialogToggle} />
            )}
            <div className="flex justify-between items-start">
              <h1 className="text-sm sm:text-base font-semibold">Education</h1>
              <button
                onClick={educationDialogToggle}
                className="text-blue-600 font-semibold text-sm sm:text-base"
              >
                Add Education
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              <p className="font-medium text-sm sm:text-base">
                B.Tech/B.E. Electronics/Telecommunication
              </p>
              <span className="text-xs sm:text-sm text-gray-500">
                Savitribai Phule Pune University
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm text-gray-400">
                  B.Tech/B.E. Electronics/Telecommunication
                </span>
                <div className="h-[14px] w-[1px] bg-gray-400" />
                <span className="text-xs sm:text-sm text-gray-400">
                  Full Time
                </span>
              </div>
            </div>

            <button
              onClick={educationDialogToggle}
              className="text-blue-600  flex items-start font-semibold text-sm sm:text-base"
            >
              Add Education
            </button>
          </div>

          {/* Project Sections */}

          <div className="w-full flex flex-col px-8 py-6 space-y-4 rounded-lg shadow-lg border bg-white">
            {/* Project Dialog */}
            {isProjectDialogToggle && (
              <ProjectDialog projectDialogToggle={projectDialogToggle} />
            )}

            <div className="flex justify-between items-center">
              <h1 className="text-md font-bold">Projects</h1>
              <button
                onClick={projectDialogToggle}
                className="text-blue-600 font-medium"
              >
                Add Project
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <h2 className="text-md font-semibold">
                Job Hunt - Job Portal Web Application
              </h2>
              <Pencil size={14} className="hover:text-blue-600" />
            </div>

            <div className="flex flex-col items-start space-y-1">
              <h3 className="text-md font-normal">Self Work (Offsite)</h3>
              <span className="text-md text-gray-400">
                Jul 2024 to Present (Full Time)
              </span>
              <p className="text-left text-sm text-gray-500 flex">
                Developed a comprehensive Job Portal web application using the
                MERN stack (MongoDB, Express, React.js, Node.js). The
                application features: Authentication: Secure login with bcryptjs
                and JSON Web Tokens (JWT), allowing users to update or delete
                their profiles and apply for jobs. Job Management: Users can
                create job applications and recruiters can create companies,
                jobs, and categories. Search and Filtering: Search jobs by title
                or keywords, and filter results by location and title. User and
                Recruiter Roles: Special access for users and recruiters,
                enabling distinct functionalities for each role. Responsive
                Design: A user-friendly interface with ongoing UI development.
                The backend is fully implemented, with the UI in progress and
                deployment coming soon. A link to the live project will be
                shared upon completion
              </p>
            </div>
          </div>

          {/* Links */}

          <div className="w-full flex flex-col px-4 md:px-8 py-6 space-y-4 rounded-lg shadow-lg border bg-white">
            <div className="flex flex-col space-y-2">
              <h1 className="text-lg md:text-md font-semibold">
                Accomplishment
              </h1>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-sm md:text-md font-semibold">LinkedIn</h2>
                  <Pencil
                    size={14}
                    className="text-sm cursor-pointer hover:text-blue-600"
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/sanchit-deshmukh-2268871a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600  font-normal whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  https://www.linkedin.com/in/sanchit-deshmukh-2268871a1/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
