"use client";
import { link } from "fs";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const homePage = () => {
    window.location.href = "https://zhansaya-uzatu.vercel.app";
  };
  const info = () => {
    window.location.href = "https://zhansaya-uzatu.vercel.app/info";
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://sheetsu.com/apis/v1.0su/264f9532e18e"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

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
                  main
                </button>
              </span>
              From your girls
              <span>
                <button
                  onClick={info}
                  className="w3-button w3-display-right w3-large"
                >
                  wishes
                </button>
              </span>
            </div>
          </div>
        </div>

        <div
          className="w3-main w3-content w3-padding"
          style={{ maxWidth: "1200px", marginTop: "100px" }}
        >
          <div className="w3-row-padding w3-padding-16 w3-center" id="food">
            {data.map((item, index) => (
              <li key={index} className="w3-quarter w3-container">
                <img
                  src={item["Your fav photo with Zhans"]}
                  style={{ width: "100%" }}
                />
                <h4 style={{ fontFamily: "Dancing Script" }}>
                  {item["Your name"]}
                </h4>
                <p style={{ fontFamily: "Dancing Script" }}>
                  {item["Your fav memory with Zhans: "]}
                </p>
              </li>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
