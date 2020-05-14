import { StyleSheet } from 'react-native';

import Global from '../../global';

const styles = StyleSheet.create({
	boxTitle: {
		marginTop: '15%',
		marginBottom: '7%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	boxForm: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: '800',
		color: Global.light,
	},
	input: {
		fontSize: 20,
		width: '90%',
		marginTop: '5%',
		color: Global.light,
		borderBottomWidth: 1.8,
		borderBottomColor: Global.light,
	},
});

export default styles;
