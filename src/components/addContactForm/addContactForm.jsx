import { BookForm, BookLabel } from './addContactForm.style';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { getContactsData } from 'redux/selectors';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { ButtonStyle } from 'pages/login/login.style';

export const AddContactForm = () => {
  const contactsState = useSelector(getContactsData);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    console.log('NUMBER===>', form.elements);
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
        <Input
          borderColor={'#181818'}
          variant="filled"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </BookLabel>
      <BookLabel>
        Number
        <InputGroup borderColor={'#181818'}>
          <InputLeftAddon children="+48" />
          <Input
            name="number"
            borderColor={'#181818'}
            type="tel"
            placeholder="phone number"
            variant="filled"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputGroup>
      </BookLabel>
      <ButtonStyle type="submit">Add contact</ButtonStyle>
    </BookForm>
  );
};
