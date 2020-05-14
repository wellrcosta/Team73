import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput } from 'react-native';

import SingUpText from '../../components/SingUpText';
import Button from '../../components/Button';
import BoxWithLogo from '../../components/BoxWithLogo';

import styles from './styles';

export default function NameRegister() {
	const [name, setName] = useState('');
	const navigation = useNavigation();

	const navigateToCell = () => {
		navigation.navigate('Tell');
	};

	return (
		<BoxWithLogo>
			<View style={styles.boxTitle}>
				<Text style={styles.title}>Por favor, digite o seu</Text>
				<Text style={styles.title}>primeiro nome</Text>
			</View>

			<View style={styles.boxForm}>
				<Text style={[styles.title, styles.subtitle]}>
					Como gosta de ser chamado?
				</Text>

				<TextInput
					style={styles.input}
					onChangeText={setName}
					placeholder='Digite seu nome aqui'
				/>
				<Button onPress={navigateToCell}>Enviar</Button>

				<SingUpText
					primaryText='Já tem uma conta?'
					textOnPress='Faça login'
					navigate='SignIn'
				/>
			</View>
		</BoxWithLogo>
	);
}
