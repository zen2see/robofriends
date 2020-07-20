import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input id='searchRobots'
        className='pa5 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
      />
      <label for='searchRobots'>Search Robots</label>
    </div>
  );
}

export default SearchBox;
