import React from "react";
import NavbarLg from "./components/Navbar/Navbar_lg";
import Footer from "./components/Footer/Footer";
import Rent from "./pages/Rent";
import Dropdown from "./components/Utils/Dropdown";

const App = () => {
  return (
    <>
      <div className="">
        <NavbarLg />
        <Rent />
        <Footer />
        {/* <Dropdown /> */}
      </div>
    </>
  )
}

export default App;
