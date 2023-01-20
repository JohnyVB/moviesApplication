import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Details, Cast } from '../interface/movieInterface';
import currency from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    details: Details;
    cast: Cast[];
}

export const MovieDetails = ({details, cast}:Props) => {
    return (
        <>
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>

                    {/* Puntaje */}
                    <Icon name='star-outline' color='grey'size={16}/>
                    <Text style={{marginHorizontal: 7, color: 'black' }}>{details.vote_average.toFixed(1)} -</Text>

                    {/* Generos */}
                    <Text style={{color: 'black'}}>{ details.genres.map(g => g.name).join(', ')}</Text>
                </View>

                {/* Sinopsis */}
                <Text style={{color: 'black', fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                    Sinopsis
                </Text>
                <Text style={{color: 'black'}}>{details.overview}</Text>

                {/* Presupuesto */}
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{color: 'black', fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                        Presupuesto:
                    </Text>
                    <Text style={{color: 'black', fontSize: 15, marginTop: 15, marginLeft: 5}}>
                        {currency.format(details.budget, {code: 'USD'})}
                    </Text>
                </View>
            </View>
        
            <CastItem actor={cast} /> 
        </>
    )
}