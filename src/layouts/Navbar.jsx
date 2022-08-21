import React from "react";
import "../assets/styles/index.css";

function Navbar() {
  return (
    <div className="bg-base-200">
      <div className="navbar bg-transparent container mx-auto px-52 fixed min-w-full">
        {/* Navbar Item Left or Start*/}
        <div className="navbar-start mt-10">
          <a
            className="
                btn 
                w-40 
                rounded-full 
              bg-cyan-500 
                shadow-lg
              shadow-cyan-500/20 
              hover:shadow-black/40 
                border-none"
            href="index.js"
          >
            <img
              className="h-5 w-4.5 mr-auto pl-1.5"
              src="https://cdn.discordapp.com/attachments/865940488293187634/990858965409759252/logo.png"
              alt="logo"
            />
            <p className="text-primary-content pr-1">TOLEUNIVERSE</p>
          </a>
        </div>

        {/* Navbar Item Right or End */}
        <div className="navbar-end mt-10">
          <div
            className="
                btn 
                w-40 
                rounded-full 
              bg-cyan-500 
                shadow-lg
              shadow-cyan-500/20 
              hover:shadow-black/40 
                border-none"
          >
            <ul className="menu-horizontal mr-3 space-x-1">
              <li>
                <a
                  className="link-instagram"
                  href="https://www.instagram.com/swaraiddo/"
                  alt="instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    fill="white"
                    stroke="none"
                  >
                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="link-linkedin"
                  href="https://www.linkedin.com/in/girisotyaiddo"
                  alt="linkedin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    fill="white"
                    stroke="none"
                  >
                    <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://cdn.discordapp.com/attachments/865940488293187634/990718506842599504/Iddo.webp"
                  alt="myfoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
