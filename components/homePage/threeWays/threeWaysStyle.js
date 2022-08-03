// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		background:
			'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
		marginTop: '200px',
		paddingBottom: '170px',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
	},

	oneWay: {
		width: '33%',
		float: 'left',
		position: 'relative',
	},

	imageDiv: {
		width: '93px',
		height: '93px',
		boxShadow: '0px 20.9456px 83.7825px rgba(71, 198, 189, 0.35)',
		margin: '0 auto',
		borderRadius: '100%',
	},

	textDiv: {
		width: '85%',
		margin: '0 auto',

		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '31.8027px',
		lineHeight: '124%',
		textAlign: 'center',
		letterSpacing: '0.220852px',
		color: '#FFFFFF',
		marginTop: '40px',
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

		textDiv: {
			width: '90%',
		},
	},

	// 1439px
	['@media (max-width: 1439px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 700px
	['@media (max-width: 700px)']: {
		imageDiv: {
			width: '63px',
			height: '63px',
		},

		textDiv: {
			fontSize: '20px',
			marginTop: '20px',
		},
	},

	// 550px
	['@media (max-width: 550px)']: {
		imageDiv: {
			width: '83px',
			height: '83px',
		},

		textDiv: {
			fontSize: '24px',
			marginTop: '24px',
		},

		oneWay: {
			width: '90%',
			margin: '0 auto',
			marginTop: '70px',
			float: 'none',
			position: 'relative',

			'&:first-child': {
				marginTop: '0px',
			},
		},
	},
});

export default useStyles;
