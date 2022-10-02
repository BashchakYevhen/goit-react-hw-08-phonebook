import { Filter } from 'components/Filter/Filter';
import { PropTypes } from 'prop-types';
import { PhoneFilter } from './PhoneList.style';
export const Phonelist = ({ changeFilter }) => {
  return (
    <PhoneFilter>
      <h1>Contacts</h1>
      <Filter changeFilter={changeFilter} />
    </PhoneFilter>
  );
};

Phonelist.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
