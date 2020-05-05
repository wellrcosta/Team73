import React from 'react';

import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgGroup253 from '../../assets/group253.png';
import imgLogo from '../../assets/whiteLogo.png';

import SingUpText from '../../components/singUpText';
import Button from '../../components/button';

import styles from './styles';

export default function Main() {
	const navigation = useNavigation();

	const navigateToRegister = () => {
		navigation.navigate('Register');
	};

	return (
		<View style={styles.container}>
			<Image source={imgGroup253} style={styles.imgGroup} />
			<Image source={imgLogo} style={styles.imgLogo} />

			<Text style={styles.title}>Só que sem sair de casa.</Text>

			<View style={styles.containerBottom}>
				<Button
					style={styles.button}
					name='Registrar-se'
					onPress={navigateToRegister}
				/>
				<SingUpText />
			</View>
		</View>
	);
}
