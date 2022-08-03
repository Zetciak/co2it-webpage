// >> Modules
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './whyUsStyle.js';

// >> Images
import meeting from '../../../public/renders/meeting.gif';
import factory from '../../../public/renders/factory.gif';
import windmills from '../../../public/renders/windmills.gif';
import office from '../../../public/renders/office.gif';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import ornament1 from '../../../public/background/ornament1.png';

// >> Variables
let slides = [
	{
		image: meeting,
		title: ['Assess ', 'CO2 Footprint ', 'of Your Project'],
		desc: "We will work together and help You understand your project's CO2 footprint. We will use world-class methodology and factors. ",
	},
	{
		image: office,
		title: ['Show You Are ', 'Responsible ', 'and ', 'Committed'],
		desc: 'Whether you are a project investor or a project supplier, Carbon Net Zero projects support the sustainability strategy of your organization. Every scenario can be described as win-win situation.',
	},
	{
		image: factory,
		title: ['Cut & ', 'Reduce'],
		desc: "Knowing the project's CO2 footprint allows you to take action before applying any offset. Like cutting out on paper use or restricting long distance travel.",
	},
	{
		image: windmills,
		title: ['Make ', 'Offset ', 'Investment'],
		desc: 'As a project supplier, you may provide an offsetting investment, as a project investor you can commit to investing in green offset. We are confident that doing so it will provide You a competitive advantage. Your project will become carbon neutral.',
	},
];

//Script
function WhyUs() {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const [slide, setSlide] = useState(1);
	const [moveSide, setMoveSide] = useState('right');
	const [countInterval, setCountInterval] = useState(0);

	// >> Functions
	function changeSlide(number) {
		if ((number === 1 && slide === 4) || (number === -1 && slide === 1)) {
			return;
		}
		if (number === 1 && slide === 3) {
			setMoveSide('left');
		} else if (number === -1 && slide === 2) {
			setMoveSide('right');
		}
		setSlide(slide + number);
		setCountInterval(0);
	}

	function changeSlideNumber(number) {
		if (number === 1) {
			setSlide(number);
			setCountInterval(0);
			setMoveSide('right');
		} else if (number === 2) {
			setSlide(number);
			setCountInterval(0);
			//setMoveSide('right');
		} else if (number === 3) {
			setSlide(number);
			setCountInterval(0);
			//setMoveSide('right');
		} else if (number === 4) {
			setSlide(number);
			setCountInterval(0);
			setMoveSide('left');
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			autoChangeSlide();
		}, 10000);

		const intervalDwa = setInterval(() => {
			setCountInterval((countInterval) => countInterval + 1);
		}, 50);

		function autoChangeSlide() {
			if (moveSide === 'right') {
				if (slide + 1 === 4) {
					setMoveSide('left');
				}
				setSlide(slide + 1);
			} else {
				if (slide - 1 === 1) {
					setMoveSide('right');
				}
				setSlide(slide - 1);
			}
			setCountInterval(0);
		}

		return () => {
			clearInterval(interval);
			clearInterval(intervalDwa);
		};
	}, [slide, moveSide]);

	// >> Render
	return (
		<div className={styles.mainDiv} id="whyUs" data-aos="fade-up">
			<div className={styles.insideDiv}>
				<div className={styles.topOrnament}>
					<Image
						src={ornament1}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>

				<div className={styles.mainTitle} data-aos="fade-up">
					4 Steps why{' '}
					<span className={`${styles.blueText} blueText`}>
						CO2it?
					</span>
				</div>

				{slides.map((element, index) => {
					return (
						<div
							className={styles.slide}
							style={{
								right: `${(slide - (index + 1)) * 150}%`,
								opacity: slide - 1 === index ? 1 : 0,
							}}
							key={index}
						>
							<div
								className={styles.leftSlideSection}
								data-aos="fade-right"
							>
								<div className={styles.slideArrowsSection}>
									<IconButton
										className={styles.circleButton}
										onClick={() => {
											changeSlide(-1);
										}}
										disabled={index === 0 ? true : false}
									>
										<SouthRoundedIcon
											className={styles.circleButtonArrow}
										/>
									</IconButton>
									<IconButton
										className={styles.circleButton}
										onClick={() => {
											changeSlide(1);
										}}
										disabled={index === 3 ? true : false}
									>
										<SouthRoundedIcon
											className={`${styles.circleButtonArrow} ${styles.circleButtonRight}`}
										/>
									</IconButton>
								</div>
								<div className={styles.slideTitle}>
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
								<div className={styles.slideDesc}>
									{element.desc}
								</div>
							</div>
							<div
								className={styles.rightSlideSection}
								data-aos="fade-left"
							>
								<Image
									src={element.image}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
							<div
								className={styles.linesOutSection}
								data-aos="fade-up"
							>
								<div className={styles.linesSection}>
									<div
										className={`${styles.oneLine} ${
											slide === 1 ? styles.selLine : false
										}`}
										onClick={() => {
											changeSlideNumber(1);
										}}
									>
										<div
											className={`${styles.filledLine}`}
											style={{
												width: `${countInterval / 2}%`,
												opacity: slide === 1 ? 1 : 0,
											}}
										></div>
									</div>

									<div
										className={`${styles.oneLine} ${
											slide === 2 ? styles.selLine : false
										}`}
										onClick={() => {
											changeSlideNumber(2);
										}}
									>
										<div
											className={`${styles.filledLine}`}
											style={{
												width: `${countInterval / 2}%`,
												opacity: slide === 2 ? 1 : 0,
											}}
										></div>
									</div>

									<div
										className={`${styles.oneLine} ${
											slide === 3 ? styles.selLine : false
										}`}
										onClick={() => {
											changeSlideNumber(3);
										}}
									>
										<div
											className={`${styles.filledLine}`}
											style={{
												width: `${countInterval / 2}%`,
												opacity: slide === 3 ? 1 : 0,
											}}
										></div>
									</div>

									<div
										className={`${styles.oneLine} ${
											slide === 4 ? styles.selLine : false
										}`}
										onClick={() => {
											changeSlideNumber(4);
										}}
									>
										<div
											className={`${styles.filledLine}`}
											style={{
												width: `${countInterval / 2}%`,
												opacity: slide === 4 ? 1 : 0,
											}}
										></div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default WhyUs;
