// >> Modules
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router.js';

// >> Styles
import useStyles from './navigationStyle.js';

// >> Images
import logo from '../../../public/logo.png';

//Script
function Navigation() {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const router = useRouter();

	// >> Render
	return (
		<div className={styles.mainDiv} data-aos="fade-down">
			<div className={styles.topSection}>
				<div
					className={styles.logoSection}
					onClick={() => {
						router.push('/');
					}}
				>
					<Image
						src={logo}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>
				<div className={styles.centerSection}>
					<div className={styles.oneNavElement}>
						<Link
							onClick={() => {
								router.push('/');
							}}
						>
							<div className={styles.navElementTitle}>
								Home Page
								<div className="bottomNavLine"></div>
							</div>
						</Link>
					</div>
					<div className={styles.oneNavElement}>
						<Link to="privacy">
							<div className={styles.navElementTitle}>
								Privacy Notice
								<div className="bottomNavLine"></div>
							</div>
						</Link>
					</div>
					<div className={styles.oneNavElement}>
						<Link to="about">
							<div className={styles.navElementTitle}>
								Start now
								<div className="bottomNavLine"></div>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.bottomLine}></div>
		</div>
	);
}

export default Navigation;
