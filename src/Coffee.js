import { Link } from "react-router-dom";
import { useEffect } from "react";

const Coffee = () => {
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `http://localhost:3001/api/${sessionStorage.getItem("selection")}`
      );
      const data = await res.json();
      console.log(data);
      // max = data["Maximum Coffee (g)"];
      // min = data["Minimum Coffee (g)"];
      // rec = data["Recommended Coffee (g)"];
    };

    fetchApi();
  }, []);
  return (
    <div>
      <h4>v60 Coffee</h4>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Coffee;
