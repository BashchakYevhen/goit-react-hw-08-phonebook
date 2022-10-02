import { GlobalStyle } from 'globalstyle';
import { PhoneBook } from './phoneBook/PhoneBook';
import { Phonelist } from './PhoneList/PhoneList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { PhoneListStyle } from './PhoneList/PhoneList.style';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlise';
import { filterValue } from 'redux/filterSlise';

export const App = () => {
  const contactsState = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterState = useSelector(filterValue);
  function changeFilter(e) {
    dispatch(filterValue(e.currentTarget.value.toLowerCase().trim()));
  }

  const getFiltredContacts = () => {
    return contactsState.filter(contact =>
      contact.name.toLowerCase().includes(filterState.payload.filter.filter)
    );
  };

  return (
    <>
      <PhoneBook />
      <Phonelist changeFilter={changeFilter} />
      <PhoneListStyle>
        <ContactItem contacts={getFiltredContacts()} />
      </PhoneListStyle>
      <GlobalStyle />
    </>
  );
};
