import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register/NameRegister';
import Cell from '../pages/Register/CellRegister';
import ConfirmCell from '../pages/Register/ConfirmCellRegister';
import Password from '../pages/Register/PasswordRegister';

const Stack = createStackNavigator();

export default function AuthRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Main' component={Main} />
			<Stack.Screen name='SignIn' component={SignIn} />
			<Stack.Screen name='Register' component={Register} />
			<Stack.Screen name='Password' component={Password} />
			<Stack.Screen name='Cell' component={Cell} />
			<Stack.Screen name='ConfirmCell' component={ConfirmCell} />
		</Stack.Navigator>
	);
}
