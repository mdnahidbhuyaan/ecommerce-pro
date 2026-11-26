import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";
import { toast } from "@/components/ui/toast";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
const dispatch = useDispatch()
const navigate = useNavigate()




function onSubmit(event) {
  event.preventDefault();

  dispatch(registerUser(formData)).then((data) => {
    console.log("REGISTER RESPONSE:", data);

    if (data?.payload?.success) {
      toast.add({
        title: data?.payload?.message,
       
      })

      console.log("Navigating to Login...");

      navigate("/auth/login");
    }else{
          toast.add({
            title: data?.payload?.message,
            variant: "destructive"
          });
    }
  });
}
  console.log(formData);
  return (
    <div className="flex min-h-[85vh] w-full items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="w-full rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-indigo-100/90 sm:p-10">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200">
              <span className="text-3xl font-black text-white">E</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Create Account
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Sign up to start your shopping journey.
            </p>
          </div>

          {/* Register Form */}
          <CommonForm
            formControls={registerFormControls}
            buttonText={"Create Account"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />

          {/* Login Link */}
          <div className="mt-8 border-t border-slate-100 pt-6 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?
              <Link
                to="/auth/login"
                className="ml-2 font-semibold text-indigo-600 transition-colors hover:text-violet-700 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Secure Registration · Your account is protected
        </p>
      </div>
    </div>
  );
}

export default AuthRegister;
