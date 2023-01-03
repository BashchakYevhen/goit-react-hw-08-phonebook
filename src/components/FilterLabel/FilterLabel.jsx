import { Input } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

export const FilterLabel = ({ changeFilter }) => {
  return (
    <label fontFamily="Lobster Two">
      Find contacts by name
      <Input
        w="300px"
        variant="flushed"
        borderColor={'#181818'}
        type="text"
        name="filter"
        placeholder="search number"
        onChange={changeFilter}
      ></Input>
    </label>
  );
};
FilterLabel.propType = {
  changeFilter: PropTypes.func.isRequired,
};
