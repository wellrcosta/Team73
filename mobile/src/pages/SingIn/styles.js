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
	boxTitle: {
		marginTop: 90,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textTitle: {
		fontSize: 20,
		fontWeight: '800',
		color: '#FFFF',
	},
	boxForm: {
		marginTop: 90,
	},
	input: {
		color: '#FFFF',
		marginTop: 8,
		marginLeft: 35,
		marginRight: 35,
		borderBottomWidth: 1.8,
		borderBottomColor: '#FFFF',
	},
	button: {
		marginTop: 90,
	},
	register: {
		flexDirection: 'row',
		marginTop: 90,
		marginLeft: 85,
	},
	textRegister: {
		color: '#FFFF',
	},
	textButton: {
		marginLeft: 5,
		color: '#EF476F',
	},
});

export default styles;
