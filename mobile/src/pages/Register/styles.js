import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#390099',
		position: 'relative',
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
	},
	imgLogo: {
		marginTop: 40,
		marginBottom: 20,
		marginHorizontal: '15%',
	},
	textTitle: {
		marginTop: 65,
		marginLeft: 35,
		marginRight: 91,
		fontSize: 26,
		fontWeight: '500',
		color: '#FFFF',
	},
	labelName: {
		color: '#FFFF',
		fontSize: 14,
		marginTop: 50,
		marginLeft: 35,
	},
	input: {
		color: '#FFFF',
		marginTop: 2,
		marginRight: 65,
		marginHorizontal: 35,
		marginBottom: 25,
		fontSize: 24,
		borderBottomWidth: 2,
		borderBottomColor: '#FFFF',
	},
	image: {
		marginTop: '10%',
		marginLeft: '13%',
		height: 200,
		width: 290,
	},
});

export default styles;
