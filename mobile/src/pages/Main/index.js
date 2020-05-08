import React from 'react';

import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import SingUpText from '../../components/SingUpText';
import imgGroup253 from '../../assets/group253.png';
import imgLogo from '../../assets/whiteLogo.png';

import styles from './styles';

export default function Main() {
	const navigation = useNavigation();

	const navigateToRegister = () => {
		navigation.navigate('Register');
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerTop}>
				<Text style={styles.title}>Só que sem sair de casa.</Text>
				<Image source={imgLogo} style={styles.imgLogo} />
				<Image source={imgGroup253} style={styles.imageHome} />
			</View>

			<Button onPress={navigateToRegister}>Registrar-se</Button>
			<SingUpText
				navigate='SingIn'
				primaryText='Já tem uma conta?'
				textOnPress='Entrar'
			/>
		</View>
	);
}
