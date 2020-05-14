import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BoxWithLogo from '../../../components/BoxWithLogo';
import RoundButton from '../../../components/RoundButton';
import ComboInputs from '../../../components/ComboInputs';
import Retry from '../../../components/Retry';

import styles from './styles';

export default function ConfirmTellRegister() {
	const [password, setPassword] = useState('');
	const navigation = useNavigation();

	const navigateToPassword = () => {
		navigation.navigate('Password');
	};

	return (
		<BoxWithLogo>
			<View style={styles.boxTitle}>
				<Text style={styles.title}>Por favor, digite o código</Text>
				<Text style={styles.title}>que recebeu</Text>
			</View>

			<Text style={[styles.title, styles.subtitle]}>Código de verificação</Text>

			<View style={styles.containerInputs}>
				<ComboInputs />
				<ComboInputs />
				<ComboInputs />
				<ComboInputs />
				<ComboInputs />
				<ComboInputs />
				<RoundButton onPress={navigateToPassword}>OK</RoundButton>
			</View>

			<Text style={[styles.title, styles.text]}>EXPIRA EM 20 MINUTOS</Text>

			<View style={styles.containerRetry}>
				<Retry>TENTAR NOVAMENTE</Retry>
			</View>
		</BoxWithLogo>
	);
}
