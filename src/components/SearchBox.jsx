import React from 'react'
import './SearchBox.css'

const SearchBox=(props) => {
    return (
        <div className='searchContainer'>
            <input className='searchInput '
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
             placeholder='Insert Movie'
             ></input> 
            
        </div>
    )
}

export default SearchBox;
