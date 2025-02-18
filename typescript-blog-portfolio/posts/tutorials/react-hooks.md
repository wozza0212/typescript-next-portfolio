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

Things aren't always simple, even the simple thigns arent always simple, I went through all manner of ways to try and write
a simple list updater involving use state, I couldn't for the life of me add a new piece of data to a list of objects and 
get the page to refresh, in the end I got it to work like this

```code block
    const addPerson = () => {
        const anotherPerson = {name: 'timmy', id: 8} as Person
        list.push(anotherPerson)
        console.log(list)
        setList(list => [...list])

    }
```

- When using a submit button to update a form, if you dont want the page to reload make sure you add *e.preventDefault()* to the function it is using, I have also found a better way to update the list

```code block
const [list, setList] = useState<Person[]>(People);
  const [newName, setNewName] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newId += 1;
    const newPerson: Person = { name: newName, id: newId };
    console.log(list);
    setList([...list, newPerson]);
    setNewName("")
  };
  ```

  ```code block

  const [list, setList] = useState<Person[]>(People);
  const [newName, setNewName] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newId += 1;
    const newPerson: Person = { name: newName, id: newId };
    console.log(list);
    setList([...list, newPerson]);
    setNewName("")
  };

  ```

This is the function used to add a new person, updating the list with the arrow function is what i was missing