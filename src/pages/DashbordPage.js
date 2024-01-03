import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, addUser } from "../features/auth/authSlice";

const DashbordPage = () => {
  const { user: data } = useSelector((state) => state.user);
  console.log(data);
  const dispatch = useDispatch();
  // const navigate = useNavigation();
  const navigate = useNavigate();

  const logoutHandelar = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="container mx-auto">
      <div>DashbordPage</div>
      <div className="flex items-center justify-center text-8xl text-red-800">
        {data.name}
      </div>
      <button onClick={logoutHandelar}>Logut</button>
    </div>
  );
};

export default DashbordPage;
