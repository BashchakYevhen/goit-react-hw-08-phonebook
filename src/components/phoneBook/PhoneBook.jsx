import { BookForm, BookLabel } from './PhoneBook.style';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { getContactsData } from 'redux/selectors';

export const PhoneBook = () => {
  const contactsState = useSelector(getContactsData);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isIncludeContact = name.toLowerCase();
    contactsState.find(contact => {
      return contact.name.toLowerCase() === isIncludeContact;
    })
      ? alert('You have already contact with name:' + name)
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <BookForm onSubmit={handleSubmit}>
      <BookLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </BookLabel>
      <BookLabel>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </BookLabel>
      <button type="submit">Add contact</button>
    </BookForm>
  );
};
