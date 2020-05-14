import { StyleSheet } from 'react-native';
import Global from '../../global';

const styles = StyleSheet.create({
	button: {
		width: 36,
		height: 36,
		marginLeft: 6,
		borderRadius: 35,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Global.light,
	},
	textButton: {
		fontSize: 15,
		fontWeight: 'bold',
		color: Global.secondary,
	},
});

export default styles;
