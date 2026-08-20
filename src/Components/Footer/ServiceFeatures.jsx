import { footerFeatures } from "../../data/footerData";

const ServiceFeatures = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="mx-auto grid container grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:px-10 lg:py-12">
        {footerFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="group flex cursor-pointer flex-col items-center text-center"
            >
              {/* Icon */}
              <Icon
                size={34}
                strokeWidth={1.8}
                className="text-gray-700 transition-all duration-300 group-hover:scale-125 group-hover:text-red-500"
              />

              {/* Title */}
              <h3 className="mt-4 text-[16px] font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] text-gray-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceFeatures;
