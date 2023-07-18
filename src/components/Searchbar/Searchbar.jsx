export const SearchFrom = ({ onSubmit, onChange }) => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button" onClick={onSubmit}>
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          name="search"
          onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
