import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

const {height: screenHeight} = Dimensions.get('screen');

export const DetailScreen = ({route}: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {details, cast, isLoading} = useMovieDetails({idMovie: movie.id});

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image 
            source={{uri}}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Icon 
          name='star-outline'
          color='grey'
          size={20}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      height: screenHeight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20
        
    },
    imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20
    },
    posterImage: {
      flex: 1   
    },
    infoContainer: {
      marginHorizontal: 20,
      marginTop: 20
    },
    subtitle: {
      fontSize: 16,
      opacity: 0.7
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    }
});
