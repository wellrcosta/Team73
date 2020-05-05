import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import SingIn from '../pages/SingIn';
import Register from '../pages/Register';
import Register2 from '../pages/Register/register2';

const Stack = createStackNavigator();

export default function AuthRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Main' component={Main} />
			<Stack.Screen name='SingIn' component={SingIn} />
			<Stack.Screen name='Register' component={Register} />
			<Stack.Screen name='Register2' component={Register2} />
		</Stack.Navigator>
	);
}
