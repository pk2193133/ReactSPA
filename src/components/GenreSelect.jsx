import React from 'react';

const GenreSelect= ({ listGenres, selectedGenre, onSelect }) => {
  const [currentGenre, setCurrentGenre] = React.useState(selectedGenre || null);

  const handleChange=(e)=>{
    setCurrentGenre(e.target.innerText);
    onSelect(e.target.innerText);
  }

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {listGenres.map((genre) => (
          <button 
          key={genre}
          onClick={(e)=>handleChange(e)} 
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            border: currentGenre === genre ? "2px solid #007bff" : "1px solid #ccc",
            background: currentGenre === genre ? "#e6f0ff" : "#fff",
            color: currentGenre === genre ? "#007bff" : "#333",
            cursor: "pointer",
            fontWeight: currentGenre === genre ? "bold" : "normal",
            outline: "none"
          }}
          >{genre}
          </button>
        ))}
      </div>
  );
}
export default GenreSelect;