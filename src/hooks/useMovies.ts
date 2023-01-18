import { useEffect, useState } from "react";
import movieDB from '../api/movieDB';
import { MovieDBNowResponse, Movie } from '../interface/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });

    const getMovies = async () => {

        const resp = await Promise.all([
            movieDB.get<MovieDBNowResponse>('/now_playing'),
            movieDB.get<MovieDBNowResponse>('/popular'),
            movieDB.get<MovieDBNowResponse>('/top_rated'),
            movieDB.get<MovieDBNowResponse>('/upcoming'),
        ]);

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ... moviesState,
        isLoading
    }
}