import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import BookingPage from "./Pages/BookingPage";
import { BOOKING_PATH, CONTACT_PATH, HARROGATE_PATH, HOME_PATH, KNARESBOROUGHCASTLE_PATH, LEEDS_PATH, LOGIN_PATH, RESET_PATH, SIGNUP_PATH, TAKEAWAY_PATH } from "./constants/paths";
import Harrogate from "./Pages/Harrogate";
import KnaresboroughCastle from "./Pages/KnaresboroughCastle";
import Leeds from "./Pages/Leeds";
import Takeaway from "./Pages/TakeawayPage";
import Footer from "./Pages/UniversalFooter";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Reset from ".//Pages/PassReset";



function App() {
  return (
    <>
    
      <NavBar />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={CONTACT_PATH} element={<ContactPage />} />
        <Route path={HARROGATE_PATH} element={<Harrogate />} />
        <Route path={KNARESBOROUGHCASTLE_PATH} element={<KnaresboroughCastle />} />
        <Route path={LEEDS_PATH} element={<Leeds />} />
        <Route path={BOOKING_PATH} element={<BookingPage />} />
        <Route path={TAKEAWAY_PATH} element={<Takeaway />} />
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={SIGNUP_PATH} element={<SignUp />} />
        <Route path={RESET_PATH} element={<Reset />} />
  
      </Routes>
      <Footer>
      </Footer>
    </>
  );
}
export default App;
