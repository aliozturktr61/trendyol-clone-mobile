//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { CART, FAVORİTES, HOMESCREEN, PROFİLE, TRENDYOLGO } from '../../utils/routes';
import { Google, Heart, Home, Profile, ShoppingCart } from 'iconsax-react-native';

// create a component
const TabIcon = ({name,size,color,focused}) => {
   switch (name) {
    case HOMESCREEN:
        return<Home size={size} color={color} variant={focused?'Bold':"Outline"}/>;
        break;
        case TRENDYOLGO:
            return<Google size={size} color={color} variant={focused?'Bold':"Outline"}/>;
        break;
        case FAVORİTES:
            return<Heart size={size} color={color} variant={focused?'Bold':"Outline"}/>;
        break;
        case CART:
            return<ShoppingCart size={size} color={color} variant={focused?'Bold':"Outline"}/>;
            break;
        case PROFİLE:
            return<Profile size={size} color={color} variant={focused?'Bold':"Outline"}/>;
    default:return<Home size={size} color={color} variant={focused?'Bold':"Outline"}/>;
        break;
   }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TabIcon;
