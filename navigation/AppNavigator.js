//Exportando librerias de nodes module
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SportsScreen from '../screens/SportsScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';
import { TabBarIOS } from 'react-native';

//creando la barra de navegador
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//dando nombre a cada items
const HomeStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="News"
      component={ HomeScreen }
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Article"
      component={ ArticleScreen }
    />
  </Stack.Navigator>
  )
}

//dando nombre a cada items
const SportsStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Sports"
      component={ SportsScreen }
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Article"
      component={ ArticleScreen }
    />
  </Stack.Navigator>
  )
}
//al dar clik a cada item, abrir pagina 
const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={ ClipScreen }/>
      <Stack.Screen name="Article" component={ ArticleScreen }/>
    </Stack.Navigator>
  )
}


//asignando icono a cada item
const screenOption = ({ route }) => ({
  tabBarIcon: ({ black, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = "home";
    } else if (route.name === 'Favorite') {
      iconName = "star"
    }

    if (route.name === 'Sports') {
      iconName = "futbol-o" 
    }

    // ¡Puede devolver cualquier componente que desee aquí!
    return <FontAwesome name={iconName} size={size} color={black} />;
  },
})//orden de los items en la barra de navegador
export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ screenOption }>
        <Tab.Screen name="Home" component={ HomeStack }/>
        <Tab.Screen name="Sports" component={ SportsStack }/>
        <Tab.Screen name="Favorite" component={ ClipStack }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}