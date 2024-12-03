//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTS } from '../utils/routes';

// create a component
const Introduction = ({item}) => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
      onPress={()=>navigation.navigate(PRODUCTS)}
      >
      <Image
          source={{
            uri: 'https://cdn.dsmcdn.com/ty1440/pimWidgetApi/mobile_20240725153137_3019200KadinMobile202407251803.jpg',
          }}
          style={{
            height: 200,
            width: 400,
            resizeMode: 'contain',
            borderRadius: 10,
          }}
        />
      </Pressable>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:10
  },
});

//make this component available to the app
export default Introduction;
