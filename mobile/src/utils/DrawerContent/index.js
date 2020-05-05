import React from 'react';

import { View } from 'react-native';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function DrawerContent(props) {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: 'row', marginTop: 15 }}>
							<Avatar.Image
								source={{
									uri:
										'https://assets.xtechcommerce.com/uploads/images/medium/956549d0186df5b64de457c97cbe389d.png',
								}}
								size={50}
							/>
							<View style={{ marginLeft: 15, flexDirection: 'column' }}>
								<Title style={styles.title}>Wellington Reis</Title>
								<Caption style={styles.caption}>@wreis</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='home-outline' color={color} size={size} />
							)}
							label='Home'
							onPress={() => navigation.openDrawer()}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='account-outline' color={color} size={size} />
							)}
							label='Profile'
							onPress={() => {
								props.navigation.navigate('Profile');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='clock-outline' color={color} size={size} />
							)}
							label='Orders'
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='settings-outline' color={color} size={size} />
							)}
							label='Settings'
							onPress={() => {
								props.navigation.navigate('SettingScreen');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='account-check-outline' color={color} size={size} />
							)}
							label='Support'
							onPress={() => {
								props.navigation.navigate('SupportScreen');
							}}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon name='exit-to-app' color={color} size={size} />
					)}
					label='Sign Out'
				/>
			</Drawer.Section>
		</View>
	);
}
