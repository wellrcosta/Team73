import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const SingUpText = () => {
	const navigation = useNavigation();

	const navigateToLogin = () => {
		navigation.navigate('SingIn');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.registerText}>Já tem uma conta?</Text>
			<TouchableOpacity style={styles.buttonRegister} onPress={navigateToLogin}>
				<Text style={styles.textButton}>Faça login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SingUpText;
