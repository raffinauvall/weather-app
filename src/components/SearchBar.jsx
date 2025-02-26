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
            placeholder="Masukkan nama kota..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Cari</button>
        </form>
    )
}

export default SearchBar;