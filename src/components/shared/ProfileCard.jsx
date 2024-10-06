import {
  Briefcase,
  Calendar,
  CreditCard,
  Mail,
  MapPin,
  Pencil,
  Phone,
} from "lucide-react";
import UpdateProfile from "../updateDialogs.jsx/UpdateProfile";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { user } = useSelector((store) => store.auth);
  const [isProfileDialog, setIsProfileDialog] = useState(false);

  const profileDialog = () => {
    setIsProfileDialog(!isProfileDialog);
  };

  // Fallback image URL in case profileImage is not available
  const fallbackImage = "https://via.placeholder.com/150";

  // Utility function to get relative time difference
  const getRelativeTime = (date) => {
    const now = new Date();
    const updatedDate = new Date(date);
    const diffInMs = now - updatedDate;
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    if (diffInYears > 0) return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    if (diffInMonths > 0) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    if (diffInDays > 7) return `${Math.floor(diffInDays / 7)} week${Math.floor(diffInDays / 7) > 1 ? 's' : ''} ago`;
    if (diffInDays > 1) return `${diffInDays} days ago`;
    if (diffInDays === 1) return 'Yesterday';
    return 'Today';
  };

  // Assuming you have a 'profileUpdatedAt' field in the user profile data
  const profileUpdatedAt = user?.profile?.updatedAt || new Date(); // Replace with actual updated date from user profile

  return (
    <div className="bg-white flex flex-col md:flex-row w-full max-w-7xl items-start p-6 md:p-8 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-8">
      {/* Profile Picture */}
      <div className="w-36 h-36 md:w-52 md:h-52 p-[3px] rounded-full overflow-hidden border-4 border-green-400 flex-shrink-0">
        <img
          src={user?.profile?.profileImage || fallbackImage}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col justify-between w-full space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center md:justify-start">
              {user?.name}
              <span className="ml-2 text-gray-500 cursor-pointer hover:text-blue-600 transition-colors">
                <Pencil onClick={profileDialog} size={16} />
              </span>
            </h1>
            <h2 className="text-lg font-semibold text-gray-600">
              Professional 1
            </h2>
            <span className="text-sm text-gray-500">at Capgemini</span>
          </div>
          <span className="text-sm text-gray-400 mt-4 md:mt-0">
            Profile last updated - {getRelativeTime(profileUpdatedAt)}
          </span>
        </div>

        <hr className="border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="flex items-center justify-center md:justify-start text-gray-700">
              <MapPin
                className="mr-2 hover:text-blue-600 text-gray-400"
                size={18}
              />
              Bangalore
            </h2>
            <h2 className="flex items-center justify-center md:justify-start text-gray-700">
              <Briefcase
                className="mr-2 hover:text-blue-600 text-gray-400"
                size={18}
              />
              2 Years 8 Months
            </h2>
            <h2 className="flex items-center justify-center md:justify-start text-gray-700">
              <CreditCard
                className="mr-2 hover:text-blue-600 text-gray-400"
                size={18}
              />
              ₹5,40,000
            </h2>
          </div>

          <div className="hidden md:block w-px h-auto bg-gray-300 mx-8"></div>

          <div className="space-y-4 text-center md:text-left">
            <h2 className="flex items-center justify-center md:justify-start text-gray-700">
              <Phone
                className="mr-2 hover:text-blue-600 text-gray-400"
                size={18}
              />
              {user?.phone}
            </h2>
            <h2 className="flex items-center justify-center md:justify-start text-gray-700">
              <Mail
                className="mr-2 hover:text-blue-600 text-gray-400"
                size={18}
              />
              {user?.email}
            </h2>
            <h2 className="flex items-center justify-center md:justify-start text-gray-700">
              <Calendar
                className="mr-2 hover:text-blue-600 text-gray-400"
                size={18}
              />
              Serving Notice Period
            </h2>
          </div>
        </div>
      </div>

      {isProfileDialog && <UpdateProfile profileDialog={profileDialog} />}
    </div>
  );
};

export default ProfileCard;
