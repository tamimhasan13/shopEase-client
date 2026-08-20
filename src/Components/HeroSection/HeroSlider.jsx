import { ArrowRight } from "lucide-react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const heroSlides = [
  {
    id: 1,
    badge: "New Collection 2026",
    title: "Elevate Your Everyday Style",
    description:
      "Discover premium clothing designed for modern comfort, confidence, and effortless style.",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    badge: "Summer Essentials",
    title: "Fresh Looks For Every Day",
    description:
      "Explore our latest collection of stylish pieces made to keep you comfortable all season.",
    buttonText: "Explore Collection",
    buttonLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    badge: "Premium Fashion",
    title: "Style That Speaks For You",
    description:
      "Find timeless fashion pieces that bring together quality, simplicity, and modern design.",
    buttonText: "Discover Now",
    buttonLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
  },
];

const HeroSlider = () => {
  return (
    <section className="group relative overflow-hidden bg-[#fafafa]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mx-auto max-padd-container">
              <div className="grid min-h-145 items-center gap-10 py-12 md:grid-cols-2 lg:min-h-162.5 lg:gap-16 lg:py-16">
                {/* Left Content */}
                <div
                  data-aos="fade-left"
                  className="order-2 max-w-xl md:order-1"
                >
                  <div className="mb-5 inline-flex rounded-full bg-red-50 px-4 py-2">
                    <span className="text-xs font-semibold uppercase tracking-[2px] text-red-500">
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-[60px]">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-8">
                    <Link
                      to="/collection"
                      className="group/btn inline-flex items-center gap-3 rounded-full bg-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-xl"
                    >
                      ShopNow
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </Link>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-gray-200 pt-5">
                    <span className="text-sm font-medium text-gray-500">
                      ✓ Premium Quality
                    </span>

                    <span className="text-sm font-medium text-gray-500">
                      ✓ Easy Returns
                    </span>

                    <span className="text-sm font-medium text-gray-500">
                      ✓ Secure Shopping
                    </span>
                  </div>
                </div>

                {/* Right Image */}
                <div
                  data-aos="fade-down"
                  className="order-1 flex justify-center md:order-2 md:justify-end"
                >
                  <div className="relative w-full max-w-145.5">
                    <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-red-100/70 blur-2xl" />

                    <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gray-200/70 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[28px] bg-gray-100 shadow-2xl shadow-gray-300/30">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-90 w-full object-cover sm:h-140 md:h-125 lg:h-140"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                    </div>

                    <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/80 bg-white px-5 py-4 shadow-xl sm:-left-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                        Shop With Confidence
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-800">
                        Premium Fashion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
