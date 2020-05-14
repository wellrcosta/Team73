import React, { useState } from 'react';

import { View, Text, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgCelebration from '../../../assets/celebration.png';
import Button from '../../../components/Button';
import BoxWithLogo from '../../../components/BoxWithLogo';

import styles from './styles';

export default function PasswordRegister() {
	const [password, setPassword] = useState('');
	const navigation = useNavigation();

	const navigateToHomePage = () => {
		navigation.navigate('Main');
	};

	return (
		<BoxWithLogo>
			<View style={styles.boxTitle}>
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
					placeholder='****************'
					value={password}
				/>
				<Button onPress={navigateToHomePage}>Enviar</Button>
			</View>
			<View style={styles.containerImage}>
				<Image source={imgCelebration} style={styles.image} />
			</View>
		</BoxWithLogo>
	);
}
