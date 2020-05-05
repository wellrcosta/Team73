import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput } from 'react-native';

import imgLogo from '../../assets/logo.png';
import imgCelebrate from '../../assets/celebration.png';
import Button from '../../components/button';

import styles from './styles';

export default function Register() {
	const [password, setPassword] = useState('');
	const navigation = useNavigation();

	const navigateToHomePage = () => {
		navigation.navigate('Main');
	};

	return (
		<>
			<Image source={imgLogo} style={styles.imgLogo} />
			<View style={styles.container}>
				<Text style={styles.textTitle}>Agora digite sua senha</Text>

				<Text style={styles.labelName}>Escolha uma senha forte</Text>
				<TextInput
					style={styles.input}
					onChangeText={setPassword}
					secureTextEntry={true}
					placeholder='*****************'
				/>
				<Button name='Enviar' onPress={navigateToHomePage} />

				<Image source={imgCelebrate} style={styles.image} />
			</View>
		</>
	);
}
