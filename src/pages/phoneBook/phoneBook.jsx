import { GlobalStyle } from 'globalstyle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Phonelist } from '../../components/PhoneList/PhoneList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { PhoneListStyle } from '../../components/PhoneList/PhoneList.style';
import { filterValue } from 'redux/filterSlise';
import { fetchContacts } from 'redux/operation';
import { getIsLoading } from 'redux/selectors';
import { PhoneBookForm } from 'components/phoneBookForm/PhoneBookForm';
export const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  function changeFilter(e) {
    dispatch(filterValue(e.currentTarget.value.toLowerCase().trim()));
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PhoneBookForm />
      <Phonelist changeFilter={changeFilter} />
      <PhoneListStyle>
        {isLoading && <p>Loading contacts...</p>}
        <ContactItem />
      </PhoneListStyle>
      <GlobalStyle />
    </>
  );
};
