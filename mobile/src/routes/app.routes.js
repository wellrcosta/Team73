import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../utils/DrawerContent';
import MainTabScreen from '../pages/MainTabScreen';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
	return (
		<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen name='Home' component={Home} />
			<Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
		</Drawer.Navigator>
	);
}
