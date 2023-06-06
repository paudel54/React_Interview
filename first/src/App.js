import React, { useState, useEffect } from "react";
import String from "./components/String";

export default function App() {
  const [data, setData] = useState(true);
  return (
    <div>
      {data ? <String /> : <h1>No Data Available</h1>}
      <button onClick={() => setData(!data)}>Toggle</button>
    </div>
  );
}


