
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";
const AdminLogin = () => {
  const { isAdmin, setIsAdmin,axios } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = async (data) => {
    try {
      const response = await axios.post(
        `/api/admin/login`,
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        setIsAdmin(true);
        navigate("/admin");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  if (isAdmin) {
    return null;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 via-white to-red-50/40 px-4 py-10">
      <div className="w-full max-w-md">
        {/* Admin Login Card */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 md:p-10">
          {/* Heading */}
          <div className="mb-7 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-red-500">
              Admin Panel
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Admin Login
            </h1>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Sign in to access your ShopEase admin dashboard.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Admin Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  autoComplete="email"
                  disabled={isSubmitting}
                  {...register("email", {
                    required: "Admin email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition ${
                    errors.email
                      ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-50"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
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
                  placeholder="Enter admin password"
                  autoComplete="current-password"
                  disabled={isSubmitting}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`h-12 w-full rounded-xl border bg-gray-50 pl-11 pr-12 text-sm text-gray-800 outline-none transition ${
                    errors.password
                      ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                      : "border-gray-200 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-50"
                  }`}
                />

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setShowPassword((prev) => !prev)}
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

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in...
                </>
              ) : (
                <>
                  Admin Login
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Bottom Text */}
        <p className="mt-5 text-center text-xs text-gray-400">
          ShopEase Admin Panel · Secure Access
        </p>
      </div>
    </main>
  );
};

export default AdminLogin;
