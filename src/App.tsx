import React from "react";
import "./App.css";
import Body from "./layouts/Body";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
