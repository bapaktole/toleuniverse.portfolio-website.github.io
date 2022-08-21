import React from "react";
import "../assets/styles/index.css";
import CardViewPort from "../components/CardViewPort";

function EndContent() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold text-primary-content">Portfolio</h2>
            <p className="py-6">
              I Have Some{" "}
              <span className="text-cyan-500">
                Little Project
              </span>
            </p>
            <CardViewPort/>
          </div>
        </div>
      </div>
    </>
  );
}

export default EndContent;
