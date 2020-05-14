import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import Tell from '../pages/Register/TellRegister';
import ConfirmTell from '../pages/Register/ConfirmTellRegister';
import Password from '../pages/Register/PasswordRegister';

const Stack = createStackNavigator();

export default function AuthRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Main' component={Main} />
			<Stack.Screen name='SignIn' component={SignIn} />
			<Stack.Screen name='Register' component={Register} />
			<Stack.Screen name='Password' component={Password} />
			<Stack.Screen name='Tell' component={Tell} />
			<Stack.Screen name='ConfirmTell' component={ConfirmTell} />
		</Stack.Navigator>
	);
}
