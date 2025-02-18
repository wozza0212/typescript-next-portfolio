import { FormEvent, useState } from "react";
import { FormButton } from "@/components";

type Person = {
  name: string;
  id: number;
};

const People: Person[] = [
  { name: "james", id: 1 },
  { name: "Jessie", id: 2 },
  { name: "Dave", id: 3 },
];

var newId: number = 4;

const ListUpdater = () => {
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

  const removePerson = (id: number) => {
    const newList = list.filter((person: Person) => person.id !== id);
    People.filter((person: Person) => person.id !== id);
    setList(newList);
  };
  const clearAllPeople = () => {
    setList([]);
  };

  const addPerson = () => {
    const anotherPerson = { name: "timmy", id: 8 } as Person;
    list.push(anotherPerson);
    console.log(list);
    setList((list) => [...list]);
  };
  return (
    <div>
      {list.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2 key={id}>{name}</h2>
            <FormButton
              type="button"
              version="primaryButton"
              onClick={() => removePerson(id)}
            >
              Clear
            </FormButton>
          </div>
        );
      })}
      <FormButton
        type="button"
        version="primaryButton"
        onClick={clearAllPeople}
      >
        Clear All
      </FormButton>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="text-black"
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review..."
            value={newName}
          ></input>
        </div>
        <FormButton type="submit" version="primaryButton">
          Add Person
        </FormButton>
      </form>
    </div>
  );
};

export default ListUpdater;
