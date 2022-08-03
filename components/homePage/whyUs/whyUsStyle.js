// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		background: 'rgba(0, 0, 0, 0.15)',
		height: '810px',
		marginTop: '140px',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
	},

	mainTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '67px',
		letterSpacing: '0.375px',
		color: '#FFFFFF',
		width: '100%',
		textAlign: 'center',
		marginTop: '95px',
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

	slide: {
		position: 'absolute',
		width: '100%',
		transition: 'right .7s, opacity .7s',
	},

	leftSlideSection: {
		float: 'left',
		position: 'relative',
		width: '700px',
	},

	slideTitle: {
		fontFamily: 'Righteous',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '54px',
		lineHeight: '67px',
		letterSpacing: '0.375px',
		color: '#FFFFFF',
		marginTop: '36px',
	},

	slideDesc: {
		fontFamily: 'Urbanist',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '31px',
		letterSpacing: '-0.02em',
		color: '#E9E9E9',
		marginTop: '16.5px',
	},

	circleButton: {
		marginTop: '100px',
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

		'&:first-child': {
			marginRight: '12px',
		},

		'&:disabled': {
			opacity: '.5',
		},
	},

	circleButtonArrow: {
		width: '22px',
		height: 'auto',
		color: '#ffffff',
		transform: 'rotate(90deg)',
	},

	circleButtonRight: {
		transform: 'rotate(-90deg)',
	},

	rightSlideSection: {
		width: '577px',
		height: '577px',
		position: 'absolute',
		top: '-30px',
		right: '-80px',
	},

	linesOutSection: {
		width: '100%',
		position: 'absolute',
		top: '500px',
	},

	linesSection: {
		width: '262px',
		height: '7px',
		margin: '0 auto',
		position: 'relative',
	},

	oneLine: {
		width: '32px',
		height: '100%',
		position: 'relative',
		background: '#E9E9E9',
		float: 'left',
		borderRadius: '10px',
		marginLeft: '12px',
		overflow: 'hidden',
		opacity: '1',
		transition: 'opacity .7s',

		'&:first-child': {
			marginLeft: '0px',
		},

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	selLine: {
		width: '130px',
		height: '100%',
		background: '#1B1F24',
		position: 'relative',
	},

	filledLine: {
		//width: '60%',
		height: '100%',
		background: '#3DBDB4',
		boxShadow: '0px 7.5px 30px rgba(71, 198, 189, 0.35)',
		borderRadius: '10px',
		transition: 'width .15s',
	},

	topOrnament: {
		width: '190px',
		height: '47px',
		transform: 'rotate(-71deg)',
		position: 'absolute',
		right: '-200px',
		top: '-215px',
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1650px
	['@media (max-width: 1650px)']: {
		insideDiv: {
			width: '1248px',
		},

		topOrnament: {
			right: '-140px',
		},
	},

	// 1439px
	['@media (max-width: 1439px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1300px
	['@media (max-width: 1300px)']: {
		leftSlideSection: {
			float: 'none',
			width: '100%',
			marginTop: '-50px',
		},

		rightSlideSection: {
			position: 'relative',
			top: 'auto',
			right: 'auto',
			margin: '0 auto',
		},

		mainDiv: {
			height: '1210px',
		},

		slideArrowsSection: {
			width: '125px',
			margin: '0 auto',
		},

		slideTitle: {
			width: '70%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '36px',
		},

		slideDesc: {
			width: '70%',
			textAlign: 'center',
			margin: '0 auto',
			marginTop: '16.5px',
		},

		linesOutSection: {
			top: '950px',
		},
	},

	// 900px
	['@media (max-width: 900px)']: {
		slideTitle: {
			width: '90%',
		},

		slideDesc: {
			width: '90%',
		},
	},

	// 690px
	['@media (max-width: 690px)']: {
		rightSlideSection: {
			width: '90%',
		},

		slideTitle: {
			fontSize: '44px',
			lineHeight: '130%',
		},
	},

	// 581px
	['@media (max-width: 581px)']: {
		linesOutSection: {
			top: '900px',
		},
	},

	// 400px
	['@media (max-width: 400px)']: {
		slideTitle: {
			fontSize: '40px',
		},

		slideDesc: {
			fontSize: '16px',
			lineHeight: '130%',
		},

		mainDiv: {
			height: '1010px',
		},

		linesOutSection: {
			top: '730px',
		},
	},

	// 345px
	['@media (max-width: 345px)']: {
		linesOutSection: {
			top: '670px',
		},
	},

	// 320px
	['@media (max-width: 320px)']: {
		slideTitle: {
			fontSize: '35px',
		},

		linesOutSection: {
			top: '690px',
		},
	},
});

export default useStyles;
