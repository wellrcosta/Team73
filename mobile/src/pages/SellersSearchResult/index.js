import React from 'react';

import { View } from 'react-native';
import styles from './styles';

import Product from '../../components/Product';

export default function Detail() {
	return (
		<View style={styles.container}>
			<Product
				title='PADARIA PÃO NA HORTA'
				image='https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?mode=crop&width=710&height=400'
				price='19.5'
				description='Pão doce de fabricação própria'
				quantity='1 kg'
			/>
		</View>
	);
}
