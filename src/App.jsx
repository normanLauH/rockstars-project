import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SignUp from "./views/signup/component";
import Login from "./views/login/component";
import Home from "./views/home/component";
import { useEffect } from "react";
import Layout from "./views/layout/component";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenStorage = localStorage.getItem("token");
  const tokenUser = JSON.parse(tokenStorage);

  useEffect(() => {
    if (
      tokenUser &&
      tokenUser !== "" &&
      (location.pathname === "/Login" || location.pathname === "/Login/")
    ) {
      navigate("/", { replace: true });
    }
  }, [tokenUser, location, navigate]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
