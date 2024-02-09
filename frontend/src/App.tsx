import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import BookingPage from "./Pages/BookingPage";
import { BOOKING_PATH, CONTACT_PATH,  HOME_PATH,  LOGIN_PATH, RESET_PATH, SIGNUP_PATH, TAKEAWAY_PATH } from "./constants/paths";

import Takeaway from "./Pages/TakeawayPage";
import Footer from "./Pages/UniversalFooter";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Reset from ".//Pages/PassReset";

import AccountCredentialsProvider from "./Pages/AccountProvider";



function App() {
  return (
    <>
      <AccountCredentialsProvider>
      <NavBar />
      
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={CONTACT_PATH} element={<ContactPage />} />
   
        
        <Route path={BOOKING_PATH} element={<BookingPage />} />
        <Route path={TAKEAWAY_PATH} element={<Takeaway />} />
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={SIGNUP_PATH} element={<SignUp />} />
        <Route path={RESET_PATH} element={<Reset />} />
        
      </Routes>
      </AccountCredentialsProvider>

      <Footer>
      </Footer>
    </>
  );
}
export default App;
