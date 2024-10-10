import { Button } from "../components/button";
import { CookieName } from "../constants";
import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../utills";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post(API_ROUTES.LOGOUT, {});
      removeCookie(CookieName.AUTH_TOKEN);
      navigate("/signin");
    } catch (err) {
      console.error("Logout failed err", err);
    }
  };
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <div className="text-center">
        <h1 className="pb-2">Welcome to the App</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};
export default Home;
