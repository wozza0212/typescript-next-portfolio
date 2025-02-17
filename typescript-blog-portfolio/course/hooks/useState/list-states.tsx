import { useState } from "react";
import { FormButton } from "@/components";

type Person  = {
    name: string,
    id: number
}

const People : Person[] = [
    {name: 'james', id: 1},
    {name: 'Jessie', id: 2},
    {name: 'Dave', id: 3}

]


const ListUpdater = () => {
    const [list, setList] = useState<Person[]>(People)
    
    const removePerson = (id: number) => {
        const newList = list.filter((person: Person) => person.id !== id)
        People.filter((person: Person) => person.id !== id)
        setList(newList)
    }
    const clearAllPeople = () => {
        setList([])
    }

    const addPerson = () => {
        const anotherPerson = {name: 'timmy', id: 8} as Person
        list.push(anotherPerson)
        console.log(list)
        setList(list => [...list])

    }
    return (
        <div>
        {list.map((person) => {
            const {id, name } = person
            return (
                <div>
                    <h2 key={id}>{name}</h2>
                    <FormButton type="button" version="primaryButton" onClick={() => removePerson(id)}>Clear</FormButton>
                </div>
            )
            
        })}
        <FormButton type="button" version="primaryButton" onClick={clearAllPeople}>Clear All</FormButton>
        <FormButton type="button" version="primaryButton" onClick={addPerson}>Add Person</FormButton>
        </div>
    )

}

export default ListUpdater