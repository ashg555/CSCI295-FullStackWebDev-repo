

function SignUpForm() {
  return <form>
    <label for='Email'>Your Email</label>
    <input type='email' name='Email'></input>
    <label for='Pass'>Your Password</label>
    <input type='password' name='Pass'></input>
    {/* <input type='submit'>Create Account</input>  */}
  </form>
}

export default SignUpForm