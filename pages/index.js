// >> Modules
import { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import useStyles from '../components/globalStyle';

// >> Pages
import HomePage from '../components/homePage/homePage.js';

export default function Home() {
	// >> Variables
	const [loading, setLoading] = useState(true);

	// >> Style
	const styles = useStyles();

	// >> Aos
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1').then(() => {
			setLoading(false);
		});
		Aos.init({ duration: 700 });
	}, []);

	// >> Render
	return (
		<div className={styles.container}>
			<HomePage />

			{loading === true ? (
				<div className={styles.pageLoader} style={{ opacity: '1' }}>
					<div className={styles.loading}>
						<Grid color="#4ECDC4" width="100%" />
					</div>
				</div>
			) : (
				<div
					className={`${styles.pageLoader} ${styles.pageLoaderTransition}`}
					style={{ opacity: '0' }}
				>
					<div className={styles.loading}>
						<Grid color="#4ECDC4" width="100%" />
					</div>
				</div>
			)}
		</div>
	);
}
