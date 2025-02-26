import { useState } from "react";
import "../App.css";

const SearchBar = ({onSearch}) => {
    const [city,setCity] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim() === "") return;
        onSearch(city);
        setCity("");
    }

    return(
        <form onSubmit={handleSearch}>
            <input type="text"
            className="border border-white text-white rounded h-auto p-2 w-full mb-2"
            placeholder="Masukkan nama kota..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="bg-zinc-700  mb-4 text-white p-1 rounded w-full">Cari cuaca</button>
        </form>
    )
}

export default SearchBar;