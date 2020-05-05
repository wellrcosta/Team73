import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import imgLogo from '../../assets/logo.png';

import Button from '../../components/button';

export default function SingIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Image source={imgLogo} style={styles.imgLogo} />
			<View style={styles.container}>
				<View style={styles.boxTitle}>
					<Text style={styles.textTitle}>Já tem uma conta?</Text>
					<Text style={styles.textTitle}>Faça seu login</Text>
				</View>

				<View style={styles.boxForm}>
					<TextInput
						onChangeText={setEmail}
						style={styles.input}
						placeholder='email@exemplo.com'
					/>
					<TextInput
						onChangeText={setPassword}
						style={styles.input}
						placeholder='********'
					/>
				</View>
				<View style={styles.button}>
					<Button name='Entrar' />
				</View>

				<View style={styles.register}>
					<Text style={styles.textRegister}>Não tem conta?</Text>
					<TouchableOpacity style={styles.buttonRegister}>
						<Text style={styles.textButton}>Faça seu cadastro</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}
