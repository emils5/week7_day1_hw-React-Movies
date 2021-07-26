import React from "react";
import Movie from './Movie';

const MoviesList = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <Movie url={movie.url} name={movie.name} key={movie.id} />
        )
    });

    return (
        <>
        <ul> 
        {movieNodes}
        </ul>
        </>
    )
}

export default MoviesList;