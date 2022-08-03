// >> Modules
import Image from 'next/image';
import Head from 'next/head';

// >> Styles
import useStyles from './homePageStyle';

// >> Components
import Navigation from './navigation/navigation.js';
import Landing from './landing/landing.js';
import Partners from './partners/partners.js';
import NetZero from './netZero/netZero.js';
import WhyUs from './whyUs/whyUs.js';
import Blog from './blog/blog.js';
import ThreeWays from './threeWays/threeWays.js';
import ContactUs from './contactUs/contactUs.js';
import Footer from './footer/footer.js';

// >> Images
//import bgColorEffect from '../../public/background/bgColorEffect.png';
import circleColor from '../../public/background/circleColor.png';

//Script
function HomePage() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>CO2it - Home Page</title>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#3DBDB4" />
				<meta
					name="keywords"
					content="Co2, Projects, Emissions, Carbon Neutral"
				/>
				<meta
					name="description"
					content="Make Your Projects Carbon Neutral Today. Show You are responsible and committed to support the sustainability strategy of your organization. "
				/>

				<meta
					property="og:url"
					content="https://zetty-co2it.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="CO2it - Home Page" />
				<meta
					property="og:description"
					content="Make Your Projects Carbon Neutral Today. Show You are responsible and committed to support the sustainability strategy of your organization. "
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
					content="Make Your Projects Carbon Neutral Today. Show You are responsible and committed to support the sustainability strategy of your organization. "
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
				<Landing />
				<Partners />
				<NetZero />
				<WhyUs />
				<Blog />
				<ThreeWays />
				<ContactUs />
				<Footer />
			</div>
		</>
	);
}

export default HomePage;
