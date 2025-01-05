import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [quotes, setquotes] = useState([]);
  const [author, setauthor] = useState([]);
  const getinfo = async () => {
    const APIKey = "j7cilGeFlhoZVwnMvEknVQ==9vefDcXbAlxINxCr";
    const url = "https://api.api-ninjas.com/v1/quotes";
    const get = await fetch(url, {
      headers: {
        "X-Api-Key": APIKey,
      },
    });
    const response = await get.json();
    setquotes(response[0].quote);
    setauthor(response[0].author);
    // console.log(response);
  };
  useEffect(() => {
    getinfo();
  }, []);

  return (
    <div>
      <div className="quotes">
        <p>{quotes}</p>
        <p>{author}</p>
        <div className="button">
          <button onClick={getinfo}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
