import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import { HOME_PATH } from "./constants/paths";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
      </Routes>
    </>
  );
}
export default App;
