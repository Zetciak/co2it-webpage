// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '200px',
	},

	blogDiv: {
		width: '1111px',
		height: '655px',
		background: 'rgba(0, 0, 0, 0.15)',
		borderRadius: '36px',
		margin: '0 auto',
		position: 'relative',
	},

	imageDiv: {
		width: '969px',
		height: '544px',
		margin: '0 auto',
		paddingTop: '45px',
		position: 'relative',
	},

	ornament1: {
		position: 'absolute',
		width: '190px',
		height: '47px',
		transform: 'rotate(15deg)',
		left: '-100px',
		top: '-100px',
	},

	ornament2: {
		position: 'absolute',
		width: '190px',
		height: '47px',
		transform: 'rotate(-20deg)',
		right: '-100px',
		top: '-100px',
	},

	ornament3: {
		position: 'absolute',
		width: '190px',
		height: '47px',
		transform: 'rotate(150deg)',
		left: '-100px',
		top: '500px',
	},

	ornament4: {
		position: 'absolute',
		width: '190px',
		height: '47px',
		transform: 'rotate(-71deg)',
		right: '-130px',
		top: '550px',
	},

	star1: {
		position: 'absolute',
		width: '70px',
		height: '70px',
		transform: 'rotate(-15deg)',
		right: '-25px',
		top: '-25px',
	},

	star2: {
		position: 'absolute',
		width: '101px',
		height: '101px',
		transform: 'rotate(-30deg)',
		left: '-40px',
		bottom: '-30px',
	},

	mainTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '124%',
		letterSpacing: '0.375016px',
		color: '#FFFFFF',
		position: 'absolute',
		top: '43%',
		width: '100%',
		textAlign: 'center',
	},

	blueText: {
		//background:
		//	'linear-gradient(257.01deg, #4ECDC4 -0.23%, #26A69D 99.77%)',
		//'-webkit-background-clip': 'text',
		//'-webkit-text-fill-color': 'transparent',
		//'background-clip': 'text',
		//'text-fill-color': 'transparent',
		position: 'relative',
		color: '#4ECDC4',
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1650px
	['@media (max-width: 1650px)']: {
		insideDiv: {
			width: '1248px',
		},
	},

	// 1439px
	['@media (max-width: 1439px)']: {
		insideDiv: {
			width: '90%',
			margin: '0 auto',
			marginTop: '200px',
		},

		blogDiv: {
			width: '90%',
		},

		outsideImageDiv: {
			width: '100%',
			height: '100%',
			overflow: 'hidden',
		},

		ornament3: {
			display: 'none',
		},

		mainTitle: {
			padding: '0 20px',
			//top: '40%',
		},
	},

	// 705px
	['@media (max-width: 705px)']: {
		mainTitle: {
			top: '40%',
		},
	},

	// 475px
	['@media (max-width: 475px)']: {
		mainTitle: {
			top: '35%',
		},
	},
});

export default useStyles;
