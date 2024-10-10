import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import DummyImg from "../assets/dummyImg.png";
import axiosInstance from "../services/axiosInstance";
import { toast } from "react-toastify";
import { Errors } from "../utills/types";
import { setCookie } from "../utills";
import { CookieName } from "../constants";
import { API_ROUTES } from "../constants/apiRoutes";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<Errors>({});

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sigin form submit");
    try {
      const response: any = await axiosInstance.post(API_ROUTES.SIGNIN, {
        email,
        password,
      });

      if (response?.status === 401) {
        toast.error(response?.data?.message);
        console.log("login error", response.error);
      } else if (response?.status === 200 && response?.data?.token) {
        // it is validated till 24 hours, after certain time it token will remove
        setCookie(CookieName.AUTH_TOKEN, response?.data?.token, 1);

        toast.success(response?.data?.message);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong");
      console.log("SignUpError", error);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col items-center justify-center w-[50%]">
        <div>
          <h3 className="font-poppins text-black text-3xl font-semibold mb-1">
            Login to MelodyVerse
          </h3>
          <p className="font-poppins text-black text-base font-medium mb-10">
            {" "}
            Enter your Credentials to access your account
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <div className="font-poppins text-xs flex justify-end text-[#0C2A92]">
                <a href="/">forgot password</a>
              </div>
            </div>
            <div className="mb-4">
              <Input
                label="Remember Me"
                type="checkbox"
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </div>
            <Button disabled={!email || !password }>
              Sign In
            </Button>
          </form>
          <div className="mt-4">
            <p className="font-poppins text-black text-base font-medium">
              Don't have an account?{" "}
              <a href="/signup" className="text-[#0C2A92]">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] border-[1px] rounded-tl-[50px] rounded-bl-[50px]">
        <div className="w-full h-full">
          <img
            src={DummyImg}
            alt="melody verse"
            className="rounded-tl-[50px] rounded-bl-[50px] w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
