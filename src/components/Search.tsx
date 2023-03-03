import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements["search"].value;
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <form className="flex items-center" onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        className="border border-stone-900 rounded p-2 mr-2"
      />
      <button type="submit" className="bg-stone-900 text-white rounded p-2">
        Search
      </button>
    </form>
  );
}

export default Search;
