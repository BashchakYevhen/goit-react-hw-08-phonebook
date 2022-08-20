import { Filter } from 'components/Filter/Filter';
import { PhoneFilter } from './PhoneList.style';
export const Phonelist = ({ filter, changeFilter }) => {
  return (
    <PhoneFilter>
      <h1>Contacts</h1>
      <Filter filter={filter} changeFilter={changeFilter} />
    </PhoneFilter>
  );
};
