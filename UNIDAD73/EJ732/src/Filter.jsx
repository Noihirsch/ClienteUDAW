function Filter({ onFilter }) {
    return (
      <input
        type="text"
        color="orange"
        placeholder="Filtrar por nacionalidad"
        onChange={(e) => onFilter(e.target.value)}
      />
    );
  }
  
  export default Filter;