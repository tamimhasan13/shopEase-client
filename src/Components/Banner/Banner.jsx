import banner from "../../assets/banner.png"
const Banner = () => {
    return (
      <div className="max-padd-container overflow-hidden py-4 lg:py-8">
        <img
          src={banner}
          alt="bannerImg"
          className="h-auto w-full rounded-xl object-contain"
        />
      </div>
    );
};

export default Banner;