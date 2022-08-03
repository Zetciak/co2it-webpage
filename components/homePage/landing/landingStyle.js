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
		marginTop: '121px',
	},

	leftSection: {
		float: 'left',
		width: '675px',
	},

	mainTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '124%',
		letterSpacing: '0.375016px',
		color: '#FFFFFF',
		position: 'relative',
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

	mainDesc: {
		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '175%',
		letterSpacing: '-0.02em',
		color: '#E9E9E9',
		marginTop: '25px',
		width: '95%',
	},

	buttonsDiv: {
		marginTop: '26px',
		float: 'left',
	},

	button: {
		float: 'left',
		width: '160px',
		height: '36px',
		borderRadius: '20px',
		opacity: '1',
		transition: 'opacity .7s',

		'&:hover': {
			opacity: '.7',
		},

		'& p': {
			fontFamily: 'Righteous',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '13.5px',
			lineHeight: '15px',
			textTransform: 'none',
			color: '#FFFFFF',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	leftButton: {
		background:
			'linear-gradient(257.01deg, #4ECDC4 -0.23%, #26A69D 99.77%)',
		boxShadow: '0px 7.50032px 30.0013px rgba(71, 198, 189, 0.35)',

		'&:hover': {
			background:
				'linear-gradient(257.01deg, #4ECDC4 -0.23%, #26A69D 99.77%)',
			boxShadow: '0px 7.50032px 30.0013px rgba(71, 198, 189, 0.35)',
		},
	},

	rightButton: {
		marginLeft: '14px',
		background: '#ffffff00',
		boxShadow: '0px 0px 0px rgba(71, 198, 189, 0.35)',
		border: '1.5px solid #4ECDC4',

		'&:hover': {
			background: '#ffffff00',
			boxShadow: '0px 0px 0px rgba(71, 198, 189, 0.35)',
		},
	},

	bureauVeritas: {
		marginTop: '60px',
		float: 'left',
	},

	bureauVeritasText: {
		float: 'left',
		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '16.5px',
		lineHeight: '191%',
		letterSpacing: '-0.02em',
		color: '#E9E9E9',
	},

	bureauVeritasLogo: {
		width: '48px',
		height: '58px',
		float: 'left',
		marginLeft: '10px',
		marginTop: '-12px',
	},

	leftOrnament: {
		width: '190px',
		height: '48px',
		position: 'absolute',
		top: '155px',
		left: '-200px',
		transform: 'rotate(15deg)',
	},

	rightSection: {
		position: 'relative',
		float: 'right',
	},

	firstStar: {
		position: 'absolute',
		top: '0px',
		right: '-10px',
		width: '90px',
		height: '90px',
		transform: 'rotate(-165deg)',
	},

	secondStar: {
		position: 'absolute',
		top: '260px',
		right: '385px',
		width: '66px',
		height: '66px',
		transform: 'rotate(-15deg)',
	},

	landingRightBg: {
		position: 'absolute',
		top: '50px',
		right: '45px',
		width: '446px',
		height: '311px',
	},

	serverRoom: {
		position: 'absolute',
		top: '-200px',
		right: '-40px',
		width: '577px',
		height: '577px',
	},

	rightOrnament: {
		width: '190px',
		height: '48px',
		position: 'absolute',
		top: '265px',
		right: '-80px',
		transform: 'rotate(-20deg)',
	},

	circleButton: {
		marginTop: '370px',
		width: '55px',
		height: '55px',
		border: '1.5px solid #4ECDC4',

		transition: 'background .7s, box-shadow .7s',

		'&:hover': {
			background: '#4ECDC4',
			boxShadow: '0px 7.5px 30px rgba(71, 198, 189, 0.35)',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	circleButtonArrow: {
		width: '22px',
		height: 'auto',
		color: '#ffffff',
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
	},

	// 1320px
	['@media (max-width: 1320px)']: {
		leftSection: {
			float: 'none',
			width: '100%',
		},

		mainTitle: {
			width: '50%',
			margin: '0 auto',
			textAlign: 'center',
		},

		mainDesc: {
			width: '50%',
			margin: '0 auto',
			marginTop: '25px',
			textAlign: 'center',
		},

		buttonsDiv: {
			width: '334px',
			margin: '0 auto',
			marginTop: '26px',
			float: 'none',
		},

		button: {
			width: '47%',
		},

		bureauVeritas: {
			float: 'none',
			clear: 'both',
			width: '625px',
			margin: '0 auto',
			paddingTop: '60px',
		},

		rightSection: {
			float: 'none',
			width: '446px',
			margin: '0 auto',
			marginTop: '170px',
		},

		landingRightBg: {
			right: '0px',
		},

		rightOrnament: {
			right: '-280px',
		},

		leftOrnament: {
			left: '0px',
		},

		circleButton: {
			opacity: '0',
			cursor: 'default',
		},
	},

	// 885px
	['@media (max-width: 885px)']: {
		mainTitle: {
			width: '90%',
		},

		mainDesc: {
			width: '90%',
		},

		leftOrnament: {
			display: 'none',
		},
	},

	// 810px
	['@media (max-width: 810px)']: {
		insideDiv: {
			marginTop: '50px',
		},
	},

	// 720px
	['@media (max-width: 720px)']: {
		bureauVeritas: {
			width: '100%',
			marginTop: '60px',
			float: 'none',
		},

		bureauVeritasText: {
			float: 'none',
			width: '80%',
			lineHeight: '131%',
			textAlign: 'center',
			margin: '0 auto',
		},

		bureauVeritasLogo: {
			float: 'none',
			margin: '0 auto',
			marginTop: '10px',
		},
	},

	// 530px
	['@media (max-width: 530px)']: {
		rightSection: {
			width: '90%',
		},

		landingRightBg: {
			width: '100%',
		},

		serverRoom: {
			width: '130%',
		},

		firstStar: {
			display: 'none',
		},

		secondStar: {
			display: 'none',
		},
	},

	// 500px
	['@media (max-width: 500px)']: {
		mainTitle: {
			fontSize: '44px',
		},

		mainDesc: {
			fontSize: '14px',
		},
	},

	// 430px
	['@media (max-width: 430px)']: {
		serverRoom: {
			top: '-150px',
		},

		rightSection: {
			marginTop: '130px',
		},
	},

	// 400px
	['@media (max-width: 500px)']: {
		mainTitle: {
			fontSize: '40px',
		},

		buttonsDiv: {
			width: '70%',
		},

		button: {
			width: '100%',
			margin: '0 auto',
			float: 'none',
			clear: 'both',
		},

		rightButton: {
			marginLeft: '0px',
			marginTop: '12px',
		},
	},

	// 365px
	['@media (max-width: 365px)']: {
		mainTitle: {
			fontSize: '33px',
		},

		serverRoom: {
			top: '-120px',
		},
	},
});

export default useStyles;
