import "./SearchBar.scss";

const SearchBar = ({ searchTerm, handleInput }) => {
  return (
    <div className="searchBar">
      <div className="searchBar__caption"> Find your next course !...</div>
      <div>
        <input
          className="searchBar__input"
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onInput={handleInput}
          placeholder="Enter your search term here..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
