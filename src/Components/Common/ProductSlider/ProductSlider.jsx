import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../../popularProduct/ProductCard";

const ProductSlider = ({ products }) => {
  return (
    <Swiper
      className="popular-products-swiper"
      modules={[Navigation, Autoplay]}
      navigation
      spaceBetween={14}
      slidesPerView={1}
      loop={products.length > 4}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 12,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 14,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },

        1280: {
          slidesPerView: 5,
          spaceBetween: 18,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
