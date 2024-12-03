import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import screenStyle from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getProductInfo} from '../../store/action/productAction';
import Spinner from '../../components/ui/spinner';
import appColors from '../../theme/colors';
import {screenHeight, screenWidth} from '../../utils/constans';
import {Star} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import Button from '../../components/ui/button';
/* Ürün bilgilerini alabilmek için productAction içerisinden getProducInfo ile istek oluşturduk */
const ProductDetail = ({route}) => {
  const productId = route?.params?.productId;
  const {pendingDetail, productInfo} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductInfo({id: productId}));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColors.WHITE}}>
      <View style={screenStyle.container}>
        {pendingDetail ? (
          <Spinner />
        ) : (
          <View style={styles.container}>
            <ScrollView>
              <Image style={styles.image} source={{uri: productInfo.image}} />
              <Text style={styles.title}>Product: {productInfo?.title}</Text>
              <Text style={styles.category}>
                Category: {productInfo?.category}
              </Text>
              <View style={styles.rateContainer}>
                <Star size={20} color={appColors.YELLOW} variant="Bold" />
                <Text style={styles.rate}>{productInfo?.rating?.rate}</Text>
              </View>
              <Text style={styles.description}>
                Details: {productInfo?.description}
              </Text>
            </ScrollView>
          </View>
        )}

        <View style={styles.infoContainer}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <Text style={styles.price}>{convertPrice(productInfo.price)}</Text>
            <Text style={styles.cargoText}>Kargo Bedava</Text>
          </View>
          <View
            style={{
              flex:2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button title="Hemen Al" buttonType="outline"/>
            <Button title="Sepete Ekle" buttonType="flat"/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  cargoText: {
    fontSize: 12,
    color: appColors.GREEN,
  },
  image: {
    height: screenHeight * 0.35,
    resizeMode: 'contain',
    width: screenWidth,
  },
  title: {fontSize: 20, fontWeight: '500', marginVertical: 10},
  category: {fontSize: 20, fontWeight: '500', color: appColors.GRAY},
  infoContainer: {
    borderTopWidth: 1,
    borderColor: appColors.SOFTGRAY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  description: {fontSize: 16, fontWeight: '300', marginVertical: 10},
  favoriteContainer: {position: 'absolute', top: 10, right: 10},
  price: {fontSize: 18, fontWeight: '500', color: appColors.PRİMARY},
  rate: {fontSize: 12},
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default ProductDetail;
