import { PropTypes } from 'prop-types';
import { ContactItemStyle } from 'components/PhoneList/PhoneList.style';

export const ContactItem = ({ contacts, removeContact }) => {
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
  removeContact: PropTypes.func.isRequired,
};
