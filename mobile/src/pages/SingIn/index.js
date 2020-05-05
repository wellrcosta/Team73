import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import Button from '../../components/button';
import imgLogo from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

const SingIn = () => {
	const { signIn } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation();

	const navigateToRegister = () => {
		navigation.navigate('Register');
	};

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
						placeholder='**********'
						secureTextEntry={true}
					/>
				</View>
				<View style={styles.button}>
					<Button name='Entrar' onPress={signIn} />
				</View>

				<View style={styles.register}>
					<Text style={styles.textRegister}>Não tem conta?</Text>

					<TouchableOpacity
						style={styles.buttonRegister}
						onPress={navigateToRegister}
					>
						<Text style={styles.textButton}>Faça seu cadastro</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default SingIn;
