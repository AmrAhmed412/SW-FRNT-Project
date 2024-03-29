import "./App.css";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/authentication/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/authentication/SignupPage";
import UserEventPage from "./pages/userEvent/UserEventPage";
import CreatorHomePage from "./pages/creator home/CreatorHome";
import ForgetPasswordPage from "./pages/authentication/ForgetPasswordPage";

import { useSelector } from "react-redux";
import Footer from "./layouts/footer/Footer";
import CreatorEvents from "./pages/creator events/CreatorEvents";

function App() {
  const user = useSelector((state) => state.user);
  return ( 
    <>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user/event/:_id" element={<UserEventPage />} />
        <Route path="/create" element={<CreatorHomePage />} />
        <Route path="/create/creatorhome" element={<CreatorHomePage />} />
        <Route path="/create/events" element={<CreatorEvents />} />
        <Route path="/forgetPassword/:id" element={<ForgetPasswordPage/>}/>
      </Routes>

      {!user.isCreator && <Footer/>}
    </>
  );
}

export default App;
