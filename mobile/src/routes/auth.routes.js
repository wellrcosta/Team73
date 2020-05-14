import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import Register from '../pages/SignUp';
import Tell from '../pages/SignUp/TellRegister';
import ConfirmTell from '../pages/SignUp/ConfirmTellRegister';
import Password from '../pages/SignUp/PasswordRegister';

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
