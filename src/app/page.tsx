"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const acceptInvitation = () => {
    window.location.href = "https://tally.so/r/wkYNP6?transparentBackground=1";
  };

  const [noClickCount, setNoClickCount] = useState(0);
  const [currentBtnText, setCurrentButtonText] = useState("No");

  let a = 12;

  const declineInvitation = () => {
    setNoClickCount(noClickCount + 1);

    const getNoButtonText = () => {
      const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
        "Plsss? :( You're breaking my heart",
        "JUST CLICK YES",
      ];

      return phrases[Math.min(noClickCount, phrases.length - 1)];
    };

    if (noClickCount > 0) {
      setCurrentButtonText(getNoButtonText());
    }
  };

  return (
    <main className="mainPage">
      <div id="invitation">
        <h1>
          Zhans&apos; Hen Party <br />
          <span style={{ fontSize: " 30px" }}>
            16.05.2024 <br />
            accept the invitation?
          </span>
        </h1>
        <button id="yesBtn" onClick={acceptInvitation}>
          Yes
        </button>
        <button id="noBtn" onClick={declineInvitation}>
          {currentBtnText}
        </button>
      </div>
    </main>
  );
}
