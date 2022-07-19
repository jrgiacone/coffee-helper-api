import {FaTimes} from 'react-icons/fa'
const Journals = ({data, onDelete}) => {
  return(
    <div>
      {data.map((e) => {
        return <h3 key={e._id}>{e.notes}
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(e._id)} ></FaTimes> 
        </h3>
      })}
    </div>
  )
}

export default Journals