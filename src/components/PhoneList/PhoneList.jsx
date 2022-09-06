import { Filter } from 'components/Filter/Filter';
import { PropTypes } from 'prop-types';
import { PhoneFilter } from './PhoneList.style';
export const Phonelist = ({ filter, changeFilter }) => {
  return (
    <PhoneFilter>
      <h1>Contacts</h1>
      <Filter filter={filter} changeFilter={changeFilter} />
    </PhoneFilter>
  );
};

Phonelist.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
