import { Link } from "react-router-dom";
import {categories} from "../../assets/data"
import Title from "../Common/Title/Title";

const CategorySection = () => {
  return (
    <section className="max-padd-container bg-white py-14 sm:py-16 lg:py-20">
      <div>
        {/* Section Header */}
        <Title title="Category" title2="List" para=" " />
        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5 lg:gap-6">
          {categories.map((category) => (
            <div key={category.name}>
              <Link
                to={`/collection/${category.name}`}
                className="group rounded-2xl border border-gray-100 bg-white p-4 transition-colors duration-300 hover:bg-red-50"
              >
                {/* Image */}
                <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-40 md:h-44 lg:h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-4 text-center text-base font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-500">
                  {category.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;