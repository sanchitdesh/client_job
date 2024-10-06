import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        <div className="container mx-auto py-12 px-4 md:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our mission, vision, and the team behind JobPortal. We
              are dedicated to connecting job seekers with their dream jobs and
              helping companies find the best talent.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At JobPortal, our mission is to connect job seekers with their
                dream jobs and help companies find the best talent. We aim to
                provide a seamless and efficient platform that bridges the gap
                between employers and job seekers.
              </p>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to be the leading job portal globally, renowned
                for innovation, reliability, and excellence in matching talent
                with opportunities. We strive to empower professionals and
                businesses to achieve their goals and contribute to economic
                growth.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Example team member */}
              {[
                {
                  name: "Jane Doe",
                  title: "CEO",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "John Smith",
                  title: "CTO",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "Emily Davis",
                  title: "CFO",
                  img: "https://via.placeholder.com/150",
                },
                {
                  name: "Michael Brown",
                  title: "COO",
                  img: "https://via.placeholder.com/150",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                    src={member.img}
                    alt={member.name}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                Contact Us
              </h2>
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 flex items-center justify-center md:justify-start">
                    <FaMapMarkerAlt className="mr-2" />
                    123 Job Street, City, State, 12345
                  </p>
                </div>
                <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-700 flex items-center justify-center md:justify-start">
                    <FaEnvelope className="mr-2" />
                    info@jobportal.com
                  </p>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-700 flex items-center justify-center md:justify-start">
                    <FaPhone className="mr-2" />
                    (123) 456-7890
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
