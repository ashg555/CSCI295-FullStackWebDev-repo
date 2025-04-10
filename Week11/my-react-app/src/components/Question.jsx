export default function Question({q, count}) {
  return <>

    <h1>Question {count}</h1>

    <h2>{q.type}</h2>
    <h2>{q.question}</h2>

    <p>{q.correct_answer}</p>
    <p>{q.incorrect_answers}</p>

    <select>
      <option>option 1</option>
      <option>option 2</option>
    </select>

  </>
}