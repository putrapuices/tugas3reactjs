import React from "react";
import Header from "./Page/Header";
import MenuTentangKami from "./Page/MenuTentangKami";
import Footer from "./Page/Footer";
import MenuMakanan from "./Page/MenuMakanan";
function App() {
  return (
    <div>
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <Footer />
    </div>
  );
}

export default App;
