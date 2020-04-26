import React from 'react';
import { View ,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  IndexScreen from './src/screens/IndexScreen';
const Stack = createStackNavigator();

const App =() =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IndexScreen">
     <Stack.Screen name="IndexScreen" options={{headerTitle:"Home"}} component={IndexScreen} />
     </Stack.Navigator>
</NavigationContainer>
    );

}

export default App;