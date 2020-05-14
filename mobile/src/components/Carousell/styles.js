import { StyleSheet } from 'react-native';
import Global from '../../global';

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	activeDot: {
		width: 35,
		height: 3.5,
		borderRadius: 0,
		backgroundColor: Global.light,
	},
	inactiveDot: {
		width: 55,
		height: 3,
		borderRadius: 0,
		marginHorizontal: -22.3,
		backgroundColor: Global.light,
	},
	containerPagination: {
		alignItems: 'baseline',
	},
});

export default styles;
