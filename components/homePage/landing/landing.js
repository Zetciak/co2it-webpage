// >> Modules
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './landingStyle.js';

// >> Images
import titleBottomLine from '../../../public/extensions/titleBottomLine.png';
import bureauVeritas from '../../../public/extensions/bureauVeritas.png';
import ornament1 from '../../../public/background/ornament1.png';
import server from '../../../public/renders/server.gif';
import landingRightBg from '../../../public/background/landingRightBg.png';
import landingStar from '../../../public/background/landingStar.png';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';

//Script
function Landing() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.leftSection} data-aos="fade-right">
					<div className={styles.mainTitle}>
						Make Your Projects{' '}
						<span className={`${styles.blueText} blueText`}>
							Carbon Neutral
							<div className={styles.bottomTitleLine}>
								<Image
									src={titleBottomLine}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
						</span>{' '}
						Today.
					</div>
					<div className={styles.mainDesc}>
						Leverage experts to comprehend, reduce, and offset an
						emission of your projects. Start your journey to net
						zero project company.
					</div>
					<div className={styles.buttonsDiv}>
						<Button
							variant="contained"
							className={`${styles.button} ${styles.leftButton}`}
							href="https://calendly.com/co2it"
							target="_blank"
						>
							<p>Book a Call</p>
						</Button>
						<Link to="netZero">
							<Button
								variant="contained"
								className={`${styles.button} ${styles.rightButton}`}
							>
								<p>Learn More</p>
							</Button>
						</Link>
					</div>
					<div className={styles.bureauVeritas}>
						<div className={styles.bureauVeritasText}>
							We{' '}
							<span className={`${styles.blueText} blueText`}>
								cooperate
							</span>{' '}
							with{' '}
							<span className={`${styles.blueText} blueText`}>
								world class organizations
							</span>{' '}
							to make our methodology accurate{' '}
						</div>
						<div className={styles.bureauVeritasLogo}>
							<Image
								src={bureauVeritas}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</div>
					<div className={styles.leftOrnament}>
						<Image
							src={ornament1}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>

				<div className={styles.rightSection} data-aos="fade-left">
					<div className={styles.landingRightBg}>
						<Image
							src={landingRightBg}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
						<div className={styles.firstStar}>
							<Image
								src={landingStar}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>

						<div className={styles.secondStar}>
							<Image
								src={landingStar}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>

						<div className={styles.serverRoom}>
							<Image
								src={server}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</div>

					<div className={styles.rightOrnament}>
						<Image
							src={ornament1}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<Link to="partners">
						<IconButton className={styles.circleButton}>
							<SouthRoundedIcon
								className={styles.circleButtonArrow}
							/>
						</IconButton>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Landing;
