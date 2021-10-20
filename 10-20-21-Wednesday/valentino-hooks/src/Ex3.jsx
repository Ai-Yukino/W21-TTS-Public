import React, { useState, useEffect } from "react";

export default function DataLoader() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3001/links/")
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
