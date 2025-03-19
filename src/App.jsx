import { useState } from "react";
import "./App.css";

// 🆕 Add the Powerpuff Girls Winning GIF URL
const powerpuffGif = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG52bnBpaThocWY1cHd0YXJ4bm1tOXdleXptOGdpOXFlbngxZGc0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TQbMZC7UngVH2/giphy.gif";
const powerpuffGif1 = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3dlN3BhbHc0MGNyMHk1ZmNpdjB6enpnc2J0ZTR6M3BkeWZhNG1zMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TfXYJOZ5RrXFeebICt/giphy.gif"

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [gif, setGif] = useState(null); // 🆕 State for GIF

  const formatNumber = (num) => {
    return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
  };

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove commas for calculations
    setNumber(formatNumber(rawValue)); // Format and update input field
  };

  const checkPrime = () => {
    const num = Number(number.replace(/,/g, "")); // Convert formatted number to actual number
    if (isNaN(num) || number === "") {
      setResult("❌ Please enter a valid number.");
      setGif(null); // Clear GIF if invalid input
      return;
    }

    const formattedNum = num.toLocaleString(); // Keep result formatted
    let prime = isPrime(num);

    setResult(prime 
      ? `✅ ${formattedNum} is a PRIME number! 🎉` 
      : `❌ ${formattedNum} is NOT a prime number.`);

    if (prime) {
      setGif(powerpuffGif); // 🆕 Show Powerpuff Girls Winning GIF 🎉
    } else {
      document.getElementById("number-input").classList.add("shake");
      setTimeout(() => {
        document.getElementById("number-input").classList.remove("shake");
      }, 400);
      setGif(powerpuffGif1); 
    }
  };

  return (
    <div className="container">
      <h1>Is It Prime? 🔢</h1>
      <input
        id="number-input"
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={handleInputChange}
      />
      <button onClick={checkPrime}>Check</button>
      {result && <p className="result">{result}</p>}
      {gif && <img src={gif} alt="Winning GIF" className="result-gif" />} {/* 🆕 Show GIF */}
    </div>
  );
}
