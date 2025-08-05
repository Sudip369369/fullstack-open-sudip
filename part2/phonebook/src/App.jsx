// App.jsx
import { useState, useEffect } from 'react';
import phonebookService from './services/phonebookService';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterperson, setFilterPerson] = useState('');

  
  useEffect(() => {
    phonebookService
      .getAll()
      .then(res => {
        setPersons(res.data);
      })
      .catch(err => {
        console.error('Failed to load contacts:', err);
      });
  }, []);

  
  const handleNameChange = (e) => setNewName(e.target.value.trim());
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleFilterChange = (e) => setFilterPerson(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault()
  const existingPerson = persons.find(p => p.name === newName);

  if (existingPerson) {
    const confirmUpdate = window.confirm(
      `${newName} is already added to phonebook, replace the old number with a new one?`
    );

    if (confirmUpdate) {
      const updatedPerson = {
        ...existingPerson,
        number: newNumber,
      };

      phonebookService
        .update(existingPerson.id, updatedPerson)
        .then(response => {
          setPersons(persons.map(p =>
            p.id !== existingPerson.id ? p : response.data
          ));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          alert(`Failed to update number for ${newName}. It may have been removed from server.`,error);
        });
    }

    return;
  }

    const newPerson = {
      name: newName,
      number: newNumber
    };

    phonebookService
      .postAll(newPerson)
      .then(res => {
        setPersons([...persons, res.data]);
        setNewName('');
        setNewNumber('');
      })
      .catch(err => {
        console.error('Failed to add contact:', err);
      });
  };



  


  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id);
    if (!person) return;

    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService
        .deleteNum(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(err => {
          alert(`Failed to delete ${person.name}. Maybe they were already removed.`);
          console.error(err);
        });
    }
  };

  // Filtered list
  const filteredPersons = persons.filter(p =>
    (p.name ?? '').toLowerCase().includes((filterperson ?? '').toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filterperson} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
