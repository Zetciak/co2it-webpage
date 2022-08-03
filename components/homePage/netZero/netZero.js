// >> Modules
import Image from 'next/image';

// >> Styles
import useStyles from './netZeroStyle.js';

// >> Images
import weight from '../../../public/renders/weight.gif';
import netZeroLeftBg from '../../../public/background/netZeroLeftBg.png';
import landingStar from '../../../public/background/landingStar.png';
import ornament1 from '../../../public/background/ornament1.png';

//Script
function NetZero() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="netZero">
			<div className={styles.insideDiv}>
				<div className={styles.rightDiv} data-aos="fade-left">
					<div className={styles.rightTitle}>
						What is{' '}
						<span className={`${styles.blueText} blueText`}>
							Net Zero?
						</span>
					</div>
					<div className={styles.rightDesc}>
						<span
							className={`${styles.blueText} ${styles.boldText} blueText`}
						>
							CO2it
						</span>{' '}
						refers to a balance between man-made greenhouse gas
						(GHG) emissions and their removal from the atmosphere.
						To achieve this balance, GHG emissions must be reduced
						and the non-avoided ones must be compensated or
						&quot;Neutralized&quot; through the use of long-term
						carbon capture solutions. The applies also to project
						delivery.
					</div>
				</div>
				<div className={styles.leftDiv} data-aos="fade-right">
					<div className={styles.netZeroLeftBg}>
						<Image
							src={netZeroLeftBg}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
						<div className={styles.netZeroStar1}>
							<Image
								src={landingStar}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
						<div className={styles.netZeroStar2}>
							<Image
								src={landingStar}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
						<div className={styles.netZeroWeight}>
							<Image
								src={weight}
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
			</div>
		</div>
	);
}

export default NetZero;
