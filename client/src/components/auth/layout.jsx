import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700 px-12">
        <div className="max-w-md space-y-6 text-center text-white">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 shadow-xl backdrop-blur-sm">
            <span className="text-4xl font-extrabold">W</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Ecommerce Shopping
          </h1>

          <p className="text-base leading-7 text-blue-100">
            Discover amazing products, enjoy exclusive deals, and experience a
            seamless shopping journey with us.
          </p>

          <div className="pt-4">
            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-sm">
              Your Shopping Journey Starts Here
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
