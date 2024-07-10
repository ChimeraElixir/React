import { useState } from "react";

const ErrorExample = () => {
  let count=0;
  const handleCount= ()=>{
    count =count+1;
    console.log(count);
  }

  return (
    <>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleCount}>click me</button>
    </>
  )
};

export default ErrorExample;
