import { useEffect, useState } from "react"

const Slider = ({max, min, rec}) => {
  // console.log({max})

  const [value, onChange] = useState('');

  useEffect(() => {
    onChange(rec);
  }, [rec])

  return(
    <div className="slide">
      <input type="range" min={min} max={max} value={value} className="slider"
      onChange={({target: { value: radius }}) => {onChange(radius)}} />
      <p><span className="value">{value}</span></p>
      <p><span className="min">{min}</span></p>
      <p><span className="max">{max}</span></p>
    </div>
  )
}

export default Slider