import React, { useState } from "react";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import './Components/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="background d-flex flex-column align-items-center justify-content-center">
      <div className="container">
        <Header title="Using React" count={count} />
        <Counter setCount={setCount} />
      </div>
      <Footer copyright="© rcmnrl 2023" className="footer"  />
      
    </div>
  );
}


export default App;