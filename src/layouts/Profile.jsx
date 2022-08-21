import React from "react";
import "../assets/styles/index.css";

function Profile() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold pb-1">Hy! I Am</h1>
          <h1 className="text-5xl font-bold text-primary-content">
            Girisotya <span className="text-cyan-500">Iddo</span> Yogiswara
          </h1>
          <p className="py-6">Welcome to the simple website for my portfolio !</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
