import React from 'react';

import { View, Text, FlatList } from 'react-native';

import styles from './styles';

export default function Results() {
	return (
		<View style={styles.container}>
			<Text>RESULTADO DE BUSCA PARA ' '</Text>

			<FlatList
				data={() => {}}
				style={styles.emporiumList}
				showsVerticalScrollIndicator={false}
				keyExtractor={() => {}}
				onEndReached={() => {}}
				onEndReachedThreshold={0.2}
				renderItem={() => (
					<View>
						<Text>asdasd</Text>
					</View>
				)}
			/>
		</View>
	);
}
