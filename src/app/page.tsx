"use client";
import Image from "next/image";

export default function Home() {
  const handleBtn1Click = () => {
    console.log("handleBtn1Click clicked");
  };

  return (
    <main className="mainPage">
      <div id="invitation">
        <h1>
          Zhans' Hen Party <br />
          <span style={{ fontSize: " 30px" }}>
            16.05.2024 <br />
            accept the invitation?
          </span>
        </h1>
        <button id="yesBtn" onClick={handleBtn1Click}>
          Yes
        </button>
        <button id="noBtn">No</button>
      </div>
    </main>
  );
}
