import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneList } from '../PhoneList/PhoneList';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { PhoneListStyle } from '../PhoneList/PhoneList.style';
import { filterValue } from 'redux/filterSlice';
import { fetchContacts } from 'redux/operation';
import { getIsLoading } from 'redux/selectors';
import { AddContactForm } from 'components/addContactForm/addContactForm';
import { Spinner } from '@chakra-ui/react';
import { Wrapper } from 'components/warper/wraper';

export default function PhoneBookPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  function changeFilter(e) {
    dispatch(filterValue(e.currentTarget.value.toLowerCase().trim()));
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <AddContactForm />
      <PhoneList changeFilter={changeFilter} />
      <PhoneListStyle>
        <ContactItem />
        {isLoading && <Spinner />}
      </PhoneListStyle>
    </Wrapper>
  );
}
