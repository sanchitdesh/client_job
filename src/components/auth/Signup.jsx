import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user",
    file: null,
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(setLoading(true));
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone", userData.phone);
      formData.append("password", userData.password);
      formData.append("role", userData.role);
      if (userData.file) {
        formData.append("file", userData.file);
      }

      const response = await axios.post(
        "http://localhost:3000/api/v1/user/auth/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An unexpected error occurred");
      toast.error(
        error.response?.data?.message || "An unexpected error occurred"
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="bg-pattern min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-lg border border-gray-200 p-8 my-10 rounded-lg bg-white shadow-lg animate-fadeIn"
        >
          <h1 className="font-extrabold text-3xl mb-6 text-gray-800 text-center">
            Sign Up
          </h1>

          <div className="my-4 w-full">
            <Label htmlFor="name" className="text-gray-600">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
              className="mt-1 custom-input"
            />
          </div>

          <div className="my-4">
            <Label htmlFor="email" className="text-gray-600">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
              className="mt-1 custom-input"
            />
          </div>

          <div className="my-4">
            <Label htmlFor="phone" className="text-gray-600">
              Phone
            </Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              required
              className="mt-1 custom-input"
            />
          </div>

          <div className="my-4">
            <Label htmlFor="password" className="text-gray-600">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
              className="mt-1 custom-input"
            />
          </div>

          <div className="my-4">
            <Label htmlFor="role" className="text-gray-600">
              Role
            </Label>
            <RadioGroup
              id="role"
              value={userData.role}
              onValueChange={(value) =>
                setUserData((prevData) => ({ ...prevData, role: value }))
              }
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  id="role-user"
                  value="user"
                  className="cursor-pointer focus:ring-[#0394f5]"
                />
                <Label htmlFor="role-user" className="text-gray-600">
                  User
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  id="role-recruiter"
                  value="recruiter"
                  className="cursor-pointer focus:ring-[#0394f5]"
                />
                <Label htmlFor="role-recruiter" className="text-gray-600">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="my-4">
            <Label htmlFor="file" className="text-gray-600">
              Profile Picture
            </Label>
            <Input
              accept="image/*"
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              className="cursor-pointer w-full mt-2 focus:border-[#0394f5] focus:ring-[#0394f5]"
            />
          </div>

          <Button
            type="submit"
            className="w-full my-6 bg-[#0394f5] text-white hover:bg-[#036bbf] transition-colors duration-300 ease-in-out"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="mr-2 w-6 h-6 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </Button>

          {error && (
            <p className="text-red-500 text-center text-sm">{error}</p>
          )}

          <span className="text-sm text-gray-600 text-center block">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#0394f5] hover:underline transition-colors duration-300 ease-in-out"
            >
              Login
            </Link>
          </span>
        </form>
      </div>

      <style>
        {`
          .bg-pattern {
            background: linear-gradient(to right, #f8fafc, #eef2f7);
            background-size: 20px 20px;
            background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, rgba(255, 255, 255, 0) 1px);
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .custom-input {
            border: 1px solid #e5e7eb;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .custom-input:focus {
            border-color: #0394f5;
            outline: none;
            box-shadow: 0 0 0 2px rgba(3, 148, 245, 0.3);
          }

          .custom-input:hover {
            border-color: #d1d5db;
          }
        `}
      </style>
    </>
  );
};

export default Signup;
