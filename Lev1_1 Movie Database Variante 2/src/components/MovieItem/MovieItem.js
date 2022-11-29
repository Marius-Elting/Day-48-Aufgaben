import './MovieItem.css';
import React, { useState } from 'react';


function MovieItem(props) {
    const [movies, setmovies] = useState(props.movies);



    let sortByDataAc = () => {
        const movieCopy = [...props.movies];
        movieCopy.sort(compareDateAc);
        setmovies(movieCopy);
    };

    let sortByDataDc = () => {
        const movieCopy = [...props.movies];
        movieCopy.sort(compareDateDc);
        setmovies(movieCopy);

    };

    function compareDateAc(a, b) {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        return 0;
    }
    function compareDateDc(a, b) {
        if (a.year < b.year) {
            return 1;
        }
        if (a.year > b.year) {
            return -1;
        }
        return 0;
    }

    let sortByRate = () => {
        const movieCopy = [...props.movies];
        movieCopy.sort(compareRate);
        setmovies(movieCopy);

    };
    function compareRate(a, b) {
        if (a.rate < b.rate) {
            return 1;
        }
        if (a.rate > b.rate) {
            return -1;
        }
        return 0;
    }

    let sortAZ = () => {
        const movieCopy = [...props.movies];
        movieCopy.sort(compareAZ);
        setmovies(movieCopy);

    };
    function compareAZ(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }

    let sortZA = () => {
        const movieCopy = [...props.movies];
        movieCopy.sort(compareZA);
        setmovies(movieCopy);

    };
    function compareZA(a, b) {
        if (a.title < b.title) {
            return 1;
        }
        if (a.title > b.title) {
            return -1;
        }
        return 0;
    }

    return (<div>
        <div>
            <button onClick={sortByDataAc}>Sort by Dae Ascending</button>
            <button onClick={sortByDataDc}>Sort by Date Descending</button>
            <button onClick={sortByRate}>Rate</button>
            <button onClick={sortAZ}>A-Z</button>
            <button onClick={sortZA}>Z-A</button>
        </div>
        {
            movies.map((movie) => {
                // Ein Key ist ein Einzigartiger Wert, z.B eine id
                return (<div className="Card">
                    <p>{movie.title}</p>s
                    <p>{movie.year}</p>
                    <p>{movie.director}</p>
                    <p>{movie.duration}</p>
                    <p className="genre">{movie.genre}</p>
                    <p>{movie.rate}</p>
                </div>);
            })}
    </div>);
}

export default MovieItem;