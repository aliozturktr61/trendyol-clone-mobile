//import liraries
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../../theme/colors';
import widgets from '../../widgets/widgets.json';
import Categories from '../../widgets/categories';
import BestSeller from '../../widgets/bestSeller';
import ForYou from '../../widgets/forYou';
import screenStyle from '../../styles/screenStyles';
import Introduction from '../../widgets/introduction';


const HomeScreen = ({navigation}) => {
    //widgetItem değişkenine json dosyasındaki verilere göre sayfaları aktardık.
  const widgetItem = ({item}) => {
    //widgets içerisinde nesneleri liste şeklinde aktardık
    switch (item.name) {
    case 'categories':return <Categories item={item}/>;
    case 'introduction':return <Introduction item={item}/>;
    case 'bestSeller':return <BestSeller item={item}/>;
    case 'forYou':return <ForYou item={item}/>;
    }
  };
  return (
    <View style={screenStyle.container}>
      <FlatList data={widgets} renderItem={widgetItem} />
    </View>
  );
};


export default HomeScreen;
