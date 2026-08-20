

const Title = ({title,title2,para}) => {
    return (
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>

          <p className="text-3xl text-gray-500 underline">{title2}</p>
        </div>
        <p className="block! max-w-md">
            {para? para:"Explore our collection of styling clothing and footwear made for comfort,qulity ,and every day confidance"}
        </p>
      </div>
    );
};

export default Title;