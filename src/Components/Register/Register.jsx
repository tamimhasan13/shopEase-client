import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmitHandler = async (data) => {
    try {
      console.log("Register data:", data);

      // Firebase/API registration 
      // await registerUser(data.email, data.password);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 via-white to-red-50/40 px-4 py-10 sm:px-6">
      <div className="w-full max-w-lg">
        {/* CARD  */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 md:p-10">
          {/*  HEADING */}
          <div className="mb-7 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-red-500">
              Create Account
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join ShopEase
            </h1>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Create your account and enjoy a simple, secure and personalized
              shopping experience.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
            className="space-y-5"
          >
            {/*  FIRST NAME */}
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                First name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  autoComplete="given-name"
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                    errors.firstName
                      ? "border-red-400 focus:border-red-400 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:ring-red-50"
                  }`}
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "First name is too long",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Please enter a valid first name",
                    },
                  })}
                />
              </div>

              {errors.firstName && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/*  LAST NAME */}
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Last name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  autoComplete="family-name"
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                    errors.lastName
                      ? "border-red-400 focus:border-red-400 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:ring-red-50"
                  }`}
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Last name is too long",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Please enter a valid last name",
                    },
                  })}
                />
              </div>

              {errors.lastName && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:ring-red-50"
                  }`}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/*  PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-12 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                    errors.password
                      ? "border-red-400 focus:border-red-400 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:ring-red-50"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: {
                      uppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain an uppercase letter",
                      lowercase: (value) =>
                        /[a-z]/.test(value) ||
                        "Password must contain a lowercase letter",
                      number: (value) =>
                        /\d/.test(value) || "Password must contain a number",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-12 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                    errors.confirmPassword
                      ? "border-red-400 focus:border-red-400 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:ring-red-50"
                  }`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label="Toggle confirm password visibility"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/*  TERMS  */}
            <div>
              <label className="flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-red-500"
                  {...register("terms", {
                    required: "You must accept the terms and conditions",
                  })}
                />

                <span className="text-xs leading-5 text-gray-500">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-medium text-gray-700 transition hover:text-red-500"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and Privacy Policy.
                </span>
              </label>

              {errors.terms && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.terms.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:bg-red-500 hover:shadow-red-500/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          {/*  DIVIDER */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="whitespace-nowrap text-[10px] font-semibold tracking-[1.5px] text-gray-400">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 512 512"
              aria-label="Google logo"
            >
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />

              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />

              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />

              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
            </svg>
            Continue with Google
          </button>

          {/*  LOGIN */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition hover:text-red-500 hover:decoration-red-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/*  BOTTOM TEXT */}
        <p className="mt-5 text-center text-xs text-gray-400">
          Secure account · Premium shopping · Easy returns
        </p>
      </div>
    </main>
  );
};

export default Register;
