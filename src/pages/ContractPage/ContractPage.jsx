import { Headphones, Mail, MapPin, Phone } from "lucide-react";
const ContractPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Later API / email functionality এখানে add করতে পারবেন
    console.log("Message submitted");
  };
  return (
    <main className="bg-gray-50">
      <section className="max-padd-container py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          {/* ================= LEFT : CONTACT FORM ================= */}
          <div>
            {/* Heading */}
            <div className="mb-7">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Get{" "}
                <span className="font-normal text-gray-500 underline decoration-gray-400 underline-offset-4">
                  in Touch
                </span>
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-5 text-gray-500 sm:text-[15px]">
                Have questions or need help? Send us a message, and we'll get
                back to you as soon as possible.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="h-11 w-full rounded-sm border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 w-full rounded-sm border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                  />
                </div>
              </div>

              {/* Message */}
              <textarea
                rows="6"
                placeholder="Write your message here"
                className="mt-4 w-full resize-none rounded-sm border border-gray-200 bg-white px-3 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-sm bg-gray-900 px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ================= RIGHT : CONTACT DETAILS ================= */}
          <div>
            {/* Heading */}
            <div className="mb-7">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Contact{" "}
                <span className="font-normal text-gray-500 underline decoration-gray-400 underline-offset-4">
                  Details
                </span>
              </h2>

              <p className="mt-2 max-w-md text-sm leading-5 text-gray-500 sm:text-[15px]">
                We are always here to assist you! Feel free to reach out to us
                through any of the following methods.
              </p>
            </div>

            {/* Details */}
            <div className="space-y-5">
              {/* Location */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Location:
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} className="shrink-0" />
                  <span>123 Shopprr Street, Clothing City, FC 12345</span>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Email:</h3>

                <a
                  href="mailto:info@shopprr.com"
                  className="mt-1 flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-500"
                >
                  <Mail size={16} className="shrink-0" />
                  <span>info@shopprr.com</span>
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Phone:</h3>

                <a
                  href="tel:+18001234567"
                  className="mt-1 flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-500"
                >
                  <Phone size={16} className="shrink-0" />
                  <span>+1 (800) 123-4567</span>
                </a>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Support:
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <Headphones size={16} className="shrink-0" />
                  <span>24/7 Support is open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContractPage;
