import React from 'react';

import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Carousell from '../../components/Carousell';
import SingUpText from '../../components/SingUpText';
import home_intro from '../../assets/home_intro.png';
import shopping_intro from '../../assets/shopping_intro.png';

import styles from './styles';

export default function Main() {
	const navigation = useNavigation();

	const navigateToRegister = () => {
		navigation.navigate('Register');
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerImages}>
				<Carousell images={[shopping_intro, home_intro]} />
			</View>

			<View style={styles.containerButtons}>
				<Button onPress={navigateToRegister}>Registrar-se</Button>

				<SingUpText
					primaryText='Já tem uma conta?'
					textOnPress='Faça login'
					navigate='SignIn'
				/>
			</View>
		</View>
	);
}
