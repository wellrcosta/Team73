import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';
import Global from '../../global';

import BaseScreen from '../BaseScreen';

const HomeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
	<Tab.Navigator initialRouteName='Home' activeColor='#fff'>
		<Tab.Screen
			name='Home'
			component={HomeStackScreen}
			onPress={() => navigation.openDrawer()}
			options={{
				tabBarLabel: 'Home',
				tabBarColor: Global.primary,
				tabBarIcon: ({ color }) => <Icon name='menu' color={color} size={26} />,
			}}
		/>
		<Tab.Screen
			name='Notifications'
			component={BaseScreen}
			options={{
				tabBarLabel: 'Search',
				tabBarColor: Global.primary,
				tabBarIcon: ({ color }) => (
					<Icon name='search' color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name='Profile'
			component={BaseScreen}
			options={{
				tabBarLabel: 'Orders',
				tabBarColor: Global.primary,
				tabBarIcon: ({ color }) => (
					<Icon name='clock' color={color} size={26} />
				),
			}}
		/>
		<Tab.Screen
			name='Explore'
			component={BaseScreen}
			options={{
				tabBarLabel: 'Messages',
				tabBarColor: Global.primary,
				tabBarIcon: ({ color }) => (
					<Icon name='message-circle' color={color} size={26} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: Global.primary,
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		}}
	>
		<HomeStack.Screen
			name='Home'
			component={BaseScreen}
			options={{
				title: 'MainMenu',
				headerLeft: () => (
					<Icon.Button
						name='menu'
						size={25}
						backgroundColor='transparent'
						onPress={() => navigation.openDrawer()}
					/>
				),
			}}
		/>
	</HomeStack.Navigator>
);
