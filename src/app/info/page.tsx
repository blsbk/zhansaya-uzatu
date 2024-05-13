"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const homePage = () => {
    window.location.href = "https://zhansaya-uzatu.vercel.app";
  };
  const wishes = () => {
    window.location.href = "https://zhansaya-uzatu.vercel.app/wishes";
  };

  return (
    <html
      style={{
        backgroundImage: "none",
        overflowY: "auto",
      }}
    >
      <body>
        <div className="w3-top">
          <div
            className="w3-white w3-xlarge"
            style={{
              maxWidth: "1200px",
              margin: "auto",
            }}
          >
            <div
              className="w3-center w3-padding-16"
              style={{ fontFamily: "Dancing Script" }}
            >
              <span>
                <button
                  onClick={homePage}
                  className="w3-button w3-display-left w3-large"
                >
                  back
                </button>
              </span>
              Instructions
              <span>
                <button
                  onClick={wishes}
                  className="w3-button w3-display-right w3-large"
                >
                  wishes
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          className="w3-main w3-content"
          style={{
            maxWidth: "1200px",
            marginTop: "100px",
          }}
        >
          <div className="w3-row-padding w3-center">
            <p className="w3-large" style={{ fontFamily: "Dancing Script" }}>
              Dear Zhansaya, we are excited to invite you to the upcoming party!
              We expect you to be in a <span role="img">✨</span>{" "}
              cute-pinterest-girl <span role="img">✨</span> dress for the day
              and in your comfy pajamas for the night. Pls don&apos;t forget
              your Medet with kal&apos;yan <span role="img">😉</span> <br />
              While you&apos;re waiting, you may read the wishes we&apos;ve left
              you by clicking the button in top-right
              <span role="img">🩵</span>{" "}
            </p>
          </div>
          <div className="w3-center w3-container">
            <div className="w3-row-padding w3-center">
              <div className="w3-display-right">
                <img
                  src="./assets/37C65BFA-D059-44EE-8E82-C355E163AB29_4_5005_c.jpeg"
                  style={{
                    width: "200px",
                    height: "350px",
                    marginLeft: "300px",
                  }}
                />
              </div>
              <div className="w3-display-left">
                <p
                  className="w3-large"
                  style={{ fontFamily: "Dancing Script" }}
                >
                  16th May, Thursday | 15:00
                </p>
                <p>
                  <span role="img" aria-label="Location">
                    📍
                  </span>{" "}
                  <a
                    href="https://go.2gis.com/8lkny"
                    className="w3-link"
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Bliss House, Almaty
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
