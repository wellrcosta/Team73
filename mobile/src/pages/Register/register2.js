import React, { useState } from 'react';

import { View, Image, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgLogo from '../../assets/logo.png';
import imgCelebrate from '../../assets/celebration.png';
import Button from '../../components/Button';
import BoxWithLogo from '../../components/BoxWithLogo';

import styles from './styles';

export default function Register() {
	const [password, setPassword] = useState('');
	const navigation = useNavigation();

	const navigateToHomePage = () => {
		navigation.navigate('Main');
	};

	return (
		<BoxWithLogo>
			<View style={styles.top}>
				<Text style={styles.title}>Agora digite sua senha</Text>
				<Text style={[styles.title, styles.subtitle]}>
					Escolha uma senha forte
				</Text>
			</View>

			<View style={styles.boxForm}>
				<TextInput
					style={styles.input}
					onChangeText={setPassword}
					secureTextEntry={true}
					placeholder='*****************'
				/>
				<Button onPress={navigateToHomePage}>Enviar</Button>
			</View>
			<Image source={imgCelebrate} style={styles.image} />
		</BoxWithLogo>
	);
}
