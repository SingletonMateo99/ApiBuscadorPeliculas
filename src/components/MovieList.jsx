import React from 'react'
import './MovieList.css'


const Card = (props)=> {
    return (
        <>
            {props.movies.map((movie, index)=> (
            <div className='List'>
                <img className='imagen'src={movie.Poster} alt="movie"></img>
                <div className='overlay'>
                    <h5>{movie.Title}</h5>
            
            </div>
            </div>
            ))}
        </>
    );
};

export default Card;

        // <div className='card'>
        //    <img className='imagen'  src={Logo2} alt="" /> 
        //     <div className='container'>
        //     <h5 className='tittle'>Nombre Pelicula</h5>
        //     <p className='description'>Descripcion breve de la pelicula</p>
        //     </div>
        // </div>