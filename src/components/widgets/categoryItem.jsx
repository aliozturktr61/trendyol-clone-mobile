//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slice/categoriesSlice';
import appColors from '../../theme/colors';
import { screenHeight, screenWidth } from '../../utils/constans';

// create a component
const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        selectedCategory == category
          ? styles.activeCategoryContainer
          : styles.inActiveCategoryContainer,
      ]}>
      <Text
        style={[
          selectedCategory == category
            ? styles.activeTitle
            : styles.inActiveTitle,
        ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 0.5,
    marginHorizontal:5,
    maxHeight:screenHeight*0.04,
    maxWidth:screenWidth*0.6,
  },
  activeCategoryContainer: {
    backgroundColor: appColors.PRİMARY,
    borderColor:appColors.PRİMARY,
  },
  inActiveCategoryContainer: {
    backgroundColor: appColors.WHITE,
    
  },
  activeTitle: {fontWeight:"500",
    color: appColors.WHITE,
  },
  inActiveTitle: {fontWeight:"500",
    color: appColors.BLACK,
  },
});

//make this component available to the app
export default CategoryItem;
