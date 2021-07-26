import React from "react";

const Movie = ({name, url}) => {
    return (
        <>
        <ul>
            <a href={url}>{name}</a>
        </ul>
        </>
    )


}
export default Movie;