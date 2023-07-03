const {HttpStatusCode} = require("axios");
const express = require("express");
const app = express()

app.get('/info', (request, response) => {
  const currentTime = new Date().toString();

  const size = db.persons.length;
  const r = size > 0 ? `<p>Phonebook has info for ${size} people</p>` : '</p>Phonebook is empty</p>';
  const responseString = `<br>${r}\n\nCurrent time: ${currentTime}</br>`;

  response.status(HttpStatusCode.Ok).send(responseString);
});

app.get('/api/persons/', (request, response) => {
  response.contentType("application/json")
  response.send(db)
  response.status(200)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id); // Convert the id parameter to a number
  const person = db.persons.find(person => person.id === id);

  if (person) {
    response.json(person); // Send the person as JSON
    response.status(200)
  } else {
    response.status(404).json({ error: 'Person not found' });
  }
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const idx = db.persons.findIndex(person => person.id === id);
  if (idx !== -1) {
    db.persons.splice(idx, 1)
    response.status(HttpStatusCode.NoContent).end()
  } else {
    response.status(HttpStatusCode.NotFound).json({error: 'Person not found'})
  }
})

app.patch('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const body = request.body;
  const personIndex = db.persons.findIndex(person => person.id === id);

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'Name or number is missing' });
  }

  const newPerson = {
    ...db.persons[personIndex],
    ...body
  };

  db.persons[personIndex] = newPerson
  response.contentType('application/json')
  response.status(200).json(newPerson);
});

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'Name or number is missing' });
  }

  const newPerson = {
    "name": body.name,
    "number": body.number,
    "id": db.persons.length + 1
  };

  db.persons.concat(newPerson)
  response.contentType('application/json')
  response.status(201).json(newPerson);
});


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

let db = {
  "persons": [
    {
      "name": "Arto Hellas",
      "number": "140-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "John Doe",
      "number": "123-456-7890",
      "id": 5
    },
    {
      "name": "Jane Smith",
      "number": "987-654-3210",
      "id": 6
    },
    {
      "name": "Michael Johnson",
      "number": "555-123-4567",
      "id": 7
    },
    {
      "name": "Emily Davis",
      "number": "222-333-4444",
      "id": 8
    },
    {
      "name": "Robert Brown",
      "number": "999-888-7777",
      "id": 9
    },
    {
      "name": "Sophia Wilson",
      "number": "111-222-3333",
      "id": 10
    },
    {
      "name": "William Taylor",
      "number": "444-555-6666",
      "id": 11
    }
  ]
}
