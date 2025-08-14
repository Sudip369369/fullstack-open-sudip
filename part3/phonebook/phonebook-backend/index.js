const express = require('express')
 const morgan = require('morgan')
const cors = require('cors')





 const server = express(); 
 server.use(express.json())

// using cors middleWare. 
server.use (cors())

 // 3.7: Phonebook backend step 7 

// server.use(morgan('tiny'));

//  3.8*: Phonebook backend step 8

//  Define the custom token 
morgan.token('body', (req) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : '';
});

server.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);


 // Sample Data
let  persons =  [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]





 server.get('/',(request,response)=>{
    response.send("Welcome to the Phone Book App");

 })


 // 3.1: Phonebook backend step 1
 server.get('/api/persons',(request,response,next)=>{
       response.json(persons)
 })
  

// 3.2: Phonebook backend step 2
 server.get('/info',(req,res)=>{
    const now = new Date();
    res.send(`<h1> Phonebook has info for ${persons.length} people. </h1> <h2> ${now}</h2>`)
 })


//  3.3: Phonebook backend step 3
  server.get('/api/persons/:id',(request,response)=>{
    const id = request.params.id;
    const person = persons.find(person=>person.id === id)
    if(!person){
        response.status(404).end()
    }
    response.json(person);
  })


//3.4: Phonebook backend step 4
server.delete('/api/persons/:id',(request,response)=>
{
 const id = request.params.id
 const person = persons.find(person => person.id ===id)
 if(!person){
    response.send(404).end
 }
  persons = persons.filter(person=> person.id !== id)
  response.status(202).end() // no content. 

})


// 3.5: Phonebook backend step 5 && 3.6: Phonebook backend step 6
server.post('/api/persons',(request,response)=>{
      
    const body = request.body
    if (!body.name || !body.number) {
    return response.status(400).json({ error: 'Name or number missing' });
  }

  if(persons.find(person => person.name === body.name)){
    return response.status(400).json({ error: 'name must be unique' })
  }
  
    const newPerson ={
        id:Math.random(),
        name: body.name,
        number: body.number,
    }
    persons = persons.concat(newPerson)
    response.status(201).json(newPerson)

})





 const PORT = 3001
 server.listen(PORT,()=>{
    console.log("Server runnion on",PORT);
 })
