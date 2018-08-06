import React from 'react';
import RestaurantsScreen from "../screens/Restaurants/Restaurants";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurant";
import LogoutScreen from "../screens/Logout";
import DetailRestaurantScreen from "../screens/Restaurants/DetailRestaurant";
import EditRestaurantScreen from "../screens/Restaurants/EditRestaurant";

import ProfileScreen from "../screens/Profile";

import {createDrawerNavigator, createStackNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import UserImageBar from '../components/UserImageBar';

const navigationOptions = {
	navigationOptions: {
		headerStyle: {
			backgroundColor: 'rgba(200, 38, 74, 1)',
		},
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center',
			fontSize: 20,
			color: '#fff',
			fontWeight: 'bold'
		}
	}
};

const userInfo = (navigation) => <UserImageBar 
	onOpen={() => navigation.openDrawer()}
/>;

const leftIcon = (navigation) => <UserImageBar 
	onOpen={() => navigation.openDrawer()}
/>;

const rightIcon = (navigation, icon) => <Icon
	name={icon}
	style={{marginLeft: 20}}
	size={30}
	color="white"
	onPress={() => navigation.navigate('ListRestaurants')}
/>;

const restaurantsScreenStack = createStackNavigator(
	{
		ListRestaurants: {
			screen: RestaurantsScreen,
			navigationOptions: ({navigation}) => ({
				title: 'Restaurantes',
				drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{color: tintColor}} />),
				headerTitle: userInfo(navigation)
			})
		},
		AddRestaurant: {
			screen: AddRestaurantScreen,
			navigationOptions: ({navigation}) => ({
				title: 'Añadir restaurante',
				headerRight: rightIcon(navigation, 'home'),
				headerTitle: leftIcon(navigation, 'bars'),
			})
		},
		DetailRestaurant: {
			screen: DetailRestaurantScreen,
			navigationOptions: ({navigation}) => ({
				title: 'Detalle del restaurante',
				headerRight: rightIcon(navigation, 'home'),
				headerLeft: leftIcon(navigation, 'bars'),
			})
		},
		EditRestaurant: {
			screen: EditRestaurantScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Editar restaurante',  // Title to appear in status bar
				headerRight: rightIcon(navigation, 'home'),
			})
		},
	},
	navigationOptions
);

const profileScreenStack = createStackNavigator(
	{
		ProfileScreen: {
			screen: ProfileScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'Perfil',
				drawerIcon: ({ tintColor }) => (<Icon name="user" size={24} style={{ color: tintColor }} />),
				headerLeft: leftIcon(navigation, 'bars'),
				headerRight: rightIcon(navigation, 'home'),
			})
		}
	},
	navigationOptions
);

const logoutScreenStack = createStackNavigator({
	LogoutScreen: {
		screen: LogoutScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Cerrar sesión',
			drawerIcon: ({ tintColor }) => (<Icon name="sign-out" size={24} style={{color: tintColor}} />)
		})
	}
});

export default createDrawerNavigator(
	{
		'Restaurantes': {
			screen: restaurantsScreenStack,
		},
		'Perfil usuario': {
			screen: profileScreenStack
		},
		'Cerrar sesión': {
			screen: logoutScreenStack
		}
	},
	{
		drawerBackgroundColor : 'rgba(128, 35, 60, 0.7)',
		contentOptions: {
			activeTintColor: 'white',
			activeBackgroundColor : 'transparent',
			inactiveTintColor : 'white',
			itemsContainerStyle: {
				marginVertical: 0,
			}
		},
	}
)