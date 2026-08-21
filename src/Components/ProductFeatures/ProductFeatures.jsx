import { RotateCcw, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Easy Return",
    description:
      "Not satisfied with your purchase? Enjoy hassle-free returns within 7 days.",
    icon: RotateCcw,
    iconStyle: "text-amber-500 bg-amber-50",
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "Get your favorite products delivered quickly and safely right to your doorstep.",
    icon: Truck,
    iconStyle: "text-red-500 bg-red-50",
  },
  {
    id: 3,
    title: "Secure Payment",
    description:
      "Shop with confidence using our safe, secure, and trusted payment methods.",
    icon: ShieldCheck,
    iconStyle: "text-blue-500 bg-blue-50",
  },
];

const ProductFeatures = () => {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 overflow-hidden border border-gray-100 bg-white shadow-sm md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className={`group flex gap-4 p-5 transition-all duration-300 hover:bg-gray-50 sm:p-6 ${
                index !== features.length - 1
                  ? "border-b border-gray-100 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.iconStyle} transition-all duration-300 group-hover:scale-110`}
              >
                <Icon
                  size={22}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-base font-bold text-gray-800 sm:text-[17px]">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-gray-500 sm:text-[13px] sm:leading-[1.45]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductFeatures;