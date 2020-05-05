import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput } from 'react-native';

import imgLogo from '../../assets/logo.png';

import SingUpText from '../../components/singUpText';
import Button from '../../components/button';
import OptionsLogin from '../../components/optionsLogin';

import styles from './styles';

export default function Register() {
	const [name, setName] = useState('');
	const navigation = useNavigation();

	const navigateToRegister2 = () => {
		navigation.navigate('Register2');
	};

	return (
		<>
			<Image source={imgLogo} style={styles.imgLogo} />
			<View style={styles.container}>
				<Text style={styles.textTitle}>
					Por favor, digite o seu primeiro nome
				</Text>

				<Text style={styles.labelName}>Como gosta de ser chamado? </Text>
				<TextInput
					style={styles.input}
					onChangeText={setName}
					placeholder='Digite seu nome aqui'
				/>
				<Button name='Enviar' onPress={navigateToRegister2} />

				<View>
					<SingUpText />
				</View>
				<OptionsLogin />
			</View>
		</>
	);
}
