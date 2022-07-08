import { useState, useEffect } from "react"
import Header from "./components/Header";
// import CoffeeMakers from "./components/coffeeMakers";

function App() {
  const [coffee] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch ('http://localhost:3001/api')
      const data = await res.json()
      console.log(data)
    }

    fetchTasks()
  }, [])
  // const [coffeeMakers] = useState([
  //     {
  //       "Name": "v60",
  //       "Difficulty": "Hard",
  //       "Recommended Water (ml)": 360,
  //       "Recommended Water Temp (C)": 97,
  //       "Recommended Coffee (g)": 22,
  //       "Minimum Coffee (g)": 15,
  //       "Maximum Coffee (g)": 30,
  //       "Required Materials": [
  //         "Hario v60",
  //         "Paper Filters",
  //         "Gooseneck Kettle",
  //         "Groud Coffee",
  //       ],
  //     },
  //     {
  //       "Name": "Aeropress",
  //       "Difficulty": "Medium",
  //       "Recommended Water (ml)": 250,
  //       "Recommended Water Temp (C)": 95,
  //       "Recommended Coffee (g)": 15,
  //       "Minimum Coffee (g)": 10,
  //       "Maximum Coffee (g)": 25,
  //       "Required Materials": [
  //         "Aeropress",
  //         "Aeropress Filters",
  //         "Hot Water",
  //         "Ground Coffee",
  //       ],
  //     },
  //     {
  //       "Name": "French Press",
  //       "Difficulty": "Easy",
  //       "Recommended Water (ml)": 540,
  //       "Recommended Water Temp (C)": 95,
  //       "Recommended Coffee (g)": 30,
  //       "Minimum Coffee (g)": 10,
  //       "Maximum Coffee (g)": 55,
  //       "Required Materials": ["French Press", "Ground Coffee", "Hot water"],
  //     },
  //     {
  //       "Name": "Chemex",
  //       "Difficulty": "Medium",
  //       "Recommended Water (ml)": 510,
  //       "Recommended Water Temp (C)": 97,
  //       "Recommended Coffee (g)": 30,
  //       "Minimum Coffee (g)": 20,
  //       "Maximum Coffee (g)": 44,
  //       "Required Materials": [
  //         "Hario v60",
  //         "Paper Filters",
  //         "Gooseneck Kettle",
  //         "Groud Coffee",
  //       ],
  //     },
  //     {
  //       "Name": "Moka Pot",
  //       "Difficulty": "Medium",
  //       "Recommended Water (ml)": 220,
  //       "Recommended Water Temp (C)": 99,
  //       "Recommended Coffee (g)": 15,
  //       "Minimum Coffee (g)": 10,
  //       "Maximum Coffee (g)": 20,
  //       "Required Materials": [
  //         "Hario v60",
  //         "Paper Filters",
  //         "Gooseneck Kettle",
  //         "Groud Coffee",
  //       ],
  //     },
  //     {
  //       "Name": "Vacuum Pot",
  //       "Difficulty": "Hard",
  //       "Recommended Water (ml)": 330,
  //       "Recommended Water Temp (C)": 99,
  //       "Recommended Coffee (g)": 20,
  //       "Minimum Coffee (g)": 15,
  //       "Maximum Coffee (g)": 40,
  //       "Required Materials": [
  //         "Hario v60",
  //         "Paper Filters",
  //         "Gooseneck Kettle",
  //         "Groud Coffee",
  //       ],
  //     },
  //     {
  //       "Name": "Clever Dripper",
  //       "Difficulty": "Medium",
  //       "Recommended Water (ml)": 250,
  //       "Recommended Water Temp (C)": 97,
  //       "Recommended Coffee (g)": 18,
  //       "Minimum Coffee (g)": 15,
  //       "Maximum Coffee (g)": 40,
  //       "Required Materials": [
  //         "Hario v60",
  //         "Paper Filters",
  //         "Gooseneck Kettle",
  //         "Groud Coffee",
  //       ],
  //     },
  // ]);
  return (
    <div className="container">
      <Header />
      {/* <CoffeeMakers coffeeMakers={coffee} /> */}
    </div>
  );
}

export default App;
