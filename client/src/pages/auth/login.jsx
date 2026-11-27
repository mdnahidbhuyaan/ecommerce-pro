import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { loginUser } from "@/store/auth-slice";
import { toast } from "@/components/ui/toast";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.add({
          title: data?.payload?.message,
        });
      } else {
        toast.add({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }
  return (
    <div className="flex min-h-[85vh] w-full items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="w-full rounded-3xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-100/50 sm:p-10">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200">
              <span className="text-3xl font-black text-white">E</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back!
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Sign in to continue your shopping journey.
            </p>
          </div>

          {/* Login Form */}
          <CommonForm
            formControls={loginFormControls}
            buttonText={"Sign In"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />

          {/* Register Link */}
          <div className="mt-8 border-t border-slate-100 pt-6 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?
              <Link
                to="/auth/register"
                className="ml-2 font-semibold text-indigo-600 transition-colors hover:text-violet-700 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Secure Login · Your account is protected
        </p>
      </div>
    </div>
  );
}

export default AuthLogin;
