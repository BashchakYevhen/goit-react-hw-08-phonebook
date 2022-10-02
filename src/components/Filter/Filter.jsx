import { PropTypes } from 'prop-types';

export const Filter = ({ changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={changeFilter}></input>
    </label>
  );
};
Filter.propType = {
  changeFilter: PropTypes.func.isRequired,
};
