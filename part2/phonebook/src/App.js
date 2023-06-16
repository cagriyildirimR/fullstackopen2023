import React, { useState } from 'react';
import {Filter} from "./components/Filter/Filter";
import {List} from "./components/Person/List";
import {PhonebookForm} from "./components/PhonebookForm/PhonebookForm";

const App = () => {
    const [people, setPeople] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('');
    const [number, setNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    const handleNewName = (e) => {
        console.log('New name is', e.target.value);
        setNewName(e.target.value);
    };

    const handleNumber = (e) => {
        console.log('Number is', e.target.value);
        setNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission and page reload

        if (newName.length <= 4) {
            alert('Name must have at least 5 characters');
        } else if (number.length !== 11){
            alert('Number must have 11 digits')
        }
        else if (people.map(person => person.name).some(name => name === newName )) {
            alert(`${newName} is already added to phonebook`)
        } else{
            setPeople(people.concat(
                {
                    name: newName,
                    number: number,
                    id: people.length + 1
                }));
            setNewName('');
        }
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter handler={handleFilter} text={filter}/>
            <h2>add a new</h2>
            <PhonebookForm handleSubmit={handleSubmit} handleNewName={handleNewName} handleNumber={handleNumber} newName={newName} number={number}/>
            <h2>Numbers</h2>
            <List filter={filter} people={people}/>
        </div>
    );
};

export default App;
