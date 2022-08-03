// >> Modules
import Image from 'next/image';
import { Button, Input } from '@mui/material';
import { useEffect, useState } from 'react';
import moment from 'moment';
import SteinStore from 'stein-js-client';

// >> Styles
import useStyles from './contactUsStyle.js';

// >> Images
import titleBottomLineWhite from '../../../public/extensions/titleBottomLineWhite.png';

// >> Variables
const store = new SteinStore(
	'https://api.steinhq.com/v1/storages/62e42caa4906bb0537561b57'
);

//Script
function ContactUs() {
	// >> Variables
	const [email, setEmail] = useState('');
	const [buttonText, setButtonText] = useState('Let’s connect!');
	const [currentDate, setCurrentDate] = useState('');
	const [disabledButton, setDisabledButton] = useState(false);

	// >> Style
	const styles = useStyles();

	// >> Function
	async function saveEmail(trueorfalse) {
		setDisabledButton(true);
		setButtonText('Saving...');

		store
			.append('Arkusz1', [
				{
					EMail: email,
					Data: currentDate,
					Calendly: trueorfalse,
				},
			])
			.then((res) => {
				console.log(res);
				setButtonText('Saved!');
				setEmail('');
			});
	}

	const handleChange = (event) => {
		setEmail(event.target.value);
	};

	useEffect(() => {
		var date = moment().utcOffset('+02:00').format('DD.MM.YYYY HH:mm:ss');
		setCurrentDate(date);
	}, []);

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.bgDiv}></div>
			<div className={styles.insideDiv} data-aos="fade-up">
				<div className={styles.panelDiv} data-aos="fade-up">
					<div className={styles.mainTitle} data-aos="fade-up">
						Start Your{' '}
						<span className={`${styles.blueText} blueText`}>
							Journey Today
							<div className={styles.bottomTitleLine}>
								<Image
									src={titleBottomLineWhite}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
						</span>
						<div className={styles.contactUs} data-aos="fade-up">
							Contact{' '}
							<span className={`${styles.blueText} blueText`}>
								us!
							</span>
						</div>
						<div className={styles.editBoxDiv} data-aos="fade-up">
							<div className={styles.inputDiv}>
								<Input
									disableUnderline={true}
									fullWidth={true}
									placeholder="Your E-mail address"
									onChange={handleChange}
									value={email}
								></Input>
							</div>
							<div className={styles.buttonDiv2}>
								<Button
									variant="contained"
									className={styles.button2}
									onClick={() => {
										saveEmail('Tak/Yes');
									}}
									href="https://calendly.com/co2it"
									target="_blank"
								>
									<p>Book a Call</p>
								</Button>
							</div>
							<div className={styles.buttonDiv}>
								<Button
									variant="contained"
									className={styles.button}
									onClick={() => {
										saveEmail('Nie/No');
									}}
									disabled={disabledButton}
								>
									<p>{buttonText}</p>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
