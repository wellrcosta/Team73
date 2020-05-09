import { StyleSheet } from 'react-native';

import Global from '../../global';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: '3%',
		backgroundColor: Global.primary,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
	},
	containerLogo: {
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: '8%',
		marginBottom: '4%',
	},
});

export default styles;
