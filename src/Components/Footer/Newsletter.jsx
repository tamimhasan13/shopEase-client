const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="mb-7 text-[19px] font-semibold text-gray-900">
        Subscribe to newsletter
      </h3>

      <p className="mb-7 text-[14px] leading-6 text-gray-600">
        Subscribe to our latest newsletter to get news about special discounts.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="h-11 w-full border border-gray-300 px-4 text-[14px] outline-none transition focus:border-red-400"
        />

        <button
          type="submit"
          className="rounded-md bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          SUBSCRIBE
        </button>

        <label className="flex cursor-pointer items-start gap-2 text-[13px] text-gray-700">
          <input type="checkbox" className="mt-0.5 h-4 w-4 accent-red-500" />

          <span>
            I agree to the terms and conditions and the privacy policy
          </span>
        </label>
      </form>
    </div>
  );
};

export default Newsletter;
