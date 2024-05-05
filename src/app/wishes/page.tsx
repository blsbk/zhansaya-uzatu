"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://sheetsu.com/apis/v1.0su/8313ef52c1cc"
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
    <div id="dataDisplay">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item["Your name"]}: {item["Your fav memory with Zhans: "]}
            <img
              src={item["Your fav photo with Zhans"]}
              style={{ width: "100px", height: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
