import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			<Button
				title='BaseScreen tests'
				//onPress={() => navigation.navigate('BaseScreen')}
			/>
		</View>
	);
};

export default HomeScreen;
