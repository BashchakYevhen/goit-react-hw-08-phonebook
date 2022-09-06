import { PropTypes } from 'prop-types';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      ></input>
    </label>
  );
};
Filter.propType = {
  filter: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
