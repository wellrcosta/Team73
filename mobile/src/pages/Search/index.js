import React, { useState } from 'react';

import { View, Text, TextInput, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import imgDiet from '../../assets/diet_ghvw.png';
import styles from './styles';

const Search = () => {
	const [valueCategories, setValueCategories] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				DIGITE O NOME PRODUTO OU ESTABELECIMENTO QUE DESEJA
			</Text>

			<View style={styles.box}>
				<TextInput
					style={styles.input}
					placeholder='Digite o nome aqui'
					placeholderTextColor='#380098'
				/>
				<Dropdown
					label='Categorias'
					baseColor='#380098'
					fontSize={14}
					onChangeText={setValueCategories}
				/>
				<Image source={imgDiet} style={styles.image} />
			</View>
		</View>
	);
};

export default Search;
