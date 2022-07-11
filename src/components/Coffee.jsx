import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "./Slider";
import StopWatch from "./StopWatch";
// import Selection from "./Selection";

const Coffee = ({maker}) => {
  const [name, setName] = useState('');
  const [max, setMax] = useState('');
  const [min, setMin] = useState('');
  const [rec, setRec] = useState('');
  const [recWater, setRecWater] = useState('');
  const [ratio, setRatio] = useState(14);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `http://localhost:3001/api/${sessionStorage.getItem("selection")}`
      );
      
      // const res = await fetch(
      //   `http://localhost:3001/api/${maker}}`
      // );
      const data = await res.json();
      console.log(data);
      setName(data['Name'])
      setMax(data['Maximum Coffee (g)']);
      setMin(data['Minimum Coffee (g)']);
      setRec(data['Recommended Coffee (g)']);   
      
    };

    fetchApi();
  }, []);


  useEffect(() => {
    setRecWater(ratio*rec)
  }, [rec,ratio])

  const getSliderValue = (value) => {
    setRecWater(ratio * value); 
  }

  return (
    <div>
      <h4>{name}</h4>
      <Slider max={max} min={min} rec={rec} getSliderValue={(value) => getSliderValue(value)}/>
      <h6>{recWater}</h6>
      <StopWatch />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Coffee;
