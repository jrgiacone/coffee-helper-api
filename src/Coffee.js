import { Link } from "react-router-dom";
import { useEffect } from "react";
import Slider from "./components/Slider";
import { useState } from "react";

const Coffee = () => {
  let max = sessionStorage.getItem("max");
  let min = sessionStorage.getItem("min");
  let rec = sessionStorage.getItem("rec");
  const [name, setName] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `http://localhost:3001/api/${sessionStorage.getItem("selection")}`
      );
      const data = await res.json();
      console.log(data);
      window.sessionStorage.setItem("max", data["Maximum Coffee (g)"]);
      window.sessionStorage.setItem("min", data["Minimum Coffee (g)"]);
      window.sessionStorage.setItem("rec", data["Recommended Coffee (g)"]);
      setName(data['Name'])
    };

    fetchApi();
  }, []);
  return (
    <div>
      <h4>{name}</h4>
      <Slider max={max} min={min} rec={rec} />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Coffee;
