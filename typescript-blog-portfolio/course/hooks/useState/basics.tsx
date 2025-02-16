import { useState } from "react";
import { FormButton } from "@/components";

const UseStateBasics = () => {
  // destructuring
  const [count, setCount] = useState(0);

  // handle click
  const handleClick = () => {
    setCount(count + 1)
  }   
  console.log(useState(count));
  return (
    <div>
      <h2>Use State Basics</h2>
      {/* <button type="button" onClick={handleClick}>Click Me</button> */}
      <FormButton version={`primaryButton`} type={"button"} onClick={handleClick}>Click Me</FormButton>
      <p>count {count}</p>
    </div>
  );
};

export default UseStateBasics;
