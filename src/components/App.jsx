import { GlobalStyle } from 'globalstyle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneBook } from './phoneBook/PhoneBook';
import { Phonelist } from './PhoneList/PhoneList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { PhoneListStyle } from './PhoneList/PhoneList.style';
import { filterValue } from 'redux/filterSlise';
import { fetchContacts } from 'redux/operation';
import { getContactsData, getIsLoading } from 'redux/selectors';

export const App = () => {
  const contactsState = useSelector(getContactsData);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  console.log(contactsState);

  function changeFilter(e) {
    dispatch(filterValue(e.currentTarget.value.toLowerCase().trim()));
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhoneBook />
      <Phonelist changeFilter={changeFilter} />
      <PhoneListStyle>
        {isLoading && <p>Loading contacts...</p>}
        <ContactItem />
      </PhoneListStyle>
      <GlobalStyle />
    </>
  );
};
