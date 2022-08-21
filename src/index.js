import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import Content from "./layouts/Content";
import EndContent from "./layouts/EndContent";
import Navbar from "./layouts/Navbar";
import Profile from "./layouts/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Profile />
    <Content />
    <EndContent />
    <footer className="footer footer-center p-4 bg-neutral text-base-content">
      <ul className="menu-horizontal space-x-1">
        <img
          className="h-5 w-4.5"
          src="https://cdn.discordapp.com/attachments/865940488293187634/990858965409759252/logo.png"
          alt="logo"
        />
        <p className="font-bold text-primary-content pr-1 pb-0.5">
          TOLEUNIVERSE
        </p>
      </ul>
    </footer>
  </React.StrictMode>
);