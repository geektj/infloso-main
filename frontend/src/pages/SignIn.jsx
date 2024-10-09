import { useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import DummyImg from '../assets/dummyImg.png';
// import axiosInstance from "../utils/axiosInstance";

// interface FormProps {
//     onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
// }

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("sigin form submit");
    // try{
    //     const response = await axiosInstance.get("/")
    //     console.log('res', response);
    // }catch(error){
    //     console.log('signup error', error);
    // }
    
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
            <div className="font-poppins text-xs flex justify-end text-[#0C2A92]"><a href="/">forgot password</a></div>
          </div>
          <div className="mb-4">
            <Input
              label="Remember Me"
              type="checkbox"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          </div>
          <Button disabled={!email || !password || !rememberMe}>Sign In</Button>
        </form>
        </div>
      </div>
      <div className="w-[50%] border-[1px] rounded-tl-[50px] rounded-bl-[50px]">
        <div className="">
          <img src={DummyImg} alt="melody verse" className="rounded-tl-[50px] rounded-bl-[50px] w-full h-full" />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
