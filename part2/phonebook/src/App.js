import React, {useEffect, useState} from 'react';
import {Filter} from "./components/Filter/Filter";
import {List} from "./components/Person/List";
import {PhonebookForm} from "./components/PhonebookForm/PhonebookForm";
import {addContact, deleteContact, fetch, updateContact} from "./service/api";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const fetchContacts = () => {
        fetch().then(data => {
            console.log(`data we received from server ${data}`)
            setContacts(data)
        })
    }
    useEffect(fetchContacts, [])

    const handleContactNameChange = (e) => {
        console.log('New name is', e.target.value);
        setContactName(e.target.value);
    };

    const handleContactNumberChange = (e) => {
        console.log('Number is', e.target.value);
        setContactNumber(e.target.value)
    }

    const handleAddContact = (e) => {
        e.preventDefault(); // Prevent form submission and page reload

        if (contactName.length <= 4) {
            alert('Name must have at least 5 characters');
            return
        }
        if (contactNumber.length < 7) {
            alert('Number must have at least 7 digits');
            return
        }
        if (contacts.map(person => person.name).some(name => name === contactName)) {
            const up = {
                name: contactName,
                number: contactNumber,
                id: contacts.find(c => c.name === contactName).id
            }
            updateContact(up)
            console.log(`${contactName} is already added to phonebook. updating the number`)
            setContacts(contacts.map(c => (c.name === up.name) ? up : c))
            return
        }

        const newContact = {
            name: contactName,
            number: contactNumber,
        }
        const response = addContact(newContact)
        response.then(returnedPerson => {
            setContacts(contacts.concat(returnedPerson))
            setContactName('')
        })
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteContact(id)
            setContacts(contacts.filter(contact => contact.id !== id))
        }
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter handler={handleSearchQueryChange} text={searchQuery}/>
            <h2>add a new</h2>
            <PhonebookForm handleAddContact={handleAddContact}
                           handleContactNameChange={handleContactNameChange}
                           handleContactNumberChange={handleContactNumberChange}
                           contactName={contactName}
                           contactNumber={contactNumber}/>
            <h2>Numbers</h2>
            <List filter={searchQuery} people={contacts} handleDelete={handleDelete}/>
        </div>
    );
};

export default App;
