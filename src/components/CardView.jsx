import React from "react";
import "../assets/styles/index.css";

function CardView() {
  return (
    <div className="menu-horizontal space-x-5 flex pt-5">
      <div
        className="
            card w-96 
            bg-cyan-500 
            shadow-lg
            shadow-cyan-500/40 
            hover:bg-black
            hover:shadow-black/40
            transform
            hover:-translate-y-3
            transition-transform
            duration-500
            ease-in-out
            card-title-hover:text-cyan-500"
      >
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">Frontend Developer</h2>
          <div className="w-full border-t border-white"></div>
          <div className="flex mt-3">
            <ul className="grid flex-grow text-left">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
            <ul className="grid flex-grow text-left pl-5">
              <li>Tailwindcss</li>
              <li>Vue</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="
            card w-96 
            bg-cyan-500 
            shadow-lg
            shadow-cyan-500/40 
            hover:bg-black
            hover:shadow-black/40
            transform
            hover:-translate-y-3
            transition-transform
            duration-500
            ease-in-out"
      >
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">UI/UX Designer</h2>
          <div className="w-full border-t border-white"></div>
          <ul className="mt-3">
            <li>Figma / FigJam</li>
            <li>Adobe XD</li>
            <li>Microsoft Office</li>
            <li>Google Analytics</li>
          </ul>
        </div>
      </div>

      <div
        className="
            card w-96 
            bg-cyan-500
            shadow-lg
            shadow-cyan-500/40 
            hover:bg-black
            hover:shadow-black/40
            transform
            hover:-translate-y-3
            transition-transform
            duration-500
            ease-in-out"
      >
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">Graphic Design</h2>
          <div className="w-full border-t border-white"></div>
          <ul className="mt-3">
            <li>Corel Draw</li>
            <li>Photoshop</li>
            <li>Premier Pro</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardView;
