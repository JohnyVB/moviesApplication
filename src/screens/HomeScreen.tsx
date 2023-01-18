import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: w} = Dimensions.get('window');

export const HomeScreen = () => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>

        {/* Principal */}
        <View style={{height: 440}}>
          <Carousel 
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={w}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Populares */}
        <HorizontalSlider title='Populares' movies={popular} />

        {/* Los más valorados */}
        <HorizontalSlider title='Los más valorados' movies={topRated} />

        {/* Proximamente */}
        <HorizontalSlider title='Proximamente' movies={upcoming} />  

      </View>
    </ScrollView>
  )
}
