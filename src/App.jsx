import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import Loader from "./components/shared/Loader";
import Navbar from "./components/shared/Navbar";

//Lazy Imports
const MyApplyJobs = lazy(() => import("./pages/MyApplyJobs"));
const Home = lazy(() => import("./pages/Home"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Profile = lazy(() => import("./pages/Profile"));
const Browse = lazy(() => import("./pages/Browse"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./components/auth/Login"));
const Signup = lazy(() => import("./components/auth/Signup"));
const JobDescription = lazy(() => import("./components/shared/JobDescription"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/description/:id" element={<JobDescription />} />
            <Route path="/myApply" element={<MyApplyJobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
