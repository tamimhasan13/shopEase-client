import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "Your payment information is always protected.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "Return your product within 30 days.",
    icon: RotateCcw,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our support team is always here to help.",
    icon: Headphones,
  },
];
const FeaturesSection = () => {
  return (
    <section className="mx-auto max-padd-container border-y border-gray-100 bg-white py-10 sm:py-12">
      <div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.id} className="group flex items-center gap-4">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[16px] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-500">
                    {feature.title}
                  </h3>

                  <p className="mt-1 max-w-52.5 text-[13px] leading-5 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
