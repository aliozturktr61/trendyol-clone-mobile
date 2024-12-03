import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import screenStyle from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/action/productAction';
import ProductItem from '../../components/products/productItem';
import Spinner from '../../components/ui/spinner';
import Categories from '../../widgets/categories';
const Products = ({route}) => {
  const {pending, products} = useSelector(state => state.products);
  const {selectedCategory} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const category = route?.params?.category;

  useEffect(() => {
    dispatch(
      getProducts({
        category: selectedCategory?selectedCategory : category,
      }),
    );
  }, [selectedCategory,category]);
  return (
    <View style={screenStyle.container}>
      {/* alınan veriler flatlist ile ekrana aktarılıyor. */}
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          ListHeaderComponent={<Categories />}
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

export default Products;
