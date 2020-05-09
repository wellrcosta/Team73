import React from 'react';

import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import SingUpText from '../../components/SingUpText';

import styles from './styles';

export default function Main() {
	const navigation = useNavigation();

	const navigateToRegister = () => {
		navigation.navigate('Register');
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerButtons}>
				<Button onPress={navigateToRegister}>Registrar-se</Button>
				<SingUpText
					navigate='SignIn'
					primaryText='Já tem uma conta?'
					textOnPress='Entrar'
				/>
			</View>
		</View>
	);
}
