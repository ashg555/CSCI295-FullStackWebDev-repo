import Button from './Button'

const name = 'User'
const msg = 'This is a demo'

function add(a, b) {
  return a+b
}

function Hello(props) {
  return <div>
      <h2>Hello {props.name}!</h2>
      <p>{props.msg}</p>
      <p>{3*5}</p>
      <Button />
      <p>{add(4,8)}</p>
    </div>
}

export default Hello