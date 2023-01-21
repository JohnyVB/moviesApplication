import ImageColors from 'react-native-image-colors'

interface Props {
    uri: string
}

export const getColors = async ({uri}:Props) => {
    let primary, secondary;

    const result = await ImageColors.getColors(uri, {});
    
    if (result.platform === 'android') {
        primary = result.dominant;
        secondary = result.average;
    }else if(result.platform ==='ios'){
        primary = result.primary;
        secondary = result.secondary;
    }

    return {
        primary,
        secondary
    }
}
