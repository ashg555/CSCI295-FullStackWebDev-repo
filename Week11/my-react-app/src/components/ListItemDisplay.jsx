export default function ListItemDisplay({ hobby, hobbies, setHobbies }) {

  function deleteHobby() {
    console.log('deleting', hobby)
    let newHobbies = hobbies.filter(item => item !== hobby)
    setHobbies(newHobbies);
  }


  return (
    <>
      <li key={hobby}>
        {hobby}
        <button onClick={deleteHobby}>Delete</button>
      </li>
    </>
  );
}
