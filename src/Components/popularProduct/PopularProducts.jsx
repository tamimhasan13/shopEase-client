import { useContext } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Title from "../Common/Title/Title";
import Items from "./Items";

const PopularProducts = () => {
  const { products = [] } = useContext(AuthContext);

  const popularProducts = products.filter((item) => item.popular).slice(0, 6);
  return (
    <section className="max-padd-container mx-auto pt-16 py-10 sm:py-12 lg:py-14">
      <Title title="Popular" title2="products" />
      {/*  container */}
      {popularProducts.length > 0 ? (
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            555: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1150: {
              slidesPerView: 4,
              spaceBetween: 10,
            },

            1350: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="min-h-99.75"
        >
          {popularProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <Items product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex min-h-55 items-center justify-center rounded-2xl bg-base-200">
          <p className="text-sm text-base-content/60">
            No products found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default PopularProducts;
