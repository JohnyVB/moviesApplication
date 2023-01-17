import React from 'react';
import { ActivityIndicator, Dimensions, Text, View } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

const {width: w} = Dimensions.get('window');

export const HomeScreen = () => {

  const {nowPlaying, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    )
  }

  return (
    <View style={{marginTop: top + 20}}>
      <View style={{height: 440}}>
        <Carousel 
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} /> }
            sliderWidth={w}
            itemWidth={300}
        />
      </View>
    </View>
  )
}
