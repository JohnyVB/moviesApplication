import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interface/movieInterface';

interface Props {
    movie: Movie;
    imageHeight?: number;
    imageWidth?: number;
}

export const MoviePoster = ({movie, imageHeight = 420, imageWidth = 300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const navigation = useNavigation();
        
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen' as never, movie as never)}
            activeOpacity={0.8} 
            style={{
                height: imageHeight, 
                width: imageWidth, 
                marginHorizontal: 2, 
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
        >
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={styles.poster} 
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

        elevation: 10
    }
});