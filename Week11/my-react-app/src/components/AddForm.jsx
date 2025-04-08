import { useState } from "react";

function AddForm() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function addNums(e) {
    e.preventDefault();
    var n1 = parseInt(num1);
    var n2 = parseInt(num2)
    setResult(n1 + n2);
  }
  

  return <form>
    <h2>Add some numbers</h2>
    <div>
      <label>First Number: </label>
      <input type="number" onChange={(e) => setNum1(e.target.value)} value={num1}></input>
    </div>
    
    <div>
      <label>Second Number: </label>
      <input type="number" onChange={(e) => setNum2(e.target.value)} value={num2}></input>
    </div>
    
    <div>
      <button onClick={(e) => addNums(e)}>Add</button>
    </div>

    <h2>Sum is {result}</h2>
  </form>
};

export default AddForm;