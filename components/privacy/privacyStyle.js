// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		margin: '0 auto',
		//minHeight: '3400px',
		position: 'relative',
	},

	bgColorEffect: {
		position: 'absolute',
		left: '0',
		top: '0',
		width: '100%',
		height: '10000px',
		background: 'url(https://i.imgur.com/OR6W8ZQ.png)',
	},

	circles: {
		position: 'absolute',
		left: '50%',
		transform: 'translate(-50%, 0)',
		width: '1440px',
	},

	circle1: {
		position: 'absolute',
		right: '-1000px',
		top: '-250px',
		width: '1853px',
		height: '1853px',
	},

	circle2: {
		position: 'absolute',
		left: '-1000px',
		top: '300px',
		width: '1853px',
		height: '1853px',
	},

	circle3: {
		position: 'absolute',
		right: '-1000px',
		top: '1579px',
		width: '1853px',
		height: '1853px',
	},

	circle4: {
		position: 'absolute',
		left: '-1000px',
		top: '2438px',
		width: '1853px',
		height: '1853px',
	},

	circle5: {
		position: 'absolute',
		right: '-1000px',
		top: '3400px',
		width: '1853px',
		height: '1853px',
	},
});

export default useStyles;
