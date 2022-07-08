// import { useState, useEffect } from "react"
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Coffee from "./Coffee";
import Selection from "./components/Selection";
// import { useCallback } from "react";
// import CoffeeMakers from "./components/coffeeMakers";

function App() {
  // const [coffee] = useState([])

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const res = await fetch("http://localhost:3001/api");
  //     const data = await res.json();
  //     console.log(data);
  //   };

  //   fetchApi();
  // }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                {/* <Nav /> */}
                <Selection />
              </>
            }
          />
          <Route path="/coffee" element={<Coffee />} />
        </Routes>

        {/* <CoffeeMakers coffeeMakers={coffee} /> */}
      </div>
    </Router>
  );
}

export default App;
