import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import Dashboard from './Pages/Dashboard'
const Stack= createNativeStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Group>

            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="signin" component={SignIn}/>
            <Stack.Screen name="dashboard" component={Dashboard}/>
        </Stack.Group>

    </Stack.Navigator>
  )
}