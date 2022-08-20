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
