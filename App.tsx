import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/contexts/GradientContext';

const AppState = ({children}: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  )
}
