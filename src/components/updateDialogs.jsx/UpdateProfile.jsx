import { setLoading, setUser } from "@/redux/authSlice";
import axios from "axios";
import { Loader2, ShieldClose } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const MONTHS = [
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
const DATES = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = ["2024", "2025"];
const SALARY_BREAKDOWN = [
  "Fixed",
  "Fixed + Variable",
  "Fixed + Variable + Stocks",
  "Fixed + Stocks",
];
const NOTICE_PERIODS = [
  "15 Days or Less",
  "1 Month",
  "2 Months",
  "3 Months",
  "More than 3 Months",
  "Serving Notice Period",
];

const UpdateProfile = ({ profileDialog }) => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({
    name: user?.name,
    workStatus: "Experienced",
    experienceYears: "0 Year",
    experienceMonths: "Jan",
    currentSalary: "",
    salaryBreakdown: "",
    location: "",
    phone: user?.phone,
    email: user?.email,
    noticePeriod: "",
    expectedLastWorkingDay: {
      year: "2024",
      month: "Jan",
      date: 1,
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      expectedLastWorkingDay: {
        ...prevData.expectedLastWorkingDay,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("workStatus", formData.workStatus);
    data.append("experienceYears", formData.experienceYears);
    data.append("experienceMonths", formData.experienceMonths);
    data.append("currentSalary", formData.currentSalary);
    data.append("salaryBreakdown", formData.salaryBreakdown);
    data.append("location", formData.location);
    data.append("noticePeriod", formData.noticePeriod);
    data.append(
      "expectedLastWorkingDay[year]",
      formData.expectedLastWorkingDay.year
    );
    data.append(
      "expectedLastWorkingDay[month]",
      formData.expectedLastWorkingDay.month
    );
    data.append(
      "expectedLastWorkingDay[date]",
      formData.expectedLastWorkingDay.date
    );

    try {
      dispatch(setLoading(true));
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
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      dispatch(setLoading(false));
    }
    profileDialog();
    console.log(formData);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-y-hidden">
      <div className="relative max-w-4xl w-full h-[90vh] px-6 py-3 bg-white rounded-lg shadow-lg scrollbar-hidden overflow-y-auto">
        {/* Close Button */}
        <div className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-blue-600">
          <ShieldClose size={24} onClick={profileDialog} />
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Update Profile
            </h2>
            <p className="text-gray-500">
              Update your profile details to reflect accurate information.
            </p>
          </div>

          {/* Name */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
              className="rounded-lg border border-gray-300 w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Employment Info */}
          <div className="flex flex-col space-y-2">
            <span className="font-semibold text-gray-700">
              Professional 1 at Capgemini
            </span>
            <span className="text-gray-500">
              To edit, go to Employment section. Please remove your current
              employment if you want to mark yourself as fresher.
            </span>
          </div>

          {/* Work Status */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Work Status
            </label>
            <span className="text-gray-500">
              We will personalize your Naukri experience based on this.
            </span>
            <div className="flex space-x-8 mt-2">
              {["Fresher", "Experienced"].map((status) => (
                <label key={status} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="workStatus"
                    value={status}
                    checked={formData.workStatus === status}
                    onChange={handleInputChange}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="text-gray-600">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Total Experience */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Total Experience
            </label>
            <span className="text-gray-500">
              This helps recruiters know your years of experience.
            </span>
            <div className="flex space-x-4 mt-2">
              <select
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none w-1/2 focus:ring-2 focus:ring-blue-500"
              >
                {YEARS.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                name="experienceMonths"
                value={formData.experienceMonths}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none w-1/2 focus:ring-2 focus:ring-blue-500"
              >
                {MONTHS.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Current Salary */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Current Salary
            </label>
            <span className="text-gray-500">
              Salary information helps us find relevant jobs for you.
            </span>
            <div className="flex space-x-4 mt-2">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none w-1/4 focus:ring-2 focus:ring-blue-500"
              >
                <option value="Rupees">Rupees</option>
                <option value="Dollar">Dollar</option>
              </select>
              <input
                type="text"
                name="currentSalary"
                value={formData.currentSalary}
                onChange={handleInputChange}
                placeholder="Enter Amount"
                className="rounded-lg border border-gray-300 w-3/4 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Salary Breakdown */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Salary Breakdown
            </label>
            <span className="text-gray-500">
              We will personalize your Naukri experience based on this.
            </span>
            <select
              name="salaryBreakdown"
              value={formData.salaryBreakdown}
              onChange={handleInputChange}
              className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SALARY_BREAKDOWN.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter Location"
              className="rounded-lg border border-gray-300 w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Phone Number"
              className="rounded-lg border border-gray-300 w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              className="rounded-lg border border-gray-300 w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notice Period */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Notice Period
            </label>
            <span className="text-gray-500">
              Help recruiters plan for your availability.
            </span>
            <select
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleInputChange}
              className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none focus:ring-2 focus:ring-blue-500"
            >
              {NOTICE_PERIODS.map((period, idx) => (
                <option key={idx} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>

          {/* Last Working Day */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-semibold text-gray-700">
              Expected Last Working Day
            </label>
            <span className="text-gray-500">
              Let recruiters know when you'll be available.
            </span>
            <div className="flex space-x-4 mt-2">
              <select
                name="year"
                value={formData.expectedLastWorkingDay.year}
                onChange={handleDateChange}
                className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none w-1/3 focus:ring-2 focus:ring-blue-500"
              >
                {YEARS.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                name="month"
                value={formData.expectedLastWorkingDay.month}
                onChange={handleDateChange}
                className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none w-1/3 focus:ring-2 focus:ring-blue-500"
              >
                {MONTHS.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="date"
                value={formData.expectedLastWorkingDay.date}
                onChange={handleDateChange}
                className="rounded-lg border border-gray-300 px-3 py-1.5 outline-none w-1/3 focus:ring-2 focus:ring-blue-500"
              >
                {DATES.map((date, idx) => (
                  <option key={idx} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={loading}
            >
              {loading ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                "Update Profile"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
