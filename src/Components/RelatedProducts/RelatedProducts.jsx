import { useContext } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Title from "../Common/Title/Title";
import Items from "../popularProduct/Items";

const RelatedProducts = ({ product, id }) => {
  const { products = [] } = useContext(AuthContext);
  //    if(products.length>0){
  //     let productCopy = products.slice()
  //     productCopy = productCopy.filter((item) => item.category===product.category && id != item._id);
  //    }

  const relatedProducts =
    product && products.length
      ? products
          .filter(
            (item) => item.category === product.category && item._id !== id,
          )
          .slice(0, 6)
      : [];
  return (
    <section className="pt-16">
      <Title title="Related" title2="products" />
      {/*  container */}
      {relatedProducts.length > 0 ? (
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
          {relatedProducts.map((product) => (
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

export default RelatedProducts;
