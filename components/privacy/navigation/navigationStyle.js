// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
	},

	topSection: {
		marginTop: '18px',
		position: 'relative',
	},

	logoSection: {
		width: '105px',
		height: '46px',
		float: 'left',

		'&:hover': {
			cursor: 'pointer',
		},
	},

	centerSection: {
		float: 'left',
		marginLeft: '470px',
		position: 'relative',
	},

	oneNavElement: {
		marginTop: '18px',
		position: 'relative',
		float: 'left',
		marginLeft: '31px',

		'&:first-child': {
			marginLeft: '0px',
		},
	},

	navElementTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16.5px',
		lineHeight: '92%',
		color: '#ffffff',
		transition: 'color .7s',

		'&:hover': {
			color: '#4ECDC4',
			cursor: 'pointer',

			'& .bottomNavLine': {
				opacity: '1',
				transition: 'opacity .7s',
			},
		},

		'& .bottomNavLine': {
			position: 'absolute',
			background: '#4ECDC4',
			width: '100%',
			height: '3px',
			borderRadius: '27px',
			top: '45px',
			opacity: '0',
			transition: 'opacity .7s',
		},
	},

	bottomNavLine: {
		position: 'absolute',
		background: '#4ECDC4',
		width: '100%',
		height: '3px',
		borderRadius: '27px',
		top: '45px',
	},

	bottomLine: {
		background: '#FFFFFF',
		opacity: '.1',
		width: '100%',
		height: '1px',
		marginTop: '18px',
		float: 'left',
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1650px
	['@media (max-width: 1650px)']: {
		mainDiv: {
			width: '1248px',
		},

		centerSection: {
			marginLeft: '370px',
		},
	},

	// 1439px
	['@media (max-width: 1439px)']: {
		mainDiv: {
			width: '90%',
		},

		centerSection: {
			marginLeft: '0px',
			float: 'right',
		},
	},

	// 540px
	['@media (max-width: 540px)']: {
		mainDiv: {
			width: '90%',
		},

		centerSection: {
			display: 'none',
		},

		logoSection: {
			float: 'none',
			margin: '0 auto',
		},
	},
});

export default useStyles;
