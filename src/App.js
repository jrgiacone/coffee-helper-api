// import { useState, useEffect } from "react"
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Selection from "./components/Selection";
import Coffee from "./components/Coffee";
// import { useCallback } from "react";
// import CoffeeMakers from "./components/coffeeMakers";

function App() {

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
