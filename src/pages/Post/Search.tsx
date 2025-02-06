import Button from "@components/Button";

interface SearchProps {
  search: string;
  onChange: (search: string) => void;
  onSearch: () => void;
}

const Search = ({ search, onChange, onSearch }: SearchProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};

export default Search;
