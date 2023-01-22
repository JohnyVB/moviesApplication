import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/contexts/GradientContext';
import SplashScreen from 'react-native-splash-screen';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

export const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  )
}
