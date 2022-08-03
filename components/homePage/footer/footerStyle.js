// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		paddingBottom: '50px',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '130px',
	},

	topLine: {
		width: '100%',
		height: '2px',
		opacity: '.1',
		background: '#FFFFFF',
	},

	bottomElements: {
		marginTop: '50px',
		position: 'relative',
		width: '100%',
	},

	leftSection: {
		width: '33.3%',
		float: 'left',
		position: 'relative',
	},

	centerSection: {
		width: '33.3%',
		float: 'left',
		position: 'relative',
	},

	rightSection: {
		width: '33.3%',
		float: 'right',
		position: 'relative',
	},

	logoDiv: {
		width: '105px',
		height: '46px',
	},

	underLogoText: {
		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '12px',
		lineHeight: '220%',
		color: '#ffffff',
		width: '63%',
		marginTop: '16.5px',
	},

	centerTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '22px',
		marginTop: '30px',
		marginLeft: '10%',
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

	centerText: {
		float: 'left',

		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '18px',
		marginTop: '24px',
		color: '#ffffff',
		marginLeft: '10%',
	},

	rightsText: {
		marginRight: '50px',
	},

	privacyPolicy: {
		opacity: '1',
		transition: 'opacity .7s',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	rightElements: {
		float: 'right',
	},

	oneRightElement: {
		width: '48px',
		height: '48px',
		opacity: '1',
		transition: 'opacity .7s',

		marginLeft: '20px',
		marginTop: '30px',
		float: 'left',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},

		'&:first-child': {
			marginLeft: '0px',
		},
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1650px
	['@media (max-width: 1650px)']: {
		insideDiv: {
			width: '1248px',
		},

		underLogoText: {
			width: '70%',
		},

		centerText: {
			marginLeft: '8%',
		},

		centerTitle: {
			marginLeft: '8%',
		},

		centerSection: {
			width: '43.3%',
		},

		rightSection: {
			width: '23.3%',
		},
	},

	// 1439px
	['@media (max-width: 1439px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 894px
	['@media (max-width: 894px)']: {
		oneRightElement: {
			float: 'right',
			marginLeft: '20px',

			'&:first-child': {
				marginLeft: '20px',
			},

			'&:last-child': {
				marginLeft: '0px',
				marginRight: '35px',
				marginTop: '15px',
			},
		},
	},

	// 670px
	['@media (max-width: 670px)']: {
		leftSection: {
			width: '100%',
			float: 'none',
			margin: '0 auto',
		},

		centerSection: {
			width: '100%',
			float: 'none',
			margin: '0 auto',
		},

		rightSection: {
			width: '100%',
			float: 'none',
			margin: '0 auto',
		},

		logoDiv: {
			margin: '0 auto',
		},

		underLogoText: {
			width: '70%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '16.5px',
		},

		centerText: {
			width: '70%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '20px',
			float: 'none',
		},

		centerTitle: {
			width: '70%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '40px',
		},

		rightElements: {
			float: 'none',
			width: '249px',
			margin: '0 auto',
		},

		oneRightElement: {
			marginLeft: '20px',
			marginTop: '30px',
			float: 'left',

			'&:first-child': {
				marginLeft: '30px',
			},

			'&:last-child': {
				marginTop: '30px',
				marginLeft: '20px',
			},
		},
	},
});

export default useStyles;
