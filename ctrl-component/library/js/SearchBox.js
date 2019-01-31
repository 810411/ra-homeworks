const SearchBox = ({value, filterBooks}) => {
    return (
        <input
          type="text"
          placeholder="Поиск по названию или автору"
          value={value}
          onChange={event => filterBooks(event.target.value)}
        />
    );
};
