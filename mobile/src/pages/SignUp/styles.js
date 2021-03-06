import { StyleSheet } from 'react-native';
import Global from '../../global';

const styles = StyleSheet.create({
	boxTitle: {
		marginTop: '10%',
	},
	boxForm: {
		justifyContent: 'center',
		alignItems: 'center',
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
		marginTop: '15%',
	},
	containerInputs: {
		marginTop: 6,
		marginLeft: '3%',
		flexDirection: 'row',
	},
	input: {
		width: '90%',
		fontSize: 23,
		fontWeight: 'bold',
		color: Global.light,
		borderBottomWidth: 1.8,
		borderBottomColor: Global.light,
	},
	containerImage: {
		marginTop: '10%',
		justifyContent: 'center',
		alignContent: 'center',
	},
});

export default styles;
