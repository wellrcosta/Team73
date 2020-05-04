import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import numbro from 'numbro';

import Number from '../../services/number';

export default function Product(props) {
	let price = Number(props.price);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.title}</Text>
			<Image source={{ uri: props.image }} style={styles.image} />
			<Text style={styles.price}>{price}</Text>
			<Text style={styles.desc}>{props.desc}</Text>
			<Text style={styles.qnt}>{props.qnt}</Text>
			<View style={styles.button}>
				<Text style={styles.txtButton}>ADICIONAR</Text>
			</View>
		</View>
	);
}
