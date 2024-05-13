"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const acceptInvitation = () => {
    window.location.href = "https://zhansaya-uzatu.vercel.app/info";
  };

  const [noClickCount, setNoClickCount] = useState(0);
  const [currentBtnText, setCurrentButtonText] = useState("no");

  const declineInvitation = () => {
    setNoClickCount(noClickCount + 1);

    const getNoButtonText = () => {
      const phrases = [
        "no",
        "are you sure?",
        "really sure?",
        "think again!",
        "last chance!",
        "surely not?",
        "you might regret this!",
        "give it another thought!",
        "are you absolutely certain?",
        "this could be a mistake!",
        "have a heart!",
        "don't be so cold!",
        "change of heart?",
        "is that your final answer?",
        "you're breaking my heart ;(",
        "plsss? :( you're breaking my heart",
        "just click yes",
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
        <h1
          style={{
            fontFamily: "Adine Kirnberg",
            fontSize: "60px",
            marginBottom: "0px",
          }}
        >
          Zhans&apos; Hen Party
        </h1>
        <p style={{ fontSize: "30px", marginTop: "0px" }}>
          16.05.2024 <br />
          accept the invitation?
        </p>
        <button id="yesBtn" onClick={acceptInvitation}>
          yes
        </button>
        <button id="noBtn" onClick={declineInvitation}>
          {currentBtnText}
        </button>
      </div>
    </main>
  );
}
