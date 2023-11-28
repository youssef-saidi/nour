import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ListProfile from '../components/Home/ListProfile'
import Groupe from '../components/Home/Groupe'
import MyAccount from '../components/Home/MyAccount'

const Tab = createMaterialBottomTabNavigator()

const Home = ({ navigation }) => {
  return (

    <Tab.Navigator>
      <Tab.Screen name="MyAccount" component={MyAccount} />
      <Tab.Screen name="ListProfile" component={ListProfile} />
      <Tab.Screen name="Groupe" component={Groupe} />

    </Tab.Navigator>

  )
}
export default Home;