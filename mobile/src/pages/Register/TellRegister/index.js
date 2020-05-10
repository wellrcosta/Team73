import React, { useState } from 'react';

import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RoundButton from '../../../components/RoundButton';
import SingUpText from '../../../components/SingUpText';
import BoxWithLogo from '../../../components/BoxWithLogo';

import styles from './styles';

export default function TellRegister() {
	const [tell, setTell] = useState('');
	const navigation = useNavigation();

	const navigateToConfirmTell = () => {
		navigation.navigate('ConfirmTell');
	};

	return (
		<BoxWithLogo>
			<View style={styles.boxTitle}>
				<Text style={styles.title}>Por favor, digite seu</Text>
				<Text style={styles.title}>número de celular</Text>

				<Text style={[styles.title, styles.subtitle]}>Número de celular</Text>
			</View>

			<View style={styles.boxForm}>
				<TextInput
					style={styles.input}
					onChangeText={setTell}
					placeholder='+55 (99) 9 9999-9999'
					maxLength={13}
					keyboardType='numeric'
				/>
				<RoundButton onPress={navigateToConfirmTell}>OK</RoundButton>
			</View>

			<View style={styles.containerBottom}>
				<SingUpText
					primaryText='Já tem uma conta?'
					textOnPress='Faça login'
					navigate='SingIn'
				/>
			</View>
		</BoxWithLogo>
	);
}
