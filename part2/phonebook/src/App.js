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
    const [refresh, setRefresh] = useState(false)

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const fetchContacts = () => {
        fetch().then(data => {
            console.log(`Received data from the server: ${data}`);
            setContacts(data);
        });
    };
    useEffect(fetchContacts, [refresh]);

    const handleContactNameChange = (e) => {
        const newName = e.target.value;
        console.log('New name:', newName);
        setContactName(newName);
    };

    const handleContactNumberChange = (e) => {
        const newNumber = e.target.value;
        console.log('Number:', newNumber);
        setContactNumber(newNumber);
    };

    const handleAddContact = (e) => {
        e.preventDefault(); // Prevent form submission and page reload
        console.log('handleAddContact is activated.');

        if (contactName.length <= 4) {
            const nameErrorMessage = `The name '${contactName}' must be at least 5 characters long.`;
            console.log('Error:', nameErrorMessage);
            setErrorMessage(nameErrorMessage);
            return;
        }
        if (contactNumber.length < 7) {
            const numberErrorMessage = `Number '${contactNumber}' must have at least 7 digits.`;
            console.log('Error:', numberErrorMessage);
            setErrorMessage(numberErrorMessage);
            return;
        }
        if (contacts.some(person => person.name === contactName)) {
            const existingContact = contacts.find(c => c.name === contactName);
            const updatedContact = {
                name: contactName,
                number: contactNumber,
                id: existingContact.id
            };
            updateContact(updatedContact).catch(error => {
                const updateErrorMessage = `Error: ${error}. The contact does not exist in the phonebook.`;
                setErrorMessage(updateErrorMessage);
                setRefresh(!refresh);
            });
            console.log(`${contactName} is already in the phonebook. Updating the number: ${contactNumber}`);
            setContacts(contacts.map(c => (c.name === updatedContact.name) ? updatedContact : c));
            setNotificationMessage(`${contactName} is already added to the phonebook. Updating the number.`);
            return;
        }

        const newContact = {
            name: contactName,
            number: contactNumber,
        };
        const response = addContact(newContact);
        response.then(returnedPerson => {
            setContacts(contacts.concat(returnedPerson));
            setContactName('');
            setNotificationMessage(`${returnedPerson.name} is added to the phonebook.`);
        });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteContact(id);
            setContacts(contacts.filter(contact => contact.id !== id));
        }
    };
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
