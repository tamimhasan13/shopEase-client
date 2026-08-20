import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ product}) => {
    const navigation=useNavigate();
    const [hovered,setHovered]=useState(false);
  return (
    // <div className="overflow-hidden bg-white p-5">
    //   <div className='flex bg-[#f5f5f5] overflow-hidden relative'>
    //     <img src={product.image.length > 1 && hovered ? product.image[1]:product.image[0] } alt="ProductImg" className='group-hover:bg-primaryDeep transition-all duration-300'/>
    //   </div>
    //   <div className='pt-3'>
    //     <h4 className='font-medium line-clamp-1 uppercase py-0'>{product.name}</h4>
    //     <p className='line-clamp-1'>{product.description}</p>
    //     <div className='flex justify-between pt-2 gap-2'>
    //         <p className='text-lg'>{product.category}</p>
    //         <button className='btn-outline w-full text-xs py-2 px-0'>Add to Cart | ${product.offerPrice}.00</button>
    //     </div>
    //   </div>
    // </div>
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div
        onClick={() => {
          navigation(
            `/collection/${product.category.toLowerCase()}/${product._id}`,
          );
          scrollTo(0, 0);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#f7f7f7]"
      >
        <img
          src={
            product.image.length > 1 && hovered
              ? product.image[1]
              : product.image[0]
          }
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="px-1 pb-1 pt-4">
        {/* Category */}
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        {/* Product Name */}
        <h4 className="line-clamp-1 text-base font-semibold capitalize text-gray-900">
          {product.name}
        </h4>

        {/* Description */}
        <p className="mt-1 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price + Cart */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-gray-900">
              ${product.offerPrice}.00
            </p>

            {product.price && product.price > product.offerPrice && (
              <p className="text-xs text-gray-400 line-through">
                ${product.price}.00
              </p>
            )}
          </div>

          <button
            type="button"
            className="rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-red-500 active:scale-95"
          >
            Add to Cart | ${product.offerPrice}.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;