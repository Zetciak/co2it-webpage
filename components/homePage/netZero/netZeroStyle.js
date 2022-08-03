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

	leftDiv: {
		float: 'left',
		marginTop: '30px',
		position: 'relative',
	},

	rightDiv: {
		float: 'right',
		width: '675px',
		minHeight: '320px',
		marginTop: '10px',
		position: 'relative',
	},

	netZeroLeftBg: {
		width: '473px',
		height: '286px',
		position: 'absolute',
	},

	netZeroStar1: {
		width: '90px',
		height: '90px',
		position: 'absolute',
		left: '-15px',
		top: '20px',
		transform: 'rotate(-15deg)',
	},

	netZeroStar2: {
		width: '66px',
		height: '66px',
		position: 'absolute',
		right: '0',
		bottom: '0',
		transform: 'rotate(30deg)',
	},

	netZeroWeight: {
		width: '577px',
		height: '577px',
		position: 'absolute',
		left: '-25px',
		top: '-230px',
		pointerEvents: 'none',
	},

	leftOrnament: {
		width: '190px',
		height: '48px',
		position: 'absolute',
		left: '-150px',
		top: '280px',
		transform: 'rotate(150deg)',
	},

	rightTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '124%',
		letterSpacing: '0.375016px',
		color: '#FFFFFF',
	},

	rightDesc: {
		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '175%',
		letterSpacing: '-0.02em',
		color: '#E9E9E9',
		marginTop: '16.5px',
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

	boldText: {
		fontWeight: '800',
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
	},

	// 1320px
	['@media (max-width: 1320px)']: {
		leftDiv: {
			float: 'none',
			marginTop: '30px',
			position: 'relative',
		},

		rightDiv: {
			float: 'none',
			width: '100%',
		},

		rightTitle: {
			width: '50%',
			margin: '0 auto',
			textAlign: 'center',
		},

		rightDesc: {
			width: '50%',
			margin: '0 auto',
			marginTop: '16.5px',
			textAlign: 'center',
		},

		leftDiv: {
			float: 'none',
			width: '446px',
			height: '300px',
			margin: '0 auto',
			marginTop: '200px',
		},

		netZeroLeftBg: {
			right: '0px',
		},
	},

	// 885px
	['@media (max-width: 885px)']: {
		rightTitle: {
			width: '90%',
		},

		rightDesc: {
			width: '90%',
		},
	},

	// 530px
	['@media (max-width: 530px)']: {
		leftDiv: {
			width: '90%',
		},

		netZeroLeftBg: {
			width: '100%',
		},

		netZeroWeight: {
			width: '130%',
			top: '-180px',
		},

		netZeroStar1: {
			display: 'none',
		},

		netZeroStar2: {
			display: 'none',
		},
	},

	// 500px
	['@media (max-width: 500px)']: {
		rightTitle: {
			fontSize: '44px',
		},

		rightDesc: {
			fontSize: '14px',
		},

		insideDiv: {
			marginTop: '100px',
		},
	},

	// 400px
	['@media (max-width: 400px)']: {
		netZeroWeight: {
			top: '-150px',
		},

		rightTitle: {
			fontSize: '40px',
		},
	},

	// 380px
	['@media (max-width: 380px)']: {
		insideDiv: {
			marginTop: '50px',
		},
	},

	// 365px
	['@media (max-width: 365px)']: {
		rightTitle: {
			fontSize: '33px',
		},

		netZeroWeight: {
			top: '-120px',
		},
	},

	// 340px
	['@media (max-width: 340px)']: {
		insideDiv: {
			marginTop: '0px',
		},
	},
});

export default useStyles;
