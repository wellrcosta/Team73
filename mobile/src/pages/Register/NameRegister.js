import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput } from 'react-native';

import SingUpText from '../../components/SingUpText';
import Button from '../../components/Button';
import BoxWithLogo from '../../components/BoxWithLogo';
import OptionsLogin from '../../components/OptionsLogin';

import styles from './styles';

export default function Register() {
	const [name, setName] = useState('');
	const navigation = useNavigation();

	const navigateToPassword = () => {
		navigation.navigate('Password');
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
				<Button onPress={navigateToPassword}>Enviar</Button>

				<SingUpText
					primaryText='Já tem uma conta?'
					textOnPress='Entrar'
					navigate='SingIn'
				/>
			</View>
			<OptionsLogin />
		</BoxWithLogo>
	);
}
