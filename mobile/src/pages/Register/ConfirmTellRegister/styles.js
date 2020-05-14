import { StyleSheet } from 'react-native';
import Global from '../../../global';

const styles = StyleSheet.create({
	boxTitle: {
		marginTop: '10%',
	},
	title: {
		alignSelf: 'flex-start',
		marginLeft: '5%',
		marginRight: '2%',
		fontSize: 22,
		fontWeight: '800',
		color: Global.light,
	},
	subtitle: {
		fontSize: 14,
		fontWeight: '800',
		marginTop: '15%',
	},
	text: {
		fontSize: 14,
		fontWeight: 'bold',
		marginTop: '7%',
	},
	containerInputs: {
		marginTop: 6,
		marginLeft: '3%',
		flexDirection: 'row',
	},
	containerRetry: {
		marginTop: '9%',
		marginLeft: '5%',
	},
});

export default styles;
