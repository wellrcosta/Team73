import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './utils/DrawerContent';

import MainTabScreen from './pages/MainTabScreen';

const Drawer = createDrawerNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
				<Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
