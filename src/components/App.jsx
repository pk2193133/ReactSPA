
import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";
import SearchForm from "./SearchForm";
import GenreSelect from "./GenreSelect";


const App = () => {
  const counter=React.createElement(Counter, { value: 10 });

  const onSearch=(query)=>{
    console.log(`Searching for: ${query}`)
  }
 
  const onSelect=(genre)=>{
    console.log(`Selected genre: ${genre}`);
  }

  const selectedGenre = "Action"; 
  const listGenres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

    return (
        <div>
            {counter}
            <div style={{ display: "flex", marginTop: "20px" , justifyContent: "space-between", alignItems: "center"}}>
            <GenreSelect listGenres={listGenres} selectedGenre={selectedGenre} onSelect={onSelect} />
            <SearchForm query="movie" onSearch={onSearch} />
            </div>
        </div>
    )
};

const root = createRoot(document.getElementById("root"));
root.render(<App></App>);