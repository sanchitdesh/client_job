import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Fullstack Developer",
  "Mern Stack Developer",
  "Mean Stack Developer",
  "Angular Developer",
  "Java Developer",
  "Informatica Developer",
];

const CategoryCarousel = () => {
  // Use Ref
  const carouselRef = useRef(null);

  // ScrollLeft

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
    // ScrollRight

    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };
  

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Featured Categories
      </h1>
      <div className="relative max-w-4xl mx-auto flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all duration-300 z-10"
        >
          <FaArrowLeft />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden space-x-4 scrollbar-hide p-2 mx-14"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-xl font-semibold text-center text-gray-800">
                {category}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all duration-300 z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
