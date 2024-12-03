//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appColors from '../../theme/colors';

// create a component
const Favorites= () => {
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.WHITE,
    },
});

//make this component available to the app
export default Favorites;