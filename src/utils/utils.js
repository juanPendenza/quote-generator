import bgImg1 from "../assets/paisaje1.gif";
import bgImg2 from "../assets/paisaje2.gif";
import bgImg3 from "../assets/paisaje3.gif";
import bgImg4 from "../assets/paisaje4.gif";
import bgImg5 from "../assets/paisaje5.gif";
import bgImg6 from "../assets/paisaje6.gif";

export async function fetchQuote() {
  const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": "uTTzEGEdntULmWoP36yGDQ==bE23mTiBa7OXXKYo",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

// fondos de pantalla
export const bgImages = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6];

// número random para los fondos de pantalla
export const randomNum = Math.round(Math.random() * 5);
