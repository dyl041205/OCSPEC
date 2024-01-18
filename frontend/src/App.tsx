import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";

import { CONTACT_PATH, HOME_PATH } from "./constants/paths";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={CONTACT_PATH} element={<ContactPage />} />
      </Routes>
    </>
  );
}
export default App;
