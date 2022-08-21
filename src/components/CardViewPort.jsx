import React from "react";
import "../assets/styles/index.css";

function CardViewPort() {
  return (
    <div className="menu-horizontal space-x-5 flex pt-5">
      {/* Portfolio Part 1 */}
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
        <figure>
          <img
            src="https://cdn.discordapp.com/attachments/865940488293187634/1010794558583492648/Instagram_upload.png"
            alt="porto1"
          />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">Frontend Landing Page</h2>
          <div className="w-full border-t border-white"></div>
          <div className="mt-3">
            <p>
              this project happened when I wanted to start focusing on the
              frontend field but I'm still having trouble with using scripts/js
            </p>
          </div>
        </div>
        <div className="card-actions justify-center mb-4">
          <a
            className="
                btn
                btn-ghost
                bg-primary-content
                shadow-lg 
                text-black
                hover:bg-cyan-500
                hover:text-white
                hover:shadow-cyan-500/40"
            href="https://landingpage-lamborghinicommunity.swaraiddo.repl.co/#"
          >
            Click Me!
          </a>
        </div>
      </div>
      {/* Portfolio Part 2 */}
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
        <figure>
          <img
            src="https://cdn.discordapp.com/attachments/865940488293187634/1010795742769717399/Rectangle_24.png"
            alt="porto2"
          />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">UI Designer Figma</h2>
          <div className="w-full border-t border-white"></div>
          <div className="mt-3">
            <p>
              Movietix is a simple app to help users book multiple movie tickets
              and choose the nearest cinema location.
            </p>
          </div>
        </div>
        <div className="card-actions justify-center mb-4">
          <a
            className="
                btn
                btn-ghost
                bg-primary-content
                shadow-lg 
                text-black
                hover:bg-cyan-500
                hover:text-white
                hover:shadow-cyan-500/40"
            href="https://www.figma.com/file/8O47QAu8teEPLmEOFo0v08/Tubes_UTS_PBP?node-id=0%3A1"
          >
            Click Me!
          </a>
        </div>
      </div>
      {/* Portfolio Part 3 */}
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
        <figure>
          <img
            src="https://cdn.discordapp.com/attachments/865940488293187634/1010799304165822524/Group_6_1.png"
            alt="porto3"
          />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">UI/UX Designer</h2>
          <div className="w-full border-t border-white"></div>
          <div className="mt-3">
            <p>
              Individual Project to complete Final Exam of UI/UX Design Training
              by Rakamin Academy. This project aims to find out how to create
              task flows, create some user interfaces.
            </p>
          </div>
        </div>
        <div className="card-actions justify-center mb-4">
          <a
            className="
                btn
                btn-ghost
                bg-primary-content
                shadow-lg 
                text-black
                hover:bg-cyan-500
                hover:text-white
                hover:shadow-cyan-500/40"
            href="https://www.figma.com/file/JmgkAzUE3OQcFhNUCmal9W/Design-U%2FUX-Class-B-HW4?node-id=0%3A1"
          >
            Click Me!
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardViewPort;
