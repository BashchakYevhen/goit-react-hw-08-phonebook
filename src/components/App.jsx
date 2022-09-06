import { customAlphabet } from 'nanoid';
import { GlobalStyle } from 'globalstyle';
import { useState, useEffect } from 'react';
import { PhoneBook } from './phoneBook/PhoneBook';
import { Phonelist } from './PhoneList/PhoneList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { PhoneListStyle } from './PhoneList/PhoneList.style';
const nanoid = customAlphabet('1234567890');

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
      ? JSON.parse(localStorage.getItem('contacts'))
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }
  const handleSubmit = (name, number) => {
    const newContact = {
      id: nanoid(3),
      name: name,
      number: number,
    };
    const isIncludeContact = newContact.name.toLowerCase();

    contacts.find(contact => {
      return contact.name.toLowerCase() === isIncludeContact;
    })
      ? alert('You have already contact with name:' + name)
      : setContacts([...contacts, newContact]);
  };
  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const removeContact = e => {
    const removeId = e.currentTarget.value;
    setContacts(
      contacts.filter(({ id }) => {
        return id !== removeId;
      })
    );
  };

  return (
    <>
      <PhoneBook onSubmit={handleSubmit} />
      <Phonelist filter={filter} changeFilter={changeFilter} />
      <PhoneListStyle>
        <ContactItem
          contacts={getFiltredContacts()}
          removeContact={removeContact}
        />
      </PhoneListStyle>
      <GlobalStyle />
    </>
  );
};
