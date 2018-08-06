import React from 'react';
import {StackNavigator, createStackNavigator} from "react-navigation";
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import DropdownScreen from "../screens/Pruebas/Dropdown";

export default createStackNavigator(
	{
		Start: {
			screen: StartScreen,
		},
		Login: {
			screen: LoginScreen
		},
		Register: {
			screen: RegisterScreen
		},
    Dropdown: {
      screen: DropdownScreen
    },
	},
	{
		initialRouteName: 'Start',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e'
			},
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontSize: 20,
				color: '#fff',
				fontWeight: 'bold'
			}
		}
	}
)