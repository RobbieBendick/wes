import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Footer from "./components/Copyright/Copyright";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
