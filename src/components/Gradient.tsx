import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../contexts/GradientContext';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Gradient = ({children}:Props) => {

    const {colors} = useContext(GradientContext);

    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={[colors.primary, colors.secondary, 'white']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.6, y: 0.6}}
                style={{... StyleSheet.absoluteFillObject}}
            />
            {children}
        </View>
    )
}