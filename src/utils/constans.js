import {Dimensions} from 'react-native';
//uygulamanın çalışştırıldığı ekranın genişlik ve yükseklik değerlerini alır.
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export {screenHeight, screenWidth};
