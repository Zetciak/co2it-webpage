// >> Modules
import Image from 'next/image';
import { useRouter } from 'next/router.js';

// >> Styles
import useStyles from './footerStyle.js';

// >> Images
import logo from '../../../public/logo.png';
import telegram from '../../../public/extensions/telegram.svg';
import discord from '../../../public/extensions/discord.svg';
import twitter from '../../../public/extensions/twitter.svg';
import linkedin from '../../../public/extensions/linkedin.svg';
import instagram from '../../../public/extensions/instagram.svg';

//Script
function Footer() {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const router = useRouter();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.insideDiv} data-aos="fade-up">
				<div className={styles.topLine}></div>
				<div className={styles.bottomElements}>
					<div className={styles.leftSection} data-aos="fade-right">
						<div className={styles.logoDiv}>
							<Image
								src={logo}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
						<div className={styles.underLogoText}>
							CO2it is a trademark owned by Liltoolz Sp z o.o.
							Contact us for any inquires under contact@co2it.com
						</div>
					</div>
					<div className={styles.centerSection} data-aos="fade-up">
						<div className={styles.centerTitle}>
							<span className={`${styles.blueText} blueText`}>
								Company
							</span>
						</div>
						<div
							className={`${styles.centerText} ${styles.rightsText}`}
						>
							Liltoolz 2022, all Rights Reserved
						</div>

						<div
							className={`${styles.centerText} ${styles.privacyPolicy}`}
							onClick={() => {
								router.push('/privacy');
							}}
						>
							Privacy Policy
						</div>
					</div>
					<div className={styles.rightSection} data-aos="fade-left">
						<div className={styles.rightElements}>
							<div className={styles.oneRightElement}>
								<a
									href="https://www.instagram.com/co2it_official/"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={instagram}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										priority={true}
									/>
								</a>
							</div>
							<div className={styles.oneRightElement}>
								<a
									href="https://linkedin.com/company/co2it"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={linkedin}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										priority={true}
									/>
								</a>
							</div>
							<div className={styles.oneRightElement}>
								<a
									href="https://twitter.com/CO2it_Official"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={twitter}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										priority={true}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
