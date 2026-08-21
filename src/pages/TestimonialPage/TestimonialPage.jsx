import { Star } from "lucide-react";
import Title from "../../Components/Common/Title/Title";
const testimonials = [
  {
    name: "Sarah Johnson",
    date: "August 12, 2026",
    message:
      "I’m really impressed with the quality of the products. Everything arrived quickly and exactly as described. I’ll definitely shop here again!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Michael Anderson",
    date: "August 08, 2026",
    message:
      "The shopping experience was smooth and easy. The product quality is excellent, and the customer service was very helpful.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Emily Davis",
    date: "August 03, 2026",
    message:
      "Absolutely loved my purchase! The product looks even better in person. Great quality, fast delivery, and a very pleasant experience.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialPage = () => {
  return (
    <div className="max-padd-container py-16 pt-28 bg-gray-300">
      <Title
        title={"People"}
        title2={"Says"}
        para={
          "Real stories from our happy customers shearing there experience , stay inspiration, and trusted feedback on what they love"
        }
      />
      {/* container */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {testimonials.map((testimonial) => (
          <article className="w-full border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Top */}
            <div className="flex items-center justify-between gap-3">
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    className="text-red-500"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Date */}
              <span className="text-sm text-gray-400">{testimonial.date}</span>
            </div>

            {/* Message */}
            <p className="mt-3 line-clamp-3 text-sm leading-5 text-gray-500">
              “{testimonial.message}”
            </p>

            {/* User */}
            <div className="mt-4 flex items-center gap-3">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="h-9 w-9 rounded-full object-cover"
              />

              <h4 className="text-sm font-medium text-gray-700">
                {testimonial.name}
              </h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
