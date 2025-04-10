import { useState } from "react";
import ListItemDisplay from "./ListItemDisplay";
import Demo from "./Demo";
import Button from "./Button";

export default function Hobbies() {
  const [hobbies, setHobbies] = useState([]);
  const [hobby, setHobby] = useState("coding");
  const [activities, setActivity] = useState({ activity: "", time: "" });

  function addHobby() {
    setHobbies([...hobbies, hobby]);
    console.log(hobbies);
  }

  return (
    <>
      <h2>Enter your hobbies</h2>
      Hobby
      <input
        type="text"
        onChange={(e) => setHobby(e.target.value)}
        value={hobby}
      />
      Last activity
      <input
        type="text"
        onChange={(e) =>
          setActivity({ ...activities, activity: e.target.value })
        }
        value={activities.activity}
      />
      Time
      <input
        type="text"
        onChange={(e) => setActivity({ ...activities, time: e.target.value })}
        value={activities.time}
      />
      <button onClick={addHobby}> Add Hobbies </button>
      {activities.activity}
      {activities.time}
      {/* {hobbies.map(x => <p>{x}</p>)} */}
      {hobbies.length == 0 ? (
        <p>No hobbies Yet</p>
      ) : (
        <ul>
          {hobbies.map((x) => (
            <ListItemDisplay hobby={x} hobbies={hobbies} setHobbies={setHobbies} />
          ))}
        </ul>
      )}

      <Demo>
        <Button/>
      </Demo>

    </>
  );
}
