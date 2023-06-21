import axios from "axios";

const URL = "http://localhost:3001/persons/"

export const addContact = contact => {
    console.log(`new contact is added. contact:${contact}`)
    return axios.post(URL, contact).then(r => r.data)
}

export const deleteContact = (id) => {
    return axios.delete(URL + id)
        .then(response => {
            console.log(`deleting item with id: ${id} was successful. Response return from promise ${response}`);
            console.log(response)
        })
        .catch(error => {
            console.log(`deleting item with id: ${id} returned error. Error: ${error}`);
        });
}

export const fetch = () => {
    return axios.get(URL).then(response => {
        console.log("response of get request to /persons:", response)
        return response.data
    })
}

export const updateContact = (contact) => {
    return axios.put(URL+contact.id, contact).then(response => {
        console.log(`contact is updated. response ${response.data}`)
    })
}
