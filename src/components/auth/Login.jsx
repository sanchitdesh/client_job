import { setLoading, setUser } from "@/redux/authSlice";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.auth);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/auth/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="bg-pattern min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={loginHandler}
          className="mx-auto w-full max-w-lg border border-gray-200 p-10 my-10 rounded-lg bg-white shadow-lg animate-fadeIn"
        >
          <h1 className="font-extrabold text-3xl mb-6 text-gray-800 text-center">
            Login
          </h1>

          <div className="my-4 w-full">
            <Label htmlFor="email" className="text-gray-600">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 custom-input"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="password" className="text-gray-600">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="mt-1 custom-input"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="role" className="text-gray-600">
              Role
            </Label>
            <RadioGroup
              id="role"
              name="role"
              value={loginData.role}
              onValueChange={(value) =>
                setLoginData((prevData) => ({
                  ...prevData,
                  role: value,
                }))
              }
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  id="role-user"
                  value="user"
                  className="cursor-pointer h-5 w-5 focus:ring-[#0394f5]"
                />
                <Label htmlFor="role-user" className="text-gray-600">
                  User
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  id="role-recruiter"
                  value="recruiter"
                  className="cursor-pointer h-5 w-5 focus:ring-[#0394f5]"
                />
                <Label htmlFor="role-recruiter" className="text-gray-600">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            className="w-full my-6 bg-[#0394f5] text-white hover:bg-[#036bbf] transition-colors duration-300 ease-in-out"
          >
            {loading ? (
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>

          <span className="text-sm text-gray-600 text-center block">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#0394f5] hover:underline transition-colors duration-300 ease-in-out"
            >
              Sign Up
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
            transition: border-color 0.3s, box-shadow 0.3s;
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

export default Login;
