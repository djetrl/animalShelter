import {  useRef, useEffect } from 'react';



const useRefInputHelp = () => {
  const inputRef = useRef();



  

  
  useEffect(()=>{

        inputRef.current.addEventListener('focus', () => {
          inputRef.current.previousElementSibling.classList.add("label-focus");
          inputRef.current.parentElement.classList.add("pay-form__requisites__form__item--focus");
        })

        inputRef.current.addEventListener('blur', () => {
            if (inputRef.current.value == "") {
              inputRef.current.previousElementSibling.classList.remove("label-focus");
              inputRef.current.parentElement.classList.remove("pay-form__requisites__form__item--focus");
            }  
        })

  },[])



  

  return { inputRef};
}



export default useRefInputHelp;
  