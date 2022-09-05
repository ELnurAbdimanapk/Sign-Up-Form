import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName,setEnteredName] = useState("")
  const [enteredLastName,setEnteredLastName] = useState("")
  const [enteredEmail,setEnteredEmail] = useState("")
  const [error,setError] = useState(true)
  const [emailError,setEmailError] = useState(true)
  
  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value)
  }
  const enteredLastNameHandler = (e) => {
    setEnteredLastName(e.target.value)
  }
  const enteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value)
  }
  
  const submitHandler = (event) => {
    event.preventDefault()
    if (enteredName.trim().length === 0  || enteredLastName.trim().length === 0 ) {
      setError(false)
      return
    }
    if (!enteredEmail.includes("@"))  {
      setEmailError(false)
      return
    }

    setEnteredEmail("")
    setEnteredLastName("")
    setEnteredEmail("")
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input value={enteredName} onChange={enteredNameHandler} type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='lastname'>Last Name</label>
          <input onChange={enteredLastNameHandler} value={enteredLastName} type='text' id='lastname' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input onChange={enteredEmailHandler} value={enteredEmail} type='text' id='email' />
        {!error && <p style={{color:"red"}} > Name and Surname should contain more than 3 characters</p>}
        {!emailError && <p style={{color:"red"}}>Email should contain @ </p>}
      </div>
      <div className='form-actions'>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
