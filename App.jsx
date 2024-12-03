//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

// create a component
const App = () => {

  return (
   <Provider store={store}>
     <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
   </Provider>
  );
};



//make this component available to the app
export default App;
