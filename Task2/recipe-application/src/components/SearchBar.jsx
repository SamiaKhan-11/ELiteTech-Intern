import { useState } from "react";

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery(''); // Clear the input after searching
    }
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="border rounded px-4 py-2 flex-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
      <button
        onClick={onClear} // Use the onClear prop here
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Clear Results
      </button>
    </div>
  );
};

export default SearchBar;
