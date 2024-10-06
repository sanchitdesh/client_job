import ProfileCard from "../components/shared/ProfileCard";
import ProfileData from "../components/shared/ProfileData";

const Profile = () => {
  return (
    <div className="bg-slate-100 py-8">
      <div className="container mx-auto max-w-7xl flex flex-col space-y-8 px-6 md:px-12">
        <ProfileCard />
        <ProfileData />
      </div>
    </div>
  );
};

export default Profile;
