import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StatusBar,View,Text} from 'react-native'
import Home from './src/screens/Home';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar animated={true} backgroundColor="#750a02"  barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{
            title:'Jazz World',

            headerStyle: {
              backgroundColor: '#c71c06',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '1000',
              fontSize:17
            },
            headerTitleAlign:'center',
            headerLeft:()=>(
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:60, marginLeft:10 }}>
                <Ionicons name="notifications-outline" color="white" size={22}/>
                <Ionicons name="gift-outline" color="white" size={22}/>
              </View>
            ),
            
            headerRight:()=>(
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:90, marginRight:10 }}>
                <Ionicons name="arrow-redo-outline" color="white" size={22}/>
                <Ionicons name="search-outline" color="white" size={22}/>
                <Ionicons name="menu-outline" color="white" size={22}/>
              </View>
            )
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
