import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
const [showPassword, setShowPassword] = useState(false);
const {setUser } = useContext(AuthContext);
const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmitHandler = async (data) => {
    try {
      console.log("Login data:", data);

      //  Firebase/API login function
      // await loginUser(data.email, data.password);
        navigate("/")
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 via-white to-red-50/40 px-4 py-10 sm:px-6">
      <div className="w-full max-w-md">
        {/* LOGIN CARD*/}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 md:p-10">
          {/*  HEADING  */}
          <div className="mb-7 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-red-500">
              Account Login
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome back
            </h1>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Sign in to your account and continue shopping with ShopEase.
            </p>
          </div>

          {/*  LOGIN FORM */}
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
            className="space-y-5"
          >
            {/*  EMAIL*/}
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
                  disabled={isSubmitting}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:ring-red-50"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD  */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-red-500 transition hover:text-red-600"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={isSubmitting}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-12 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                    errors.password
                      ? "border-red-400 focus:border-red-400 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:ring-red-50"
                  }`}
                />

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
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

            {/*  REMEMBER ME */}
            <label className="flex cursor-pointer items-center gap-2.5">
              <input
                type="checkbox"
                disabled={isSubmitting}
                {...register("remember")}
                className="h-4 w-4 rounded border-gray-300 accent-red-500"
              />

              <span className="text-xs text-gray-500">Remember me</span>
            </label>

            {/*  LOGIN BUTTON */}
            <button
              type="submit"
              onClick={() => setUser((prev) => !prev)}
              disabled={isSubmitting}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:bg-red-500 hover:shadow-red-500/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
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

          {/*  GOOGLE LOGIN =*/}
          <div className="flex justify-center">
            <button
              type="button"
              disabled={isSubmitting}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg
                aria-label="Google logo"
                width="18"
                height="18"
                viewBox="0 0 512 512"
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
          </div>

          {/*  REGISTER */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition hover:text-red-500 hover:decoration-red-300"
            >
              Create an account
            </Link>
          </p>
        </div>

        {/*  BOTTOM TEXT =*/}
        <p className="mt-5 text-center text-xs text-gray-400">
          Secure login · Premium shopping · Easy returns
        </p>
      </div>
    </main>
  );
};

export default Login;
