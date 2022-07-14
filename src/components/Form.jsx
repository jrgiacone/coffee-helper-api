import { useEffect, useState } from "react";
const Form = () => {
  const [notes, setNotes] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const coffee = { notes };
    setIsPending(true);

    fetch("http://localhost:3001/addJournal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffee),
    }).then(() => {
      setIsPending(false);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/getJournal");

      const data = await res.json();
      // console.log(data)
      setData(data)

    }
    fetchData();
  }, []);


    // return data
  

  return (
    <div>
      <>
      {data.map((e) => {
        return <h3 key={e._id}>{e.notes}</h3>
      })}
      </>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          name="notes"
          placeholder="notes"
        />
        {!isPending && <button type="submit">submit</button>}
        {isPending && <button disabled>Adding notes...</button>}
      </form>
    </div>
  );
};

export default Form;
