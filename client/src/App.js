import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BareNav from "./components/BareNav";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/actions/authAction";
import DashBoard from "./pages/DashBoard";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  // console.log(errors)

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <BareNav />
      <Routes>
        <Route path="/" element={<Home />} />

        {user.isAdmin && <Route path="/admin" element={<DashBoard />} />}

        {isAuth ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
            <>                         
            <Route path="/profile" element={< Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
