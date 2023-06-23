import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screen/splash';
import Contact from '../screen/contact';
import Tambah from '../screen/tambah';
import Doa from '../screen/doa/Doa';
import IsiDoa from '../screen/isiDoa/isiDoa';
import Chapter1 from '../screen/fitur/Chapter1';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="contact"
          component={Contact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="doa"
          component={Doa}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="isiDoa"
          component={IsiDoa}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tambah"
          component={Tambah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="chapter1"
          component={Chapter1}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
