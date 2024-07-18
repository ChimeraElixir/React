import { useEffect,useState } from "react";

const ToggleChallenge = () => {
  const [state,setState]=useState(false);

  const handleClick = ()=>{
    if(state){
      setState(false);
      return
    }
    setState(true);
    // setState(state ^ true) Problem it display 0 when false
  }

  return (
    <>
    <h1>Toggle Challange</h1>
    <button type="button" value={state} className="btn" onClick={handleClick}>Toggle</button>
    {/* <button type="button" value={state} className="btn" onClick={()=> setState(!state)}>Toggle</button> */}
    
    {state && <Alert/>}
    </>
  );
};

const Alert=()=>{
  return <div className="alert alert-danger">Hello world</div>
}

export default ToggleChallenge;
