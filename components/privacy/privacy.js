// >> Modules
import Image from 'next/image';
import Head from 'next/head';

// >> Styles
import useStyles from './privacyStyle';

// >> Components
import Navigation from './navigation/navigation.js';
import PrivacyText from './privacyText/privacyText.js';
import ThreeWays from '../homePage/threeWays/threeWays.js';
import ContactUs from '../homePage/contactUs/contactUs.js';
import Footer from '../homePage/footer/footer.js';

// >> Images
//import bgColorEffect from '../../public/background/bgColorEffect.png';
import circleColor from '../../public/background/circleColor.png';

//Script
function Privacy() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>CO2it - Privacy Policy</title>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#3DBDB4" />
				<meta name="keywords" content="TAG1,TAG2,TAG3" />
				<meta name="description" content="CO2it Test description" />

				<meta
					property="og:url"
					content="https://zetty-co2it.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="CO2it - Home Page" />
				<meta
					property="og:description"
					content="CO2it Test description"
				/>
				<meta
					property="og:image"
					content="https://i.imgur.com/CNhta16.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content="zetty-co2it.vercel.app"
				/>
				<meta
					property="twitter:url"
					content="https://zetty-co2it.vercel.app/"
				/>
				<meta name="twitter:title" content="CO2it - Home Page" />
				<meta
					name="twitter:description"
					content="CO2it Test description"
				/>
				<meta
					name="twitter:image"
					content="https://i.imgur.com/CNhta16.png"
				/>
			</Head>
			<div className={styles.backgroundEffects}>
				<div className={styles.bgColorEffect}>
					{/*<Image
						src={bgColorEffect}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>*/}
				</div>
				<div className={styles.circles}>
					<div className={styles.circle1}>
						<Image
							src={circleColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.circle2}>
						<Image
							src={circleColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.circle3}>
						<Image
							src={circleColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.circle4}>
						<Image
							src={circleColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.circle5}>
						<Image
							src={circleColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>
			</div>

			<div className={styles.mainDiv}>
				<Navigation />
				<PrivacyText />
				<ThreeWays />
				<ContactUs />
				<Footer />
			</div>
		</>
	);
}

export default Privacy;
