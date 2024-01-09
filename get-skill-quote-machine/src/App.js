import React,{useState} from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Life is 10% what happens to me and 90% of how I react to it.")
  const [author, setAuthor] = useState("Charles Swindoll.");

  const changeQuoteAndAuthor0 = () => {
    setQuote("If you can dream it, you can achieve it.")
        ;setAuthor("-Zig Ziglar")
  }

  const changeQuoteAndAuthor1 = () => {
    setQuote("The mind is everything. What you think you become.")
        ;setAuthor("-Buddha")
  }

  const changeQuoteAndAuthor2 = () => {
    setQuote("It does not matter how slowly you go as long as you do not stop.")
        ;setAuthor("- Confucius")
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          "{quote}"
        </p>
        <p>- {author}</p>
        <button onClick={() => changeQuoteAndAuthor0 ()
        }>Change Quote  0</button>
        <button onClick={() => changeQuoteAndAuthor1 ()
        }>Change Quote 1</button>
        <button onClick={() => changeQuoteAndAuthor2 ()
        }>Change Quote 2</button>
      </header>
    </div>
  );
}

export default App;
