import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../utils/DrawerContent';
import MainTabScreen from '../pages/MainTabScreen';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
	return (
		<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
		</Drawer.Navigator>
	);
}
