import { useEffect, useState } from "react";
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interface/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    const getMovies = async () => {
        const {data} = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setNowPlaying(data.results);
        setIsLoading(false);
    }
  
    useEffect(() => {
        getMovies();
    }, []);
    
    return {
        nowPlaying,
        isLoading
    }
}