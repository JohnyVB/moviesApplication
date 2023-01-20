import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interface/movieInterface';

interface Props {
    actor: Cast[]
}

export const CastItem = ({actor}:Props) => {

    return (
        <View style={{marginBottom: 100}}>
            <Text style={styles.title}>
                Actores
            </Text>

            <FlatList 
                data={actor}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginVertical: 10, height: 70}}
                renderItem={({item}) => (
                    <View style={styles.cardContainer}>
                    {
                        item.profile_path && (
                            <Image 
                                source={{uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`}}
                                style={styles.image}
                            />
                        )
                    }
                    
                    <View style={styles.actorInfo}>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <Text style={styles.character}>
                            {item.character}
                        </Text>
                    </View>
                </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'black', 
        fontSize: 20, 
        marginTop: 10, 
        fontWeight: 'bold', 
        marginHorizontal: 20
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingRight: 25,
        paddingTop: 2,
        marginLeft: 20,
        height: 53,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 5,
        elevation: 5
    },
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 10
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 5
    },
    name: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'black'
    },
    character: {
        fontSize: 16, 
        opacity: 0.7, 
        color: 'black'
    }
});