---
title: "All the basic React Hooks"
description: Learn about React Hooks
image: /Images/BlogTitles/mdlogo.png
date: "2025-02-17"
---

# General Rules of Hooks

1. All hooks start with word **use**
2. In order for a _hook_ to work, component must begin with a capital letter
3. _Hooks_ can't be called conditionally, so you can't call useState within and **if** statement
4. Hooks must be used in the same order
5. **Don't** expect hooks to work immediately _(asynchronously)


# useState

1. Used to control things like numbers, here it's used to add 1 to a counter
2. Make sure to update them in order
3. Returns an array with two numbers, the current state and a function used to update it
4. typical to name the variable and then setVariable

### Render and Re-Render
1. Render is when it first loads, the inital render of the component, also known as **Mounting**
2. By changing state or props, the component will Re-Render
```code block
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
```