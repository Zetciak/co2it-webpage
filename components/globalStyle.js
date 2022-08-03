// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	container: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
		background: '#282F37',
	},

	pageLoader: {
		width: '100%',
		height: '100%',
		position: 'fixed',
		background: '#000000aa',
		'z-index': '6',
		top: '0',
		left: '0',
		pointerEvents: 'none',
	},

	pageLoaderTransition: {
		transition: 'opacity .7s',
	},

	loading: {
		position: 'fixed',
		width: '100px',
		height: 'auto',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},
});

export default useStyles;
