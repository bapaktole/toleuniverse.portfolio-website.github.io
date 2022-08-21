import React from "react";
import "../assets/styles/index.css";
import CardView from "../components/CardView";

function Content() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold text-primary-content">Skills</h2>
            <p className="py-6">
              I have experience{" "}
              <span className="text-cyan-500">
                Atma Jaya Yogyakarta University
              </span>
            </p>
            <CardView />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
