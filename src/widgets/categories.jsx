//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/action/categoriActions';
import CategoryItem from '../components/widgets/categoryItem';
import { screenHeight, screenWidth } from '../utils/constans';

// create a component
const Categories = ({item}) => {
  const {categories} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:15,
   
    maxHeight:screenHeight*0.05
  },
});

//make this component available to the app
export default Categories;
