import { customAlphabet } from 'nanoid';
import { GlobalStyle } from 'globalstyle';
import { Component } from 'react';
import { PhoneBook } from './phoneBook/PhoneBook';
import { Phonelist } from './PhoneList/PhoneList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { PhoneListStyle } from './PhoneList/PhoneList.style';
const nanoid = customAlphabet('1234567890');
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleSubmit = data => {
    const { name, number } = data;
    const newContact = {
      id: nanoid(3),
      name: name,
      number: number,
    };
    const isIncludeContact = newContact.name.toLowerCase();
    this.state.contacts.find(
      ({ name }) => name.toLowerCase() === isIncludeContact
    )
      ? alert('You have already contact with name:' + name)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  removeContact = e => {
    e.preventDefault();
    const removeId = e.currentTarget.value;
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => {
        return id !== removeId;
      }),
    }));
  };
  componentDidMount() {
    const getContacts = localStorage.getItem('contacts');
    const parceContact = JSON.parse(getContacts);
    if (parceContact) {
      this.setState({ contacts: parceContact });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    const currentContact = this.state.contacts;
    const prevContact = prevState.contacts;
    if (currentContact !== prevContact) {
      localStorage.setItem('contacts', JSON.stringify(currentContact));
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const FiltredContacts = this.getFiltredContacts();
    return (
      <>
        <PhoneBook onSubmit={this.handleSubmit} contacts={contacts} />
        <Phonelist filter={filter} changeFilter={this.changeFilter} />
        <PhoneListStyle>
          <ContactItem
            contacts={FiltredContacts}
            removeContact={this.removeContact}
          />
        </PhoneListStyle>
        <GlobalStyle />
      </>
    );
  }
}
