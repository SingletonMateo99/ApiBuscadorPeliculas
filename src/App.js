import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css'
//Componentes importados
import Nav from './components/Nav.jsx';
import MovieList from './components/MovieList.jsx';
import SearchBox from './components/SearchBox.jsx';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('')


    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f34798d8`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);


    return (
        <div>
            <div className='navContainer'>
                <Nav />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='movieContainer'>

                <MovieList movies={movies} />
                
                
            </div>

        </div>
    )
}

export default App
