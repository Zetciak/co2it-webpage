// >> Modules
import Image from 'next/image';

// >> Styles
import useStyles from './threeWaysStyle.js';

// >> Variables
let slides = [
	{
		title: ['Make Your Projects ', 'Carbon Neutral '],
		aos: 'fade-right',
	},
	{
		title: ['Get 2 ', 'CO2 Footprint ', 'reports for free'],
		aos: 'fade-up',
	},
	{
		title: ['Be awarded with ', 'Green Project ', 'Partner Status'],
		aos: 'fade-left',
	},
];

// >> Images
import okSection from '../../../public/extensions/okSection.svg';

//Script
function ThreeWays() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="about">
			<div className={styles.insideDiv}>
				{slides.map((element, index) => {
					return (
						<div
							className={styles.oneWay}
							key={index}
							data-aos={element.aos}
						>
							<div className={styles.imageDiv}>
								<Image
									src={okSection}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
									className={styles.imageDivReal}
								/>
							</div>
							<div className={styles.textDiv}>
								{element.title.map((element2, index2) => {
									if (index2 % 2 !== 0) {
										return (
											<span
												className={`${styles.blueText} blueText`}
												key={index2}
											>
												{element2}
											</span>
										);
									} else {
										{
											return (
												<span key={index2}>
													{element2}
												</span>
											);
										}
									}
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ThreeWays;
