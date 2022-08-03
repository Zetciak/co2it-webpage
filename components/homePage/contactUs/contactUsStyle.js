// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		height: '400px',
	},

	bgDiv: {
		background:
			'linear-gradient(0deg, rgba(255, 255, 255, 0.0) -50%, rgba(255, 255, 255, 0.05) 100%)',
		width: '100%',
		height: '50%',
		position: 'absolute',
	},

	insideDiv: {
		width: '1448px',
		height: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	panelDiv: {
		background: '#395858',
		borderRadius: '44.25px',
		width: '1111px',
		height: '100%',
		position: 'relative',
		margin: '0 auto',
	},

	mainTitle: {
		width: '670px',
		position: 'relative',
		margin: '0 auto',

		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '124%',
		textAlign: 'center',
		letterSpacing: '0.375',
		color: '#FFFFFF',
		paddingTop: '72px',
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

	bottomTitleLine: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '-10px',
	},

	contactUs: {
		marginTop: '20px',
		position: 'relative',
	},

	editBoxDiv: {
		margin: '0 auto',
		marginTop: '38px',
		width: '540px',
		height: '64px',
		padding: '8px 4px',
		borderRadius: '86px',
		border: '1px solid #4ECDC4',
		position: 'relative',
	},

	buttonDiv: {
		marginTop: '-15px',
		position: 'relative',
		float: 'right',
	},

	button: {
		width: '137px',
		height: '54px',
		position: 'relative',
		borderRadius: '86.25px',
		opacity: '1',
		transition: 'opacity .7s',

		background:
			'linear-gradient(257.01deg, #4ECDC4 -0.23%, #26A69D 99.77%)',
		boxShadow: '0px 7.50032px 30.0013px rgba(71, 198, 189, 0.35)',

		'&:hover': {
			opacity: '.7',

			background:
				'linear-gradient(257.01deg, #4ECDC4 -0.23%, #26A69D 99.77%)',
			boxShadow: '0px 7.50032px 30.0013px rgba(71, 198, 189, 0.35)',
		},

		'& p': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '15px',
			lineHeight: '15px',
			letterSpacing: '-0.02em',
			textTransform: 'none',
			color: '#E9E9E9',
		},

		'& span': {
			color: '#E9E9E9',
		},

		'&:disabled': {
			opacity: '.5',
			boxShadow: '0px 7.50032px 30.0013px rgba(71, 198, 189, 0.35)',
		},
	},

	buttonDiv2: {
		marginTop: '-15px',
		marginLeft: '10px',
		position: 'relative',
		float: 'right',
	},

	button2: {
		width: '137px',
		height: '54px',
		position: 'relative',
		borderRadius: '86.25px',
		opacity: '1',
		transition: 'opacity .7s',

		background: '#ffffff00',
		boxShadow: '0px 0px 0px rgba(71, 198, 189, 0.35)',
		border: '1.5px solid #4ECDC4',

		'&:hover': {
			opacity: '.7',

			background: '#ffffff00',
			boxShadow: '0px 0px 0px rgba(71, 198, 189, 0.35)',
		},

		'& p': {
			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '15px',
			lineHeight: '15px',
			letterSpacing: '-0.02em',
			textTransform: 'none',
			color: '#E9E9E9',
		},

		'& span': {
			color: '#E9E9E9',
		},

		'&:disabled': {
			opacity: '.5',
			boxShadow: '0px 7.50032px 30.0013px rgba(71, 198, 189, 0.35)',
		},
	},

	inputDiv: {
		marginTop: '-24px',
		marginLeft: '16px',
		width: '210px',
		position: 'relative',
		float: 'left',

		'& input': {
			color: '#ffffff',
			transition: 'opacity .5s',

			fontFamily: 'Urbanist',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '13.5px',
			lineHeight: '12px',
			letterSpacing: '-0.02em',
			textTransform: 'none',
			color: '#E9E9E9',
		},
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
		},

		panelDiv: {
			width: '100%',
		},
	},

	// 850px
	['@media (max-width: 850px)']: {
		mainTitle: {
			width: '80%',
			fontSize: '44px',
			paddingTop: '72px',
		},

		inputDiv: {
			marginTop: '-14px',
		},

		buttonDiv: {
			marginTop: '-9px',
		},

		buttonDiv2: {
			marginTop: '-9px',
		},
	},

	// 750px
	['@media (max-width: 750px)']: {
		editBoxDiv: {
			width: '95%',
		},

		buttonDiv: {
			width: '25%',
		},

		buttonDiv2: {
			width: '25%',
		},

		button: {
			width: '100%',
		},

		button2: {
			width: '100%',
		},

		inputDiv: {
			width: '40%',
		},
	},

	// 540px
	['@media (max-width: 540px)']: {
		mainDiv: {
			height: '440px',
		},

		inputDiv: {
			width: '90%',
			margin: '0 auto',
			marginTop: '-16px',
			float: 'none',
		},

		buttonDiv: {
			width: '45%',
			float: 'left',
			marginTop: '20px',
		},

		buttonDiv2: {
			width: '45%',
			float: 'right',
			marginTop: '20px',
		},

		mainTitle: {
			paddingTop: '40px',
		},
	},

	// 432px
	['@media (max-width: 432px)']: {
		mainDiv: {
			height: '500px',
		},
	},

	// 349px
	['@media (max-width: 349px)']: {
		mainDiv: {
			height: '550px',
		},
	},

	// 320px
	['@media (max-width: 320px)']: {
		mainDiv: {
			height: '600px',
		},
	},
});

export default useStyles;
