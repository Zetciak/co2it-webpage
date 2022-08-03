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
		marginTop: '60px',
	},

	mainTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '124%',
		letterSpacing: '0.375px',
		color: '#FFFFFF',
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

	allTextsDiv: {
		width: '100%',
		background: 'rgba(0, 0, 0, 0.15)',
		borderRadius: '36px',
		padding: '40px 50px',
		marginTop: '60px',
	},

	TITLE: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '31px',
		lineHeight: '150%',
		letterSpacing: '0.375px',
		color: '#FFFFFF',
		marginBottom: '10px',
	},

	DESC: {
		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '16.5px',
		lineHeight: '145%',
		letterSpacing: '-0.02em',
		color: '#E9E9E9',
		marginBottom: '20px',
	},

	ADRES: {
		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '16.5px',
		lineHeight: '145%',
		letterSpacing: '-0.02em',
		color: '#E9E9E9',
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1650px
	['@media (max-width: 1650px)']: {
		insideDiv: {
			width: '1111px',
		},
	},

	// 1439px
	['@media (max-width: 1439px)']: {
		insideDiv: {
			width: '90%',
		},

		mainTitle: {
			width: '100%',
			textAlign: 'center',
		},
	},

	// 850px
	['@media (max-width: 850px)']: {
		TITLE: {
			fontSize: '27px',
			lineHeight: '110%',
			textAlign: 'center',
		},

		DESC: {
			fontSize: '13.5px',
			lineHeight: '145%',
			textAlign: 'center',
		},

		ADRES: {
			fontSize: '13.5px',
			lineHeight: '145%',
			textAlign: 'center',
		},

		mainTitle: {
			fontSize: '44px',
		},
	},
});

export default useStyles;
