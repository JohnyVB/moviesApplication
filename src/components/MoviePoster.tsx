import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interface/movieInterface';

interface Props {
    movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;   
        
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={styles.poster} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 420
    },
    poster: {
        flex: 1,
        borderRadius: 12
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
});