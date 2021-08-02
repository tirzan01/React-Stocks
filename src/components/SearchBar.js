import React from 'react';

const SearchBar = ({ handleChangeSortBy, handleChangeFilter }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name='sortBy' onChange={handleChangeSortBy}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name='sortBy' onChange={handleChangeSortBy}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChangeFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
