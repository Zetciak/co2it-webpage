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
		marginTop: '100px',
	},

	logosDiv: {
		//width: 'auto',
		margin: '0 auto',
		position: 'relative',
	},

	oneLogo: {
		float: 'left',
		marginLeft: '100px',
		opacity: '.5',
		transition: 'opacity .7s',

		'&:first-child': {
			marginLeft: '50px',
		},

		'&:hover': {
			opacity: '1',
			cursor: 'pointer',
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
			margin: '0 auto',
			marginTop: '100px',
		},
	},

	// 1345px
	['@media (max-width: 1345px)']: {
		oneLogo: {
			clear: 'left',
			width: '100%',
			margin: '0 auto',
			marginTop: '50px',
			marginLeft: '0px',

			'&:first-child': {
				marginLeft: '0px',
			},
		},

		logosDiv: {
			width: '400px',
		},
	},

	// 1100px
	['@media (max-width: 1100px)']: {
		logosDiv: {
			width: '300px',
		},
	},

	// 540px
	['@media (max-width: 540px)']: {
		oneLogo: {
			marginTop: '30px',
		},

		logosDiv: {
			width: '250px',
		},

		insideDiv: {
			marginTop: '50px',
		},
	},

	// 440px
	['@media (max-width: 440px)']: {
		insideDiv: {
			marginTop: '0px',
		},
	},
});

export default useStyles;
