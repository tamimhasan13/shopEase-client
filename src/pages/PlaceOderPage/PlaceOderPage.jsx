import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/AuthContext/AuthContext";
import CartSummary from "../CartPage/CartSummary";

const PlaceOrderPage = () => {
  const navigate = useNavigate();

  const { cartItems, getCartCount, getCartAmount, Shipping_fee, Tax_rate } =
    useContext(AuthContext);

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  // CART SUMMARY

  const totalItems = getCartCount();

  const subtotal = getCartAmount();

  const shippingFee = subtotal > 0 ? Shipping_fee : 0;

  const tax = subtotal * Tax_rate;

  const total = subtotal + shippingFee + tax;

  // PLACE ORDER

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const orderData = {
        deliveryInfo: formData,
        paymentMethod,
        cartItems,
        pricing: {
          subtotal,
          shippingFee,
          tax,
          total,
        },
      };

      console.log("Order Data:", orderData);

      // PAYMENT LOGIC

      if (paymentMethod === "stripe") {
        console.log("Proceeding with Stripe...");
      } else {
        console.log("Cash on Delivery selected");
      }
      // API / Firebase order logic এখানে হবে
      // Example:
      // navigate("/order-success");
    } catch (error) {
      console.error("Order failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-12 lg:py-16">
      <div className="max-padd-container mx-auto">
        {/* PAGE HEADER */}

        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-brand">
            Checkout
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
            Delivery{" "}
            <span className="font-normal text-gray-400">Information</span>
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Complete your delivery details and choose your preferred payment
            method to place your order.
          </p>
        </div>

        {/* CONTENT */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_400px]">
          {/* DELIVERY FORM */}

          <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-soft sm:p-7 lg:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Delivery Details
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Enter the information where you want your order delivered.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* FIRST + LAST NAME */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* First Name */}

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "First name must be at least 2 characters",
                      },
                    })}
                    className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                      errors.firstName
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-brand"
                    }`}
                  />

                  {errors.firstName && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Last name must be at least 2 characters",
                      },
                    })}
                    className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                      errors.lastName
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-brand"
                    }`}
                  />

                  {errors.lastName && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                    errors.email
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-brand"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PHONE */}

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+880 1XXXXXXXXX"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^(?:\+8801|01)[3-9]\d{8}$/,
                      message: "Enter a valid Bangladesh phone number",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                    errors.phone
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-brand"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* STREET ADDRESS */}

              <div>
                <label
                  htmlFor="street"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>

                <input
                  id="street"
                  type="text"
                  placeholder="House, road and area"
                  {...register("street", {
                    required: "Street address is required",
                    minLength: {
                      value: 5,
                      message: "Please enter a valid address",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                    errors.street
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-brand"
                  }`}
                />

                {errors.street && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.street.message}
                  </p>
                )}
              </div>

              {/* CITY + STATE */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* City */}

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    placeholder="Dhaka"
                    {...register("city", {
                      required: "City is required",
                    })}
                    className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                      errors.city
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-brand"
                    }`}
                  />

                  {errors.city && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* State */}

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    State / Division
                  </label>

                  <input
                    id="state"
                    type="text"
                    placeholder="Dhaka Division"
                    {...register("state", {
                      required: "State / Division is required",
                    })}
                    className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                      errors.state
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-brand"
                    }`}
                  />

                  {errors.state && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.state.message}
                    </p>
                  )}
                </div>
              </div>

              {/* ZIP + COUNTRY */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Zip Code */}

                <div>
                  <label
                    htmlFor="zipCode"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Zip Code
                  </label>

                  <input
                    id="zipCode"
                    type="text"
                    placeholder="1200"
                    {...register("zipCode", {
                      required: "Zip code is required",
                      pattern: {
                        value: /^\d{4}$/,
                        message: "Enter a valid 4-digit zip code",
                      },
                    })}
                    className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                      errors.zipCode
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-brand"
                    }`}
                  />

                  {errors.zipCode && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>

                {/* Country */}

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>

                  <input
                    id="country"
                    type="text"
                    placeholder="Bangladesh"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className={`h-12 w-full rounded-xl border bg-gray-50 px-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-red-50 ${
                      errors.country
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-brand"
                    }`}
                  />

                  {errors.country && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              {/* MOBILE SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-gray-900 text-sm font-semibold text-white transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60 lg:hidden"
              >
                {loading ? "Processing..." : "Proceed to Order"}
              </button>
            </form>
          </section>

          {/* ORDER SUMMARY */}

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <CartSummary
              totalItems={totalItems}
              subtotal={subtotal}
              shippingFee={shippingFee}
              tax={tax}
              total={total}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              onCheckout={handleSubmit(onSubmit)}
              onContinue={() => navigate("/collection")}
            />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default PlaceOrderPage;
