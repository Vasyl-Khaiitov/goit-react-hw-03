import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState, useMemo } from 'react';
import { useDebounce } from 'use-debounce';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setInitialContacts] = useState(initialContacts);
  const [inputValue, setInputValue] = useState('');
  const [debounceInputValue] = useDebounce(inputValue, 300);

  const addNewContact = (newContact) => {
    setInitialContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const filterContact = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debounceInputValue.toLowerCase()),
    );
  }, [debounceInputValue, contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <SearchBox value={inputValue} onChange={setInputValue} />
      <ContactList contactItem={filterContact} />
    </div>
  );
}
