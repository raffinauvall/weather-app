import { useState } from "react";
import "../App.css";
import PropTypes from "prop-types"; // ✅ Fix typo

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim() === "") return;
        onSearch(city);
        setCity("");
    };

    return (
        <form onSubmit={handleSearch}>
            <input
            type="text"
            className="border border-white text-white rounded h-auto p-2 w-full mb-2"
            placeholder="Enter the city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <button
        type="submit"
        className="bg-zinc-700 mb-4 text-white p-1 rounded w-full"
        >
        Look for the weather
        </button>
        </form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
