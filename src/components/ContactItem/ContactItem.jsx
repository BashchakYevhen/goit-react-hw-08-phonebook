import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItemStyle } from 'components/PhoneList/PhoneList.style';
import { delContact } from 'redux/operation';
import { getContactsData, getFilter } from 'redux/selectors';

export const ContactItem = () => {
  const contactsState = useSelector(getContactsData);
  const filterState = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFiltredContacts = () => {
    if (contactsState) {
      return contactsState.filter(contact =>
        contact.name.toLowerCase().includes(filterState.filter)
      );
    }
  };
  const visibleContact = getFiltredContacts();

  return visibleContact.map(({ id, name, number }) => {
    return (
      <ContactItemStyle key={id}>
        {name}: {number}
        <button
          type="button"
          value={id}
          onClick={() => {
            dispatch(delContact(id));
          }}
        >
          Delete
        </button>
      </ContactItemStyle>
    );
  });
};
ContactItem.proptype = {
  contacts: PropTypes.array.isRequired,
};
