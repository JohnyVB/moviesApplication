import { Cast, Credits, Details } from '../interface/movieInterface';
import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';

interface DetailsState {
    details: Details | {};
    cast: Cast | {};
    isLoading: boolean; 
}

interface Props {
    idMovie: number;
}

export const useMovieDetails = ({idMovie}: Props) => {
    const [detailsState, setDetailsState] = useState<DetailsState>({
        details: {},
        cast: {},
        isLoading: true
    })

    const getDetails = async () => {
        const resp = await Promise.all([
            movieDB.get<Details>(`/${idMovie}`),
            movieDB.get<Credits>(`/${idMovie}/credits`)
        ]);

        setDetailsState({
            details: resp[0].data,
            cast: resp[1].data.cast,
            isLoading: false
        });
    }

    useEffect(() => {
        getDetails();
    }, [])
    

    return {
        ... detailsState,
    }
}
