//import liraries
import React ,{useEffect}from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import appColors from '../theme/colors';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import { getProducts } from '../store/action/productAction';

// create a component
const ForYou = ({item}) => {
  const {forYouProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({limit:4,category:"women's clothing"}));
  }, []);
  const {pending, products} = useSelector(state => state.products);
  return (
    <View style={styles.container}>
      <WidgetTitle title={item.title} seeAll={item.seeAll} category="women's clothing"/>
      {/* alınan veriler flatlist ile ekrana aktarılıyor. */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        data={forYouProducts}
        renderItem={({item}) => <ProductItem product={item} category="women's clothing"/>}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.WHITE,
  },
});

//make this component available to the app
export default ForYou;
