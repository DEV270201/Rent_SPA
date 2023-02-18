import React from "react";
import NavbarLg from "./components/Navbar/Navbar_lg";
import Footer from "./components/Footer/Footer";
import Rent from "./pages/Rent";

const App = () => {
  return (
    <>
      <div>
        <NavbarLg />
        <Rent />
        <Footer />
      </div>
    </>
  )
}

export default App;
