import { PropTypes } from 'prop-types';
import { ContactItemStyle } from 'components/PhoneList/PhoneList.style';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactSlise';
export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const removeContact = e => {
    const removeId = e.currentTarget.value;
    dispatch(delContact(removeId));
  };

  return contacts.map(({ id, name, number }) => {
    return (
      <ContactItemStyle key={id}>
        {name}: {number}
        <button type="button" value={id} onClick={removeContact}>
          Delete
        </button>
      </ContactItemStyle>
    );
  });
};
ContactItem.proptype = {
  contacts: PropTypes.array.isRequired,
};
