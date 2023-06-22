import React, {useEffect, useState} from 'react';
import {List} from "./components/Person/List";
import {addContact, deleteContact, fetch, updateContact} from "./service/api";
import PhonebookForm from "./components/PhonebookForm/PhonebookForm";
import Filter from "./components/Filter/Filter";
import {SuccessNotification} from "./components/Notification/Success";
import {ErrorNotification} from "./components/Notification/Error";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

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
            setErrorMessage('Name must have at least 5 characters');
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
            setNotificationMessage(`${returnedPerson.name} is added to the Phonebook`)
        })
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteContact(id)
            setContacts(contacts.filter(contact => contact.id !== id))
        }
    }

    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
    };

    const titleStyle = {
        textAlign: 'center',
        fontSize: '3rem',
        margin: '20px 0',
    };

    return (
        <div style={appStyle}>
            <SuccessNotification message={notificationMessage}/>
            <ErrorNotification message={errorMessage}/>
            <h1 style={titleStyle}>Phonebook</h1>
            <Filter handler={handleSearchQueryChange}
                    text={searchQuery}/>
            <h2>Add a New Contact</h2>
            <PhonebookForm handleAddContact={handleAddContact}
                           handleContactNameChange={handleContactNameChange}
                           handleContactNumberChange={handleContactNumberChange}
                           contactName={contactName}
                           contactNumber={contactNumber}/>
            <h2>Numbers</h2>
            <List filter={searchQuery}
                  people={contacts}
                  handleDelete={handleDelete}/>
        </div>
    );
};

export default App;
