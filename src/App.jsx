import { useEffect, useState } from "react";
import { bgImages, fetchQuote, randomNum } from "./utils/utils";

function App() {
  // estados que voy a usar
  const [isQuoteGenerated, setIsQuoteGenerated] = useState(false);
  const [quote, setQuote] = useState("");

  // trae las frases de utils
  async function getQuote() {
    const res = await fetchQuote();
    setQuote(res);
  }

  // cuando carga la página seteo una frase random
  useEffect(() => {
    getQuote();
  }, []);

  // cuando cambio a la página de la frase la muestro por consola
  // si vuelvo al inicio vuelvo a setear una frase distinta
  useEffect(() => {
    !isQuoteGenerated ? getQuote() : quote;
  }, [isQuoteGenerated]);

  return (
    <div
      className="hero h-screen"
      style={{ backgroundImage: `url(${bgImages[randomNum]})` }}
    >
      {!isQuoteGenerated ? (
        <div className="hero-content text-center">
          <div className="max-w-md md:max-w-xl">
            <h1
              className="text-4xl md:text-5xl font-bold text-white font-quote"
              style={{ filter: "drop-shadow(5px 5px 4px black)" }}
            >
              Random quote generator
            </h1>
            <p className="py-6 text-sm md:text-lg text-white font-quote">
              Clik the button to generate an specific topic's quote
            </p>
            <button
              onClick={() => {
                setIsQuoteGenerated(true);
              }}
              className="btn bg-white border-none text-black hover:text-white text-sm md:text-lg font-bold font-quote"
            >
              Generate quote!
            </button>
          </div>
        </div>
      ) : (
        <div className="hero-content">
          <div className="max-w-lg md:max-w-2xl flex flex-col items-center gap-3">
            <p
              className="text-xl md:text-2xl text-center md:text-left text-white font-quote"
              style={{ filter: "drop-shadow(2px 2px 4px black)" }}
            >
              {`"${quote[0].quote}"`}
            </p>
            <span className="w-full text-center md:text-start text-xl md:text-2xl text-white font-sign">
              {quote[0].author}
            </span>
            <button
              onClick={() => {
                setIsQuoteGenerated(false);
              }}
              className="btn bg-white border-none text-black hover:text-white w-14 md:w-20 text-sm md:text-lg md:self-end font-bold mt-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
