import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput } from 'react-native';

import imgLogo from '../../assets/logo.png';

import SingUpText from '../../components/SingUpText';
import Button from '../../components/Button';
import OptionsLogin from '../../components/OptionsLogin';
import BoxWithLogo from '../../components/BoxWithLogo';

import styles from './styles';

export default function Register() {
	const [name, setName] = useState('');
	const navigation = useNavigation();

	const navigateToRegister2 = () => {
		navigation.navigate('Register2');
	};

	return (
		<BoxWithLogo>
			<View style={styles.top}>
				<Text style={styles.title}>Por favor, digite o seu</Text>
				<Text style={styles.title}>primeiro nome</Text>

				<Text style={[styles.title, styles.subtitle]}>
					Como gosta de ser chamado?
				</Text>
			</View>
			<View style={styles.boxForm}>
				<TextInput
					style={styles.input}
					onChangeText={setName}
					placeholder='Digite seu nome aqui'
				/>
				<Button onPress={navigateToRegister2}>Enviar</Button>

				<SingUpText
					primaryText='Já tem uma conta?'
					textOnPress='Entrar'
					navigate='SingIn'
				/>
				<OptionsLogin />
			</View>
		</BoxWithLogo>
	);
}
