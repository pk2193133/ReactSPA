import React from "react";

const SearchForm=({query,onSearch})=>{ 

  const [inputValue, setInputValue] = React.useState(query);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(inputValue);
    }
  }

  return( 
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} 
        placeholder={query}
      /> 
      <button type="submit" onClick={()=>onSearch(inputValue)}>Search</button> 
    </div>  
  ); 
}
export default SearchForm;