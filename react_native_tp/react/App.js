import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ListScreen from './screens/ListScreen';
import {Provider as PaperProvider} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PaperProvider>
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Credentials">
              <Tab.Screen name="Home" component={ListScreen} />
            </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
