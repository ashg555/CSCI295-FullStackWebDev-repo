export default function HobbyItem({hobby, hobbies, setHobbies}){

    function deleteHobby(){
        console.log('deleting', hobby)
        let newHobbies = hobbies.filter(item => item !== hobby);
        console.log(newHobbies)
        setHobbies(newHobbies);
    }

    return <>
     <li key={hobby}> {hobby} <button onClick={deleteHobby}> X </button> </li>
    
    </>
}