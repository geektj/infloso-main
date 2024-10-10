import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} theme="light" />
    </Router>
  );
}

export default App;
