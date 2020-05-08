import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import SingUpText from '../../components/SingUpText';
import BoxWithLogo from '../../components/BoxWithLogo';

import styles from './styles';

const SingIn = () => {
	const { signIn } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<BoxWithLogo>
			<View style={styles.boxTitle}>
				<Text style={styles.title}>Já tem uma conta?</Text>
				<Text style={styles.title}>Faça seu login</Text>
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
					placeholder='*************'
					secureTextEntry={true}
				/>

				<Button onPress={signIn}>Entrar</Button>
				<SingUpText
					primaryText='Não tem conta?'
					textOnPress='Faça agora'
					navigate='Register'
				/>
			</View>
		</BoxWithLogo>
	);
};

export default SingIn;
