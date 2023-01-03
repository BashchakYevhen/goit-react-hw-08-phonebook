import { FilterLabel } from 'components/FilterLabel/FilterLabel';
import { PropTypes } from 'prop-types';
import { PhoneFilter } from './PhoneList.style';
export const PhoneList = ({ changeFilter }) => {
  return (
    <PhoneFilter>
      <h1>Contacts</h1>
      <FilterLabel changeFilter={changeFilter} />
    </PhoneFilter>
  );
};

PhoneList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
