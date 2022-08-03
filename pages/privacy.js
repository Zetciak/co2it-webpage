// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// >> Styles
import useStyles from '../components/globalStyle';

// >> Pages
import Privacy from '../components/privacy/privacy.js';

export default function Home() {
	// >> Style
	const styles = useStyles();

	// >> Aos
	useEffect(() => {
		Aos.init({ duration: 700 });
	}, []);

	// >> Render
	return (
		<div className={styles.container}>
			<Privacy />
		</div>
	);
}
