import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const emailInputRef = useRef()
  const [isNameValue,setIsNameValue] = useState(true)
  const [isTouched,setIsTouched] =useState(false)
  const [enteredName,setEnteredName] = useState('')


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsNameValue(true)


    const enteredValue = nameInputRef.current.value;   //tekuushiy element
    const enteredEmail = emailInputRef.current.value;   //tekuushiy element

    if(enteredValue.trim().length < 4) {
      setIsNameValue(false)
      return  //return-vozvrashat chto to i zavershit kod degen,returndun kiyin dalshe ishtebeyt echteke

    }
    setIsTouched(true)

    console.log("send to server");

    // if(enteredValue.trim() === "" && enteredEmail.trim() === "") {
    //   return        //prosto return bolso dalshe ishtebety kalat 
    // }
    // fetch().then ()
   
  };


  const nameInputBlurHandler = () => {
    setIsNameValue(true)
    const enteredValue = nameInputRef.current.value;  
    if(enteredValue.trim().length < 4) {
      setIsTouched(false)
      setIsNameValue(false)
      return
    }
    setIsTouched(true)
  }
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setIsNameValue(true)
    setIsTouched(true)
    if(event.target.value.trim().length < 4) {
      setIsTouched(false)
      setIsNameValue(false)
      return
    }

  }


  const inputClasses= isNameValue ? 'form-control' :'form-control invalid error-text'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input onChange={nameInputChangeHandler} ref={nameInputRef} onBlur={nameInputBlurHandler} type="text" id="name" />
        {!isNameValue && <p > Your Name should contain more than 3 characters</p>}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input ref={emailInputRef} type="email" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
