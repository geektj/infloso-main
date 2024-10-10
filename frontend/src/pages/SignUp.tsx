import { useState, useEffect, useCallback } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import DummyImg from "../assets/dummyImg.png";
import axiosInstance from "../services/axiosInstance";
import { toast } from "react-toastify";
import { Errors } from "../utills/types";
import { API_ROUTES } from "../constants/apiRoutes";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return ["Email is required"];
    }
    if (!emailRegex.test(email)) {
      return ["Please enter a valid email address"];
    }
    return [];
  }, []);

  const validatePassword = useCallback((password: string) => {
    const errors = [];
    if (!password) {
      return ["Password is required"];
    }
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }
    if (!/[A-Za-z]/.test(password)) {
      errors.push("Password must contain at least 1 letter");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must contain at least 1 number");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must contain at least 1 special character");
    }
    return errors;
  }, []);

  const validateForm = useCallback(() => {
    const newErrors: Errors = {};
    const emailErrors = validateEmail(email);
    const passwordErrors = validatePassword(password);

    if (emailErrors.length > 0) {
      newErrors.email = emailErrors;
    }

    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = ["Passwords do not match"];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [email, password, confirmPassword, validateEmail, validatePassword]);

  useEffect(() => {
    validateForm();
  }, [email, password, confirmPassword, validateForm]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response: any = await axiosInstance.post(API_ROUTES.REGISTER, {
          name,
          email,
          password,
        });

        if (response.error) {
          toast.error(response.error);
        } else if (response.status === 201) {
          toast.success(response?.data?.message);
          navigate("/signin");
          console.log(response);
        }
      } catch (error: any) {
        toast.error(error.response.data.message || "Something went wrong");
        console.log("SignUpError", error);
      }

      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors");
    }
    console.log("signup form submit");
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col items-center justify-center w-[50%]">
        <div className="w-3/5">
          <h3 className="font-poppins text-black text-3xl font-semibold mb-1">
            SignUp for MelodyVerse
          </h3>
          <p className="font-poppins text-black text-base font-medium mb-10">
            {" "}
            Get started now enter your details
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <Input
                label="Name"
                type="text"
                placeholder="Enter your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={false}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              {errors.email && (
                <ul className="text-red-500 text-xs mt-1">
                  {errors.email.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
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
              {errors.password && (
                <ul className="text-red-500 text-xs mt-1">
                  {errors.password.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword[0]}
                </p>
              )}
            </div>
            <div className="mb-4">
              <Input
                label="I agree to the Terms & Conditions"
                type="checkbox"
                value={termsConditions}
                onChange={(e) => setTermsConditions(e.target.checked)}
              />
            </div>
            <Button
              disabled={
                !email ||
                !password ||
                !confirmPassword ||
                !termsConditions ||
                Object.keys(errors).length > 0
              }
            >
              Sign Up
            </Button>
          </form>
          <div className="mt-4">
            <p className="font-poppins text-black text-base font-medium">
              Already have an account?{" "}
              <a href="/signin" className="text-[#0C2A92]">
                Sign In
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
export default SignUp;
