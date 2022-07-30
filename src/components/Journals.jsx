import { FaTimes } from "react-icons/fa";
const Journals = ({ data, onDelete }) => {
  return (
    <div>
      {data.map((e) => {
        return (
          // <h3 key={e._id}>
          //   {e.notes}
          //   {e.time}
          //   {e.recWater}
          //   {e.ratio}
          //   {e.coffeeGrams}
          //   <FaTimes
          //     style={{ color: "red", cursor: "pointer" }}
          //     onClick={() => onDelete(e._id)}
          //   ></FaTimes>
          // </h3>
          <ul key={e._id} className='entryList'>
            <li>Notes: {e.notes}</li>
            <li> Time: {e.time}</li>
            <li> Water: {e.recWater} (ml)</li>
            <li> Ratio: {e.ratio}</li>
            <li> Coffee: {e.coffeeGrams} (g)</li>
            <li>
             <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onDelete(e._id)}
              ></FaTimes>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Journals;
