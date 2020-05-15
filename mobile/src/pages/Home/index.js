import React, { useState } from 'react';

import { View, Text, TextInput, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/Feather';

import imgDiet from '../../assets/diet_ghvw.png';

import styles from './styles';

export default function Home() {
	const [valueCategories, setValueCategories] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.containerTop}>
				<Text style={styles.title}>DIGITE O NOME PRODUTO OU</Text>
				<Text style={styles.title}>ESTABELECIMENTO QUE DESEJA</Text>
			</View>

			<View style={styles.containerCenter}>
				<View style={styles.inputWithIcon}>
					<TextInput
						style={styles.input}
						placeholder='Digite o nome aqui'
						placeholderTextColor='#380098'
					/>
					<Icon name='search' size={22} color='#380098' />
				</View>

				<Dropdown
					label='Categorias'
					fontSize={14}
					baseColor='#380098'
					onChangeText={setValueCategories}
					containerStyle={styles.dropdown}
				/>
				<View style={styles.containerImage}>
					<Image source={imgDiet} style={styles.image} />
				</View>
			</View>
		</View>
	);
}
