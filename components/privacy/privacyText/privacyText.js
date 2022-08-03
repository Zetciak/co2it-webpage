// >> Modules
import Image from 'next/image';

// >> Styles
import useStyles from './privacyTextStyle.js';

// >> Images
import ornament1 from '../../../public/background/ornament1.png';

// >> Variables
let texts = [
	{
		type: 'TITLE',
		desc: ['', 'Introduction'],
	},
	{
		type: 'DESC',
		desc: [
			'This is the Privacy Statement and Policy (“Privacy Statement”) for Liltoolz Sp z o.o., ("Liltoolz") in and only connection with its named service and designated website CO2it.com “CO2it”.',
		],
	},
	{
		type: 'DESC',
		desc: ['In below context every use of CO2it means also Liltoolz'],
	},
	{
		type: 'DESC',
		desc: ['This Privacy Policy was last updated on 1st August, 2022.'],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz understands that your privacy is important. Liltoolz is committed to protecting your privacy and personal information you provide or as you access and use materials on CO2it.com (the "Site"), including the Site subscription pages or other websites or apps that post a link to this Privacy Statement. In addition, information that you submit to Liltoolz or CO2it in response to an email request for information or other outreach from Liltoolz, or through Liltoolz’s employment application processes, will be treated in accordance with this Privacy Statement.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz may, in its discretion, amend this Privacy Statement from time to time. To ensure you are able to remain informed about the information we collect and how we use it, material changes to our statement will be reflected here. This Site may contain links to external sites which are not governed by this Privacy Statement. Liltoolz does not take responsibility for the privacy practices of any third party sites to which we link. We encourage you to review the privacy policies of any such sites before you submit information there.',
		],
	},
	{
		type: 'TITLE',
		desc: ['Your acceptance of ', 'this privacy ', 'statement'],
	},
	{
		type: 'DESC',
		desc: [
			'Please read this Privacy Statement carefully. By browsing our website and expressly consenting where required, you agree to be bound by this Privacy Statement.',
		],
	},
	{
		type: 'TITLE',
		desc: ['Information that we collect ', 'and how we ', 'use it'],
	},
	{
		type: 'DESC',
		desc: ['What information do we collect?'],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz collects information from you when you create your account for the Site, request copies of publications, subscribe for email newsletters and press releases, seek additional information regarding our services or employment opportunities, databases, or register for conferences and other Liltoolzsponsored events. If you do not provide such information, you will not be able to create an account for the Site, request copies of publications, subscribe for email newsletters and press releases, seek additional information regarding our services or employment opportunities.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'Personal information that we may collect includes: names, addresses, e-mail addresses, phone numbers, unique personal identifiers, financial information, subject areas of interest and/or demographic information. ',
		],
	},
	{
		type: 'DESC',
		desc: [
			'In addition, we sometimes aggregate demographic information and the types of systems and browsers of users Liltoolz also may conduct user surveys on the Web or use technologies to provide Liltoolz with information on a number of areas, such as user identity, user viewing habits, whether or not users found what they were searching for, whether the Site content is relevant to user needs, and the like.',
		],
	},
	{
		type: 'TITLE',
		desc: ['How do we use ', 'personal information?'],
	},
	{
		type: 'DESC',
		desc: [
			'The purposes and uses of your personal information will depend on the use of the Site and the personal information provided. We process your personal information: ',
		],
	},
	{
		type: 'DESC',
		desc: [
			'(i) for the purposes of safeguarding the legitimate interests pursued by Liltoolz. This includes:',
		],
	},
	{
		type: 'DESC',
		desc: [
			'• Informing you about updates to the service and notifying you about other products and services offered by Liltoolz that may be of interest to you, including information regarding publications and events',
		],
	},
	{
		type: 'DESC',
		desc: [
			'• Tailoring your experience at the Site with relevant Liltoolz materials',
		],
	},
	{
		type: 'DESC',
		desc: [
			'• Understanding the Site’s user population, identifying subject areas of interest, and determining whether the Site is designed to work with the computer settings of a majority of our visitors',
		],
	},
	{
		type: 'DESC',
		desc: [
			'• Measuring and improving the effectiveness of Liltoolz marketing programs across different channels',
		],
	},
	{
		type: 'DESC',
		desc: ['• Improving our web content and navigation.'],
	},
	{
		type: 'DESC',
		desc: [
			'(ii) on the basis of your consent. Insofar as you have granted us consent to the processing of personal information for specific purposes (for example, your application form for employment with Liltoolz), the lawfulness of such processing is based on your consent. You may withdraw your consent at any time.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'(iii) for compliance with a legal obligation. This includes anti-fraud and anti-money laundering measures as well as tax and social security requirements.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'We will not sell, share, or rent or otherwise make available your personal information to other parties, except that we may disclose the information to third parties who perform services on our behalf and have a need to access the information in connection with those services. Any third parties will only process this information to the extent to which and within the limits that Liltoolz itself is permitted to process that data. In addition, Liltoolz may disclose your contact information in response to inquiries by bona-fide rights owners in connection with allegations of infringement of copyright or other proprietary rights arising from information that you have posted on the Site or otherwise provided to Liltoolz.',
		],
	},
	{
		type: 'TITLE',
		desc: ['How we might ', 'share your ', 'information'],
	},
	{
		type: 'DESC',
		desc: [
			'The third parties with whom we may need to share personal information to help us provide services andproducts to you and to run our Website include:',
		],
	},
	{
		type: 'DESC',
		desc: ['• our subsidiaries or affiliates;'],
	},
	{
		type: 'DESC',
		desc: ['• our advisors;'],
	},
	{
		type: 'DESC',
		desc: [
			'our third party service providers who process information on our behalf to help run some of our internal business operations including email distribution, IT services and marketing and events services;',
		],
	},
	{
		type: 'DESC',
		desc: [
			'• our business partners for publications and events co-organized by Liltoolz and them;',
		],
	},
	{
		type: 'DESC',
		desc: [
			'• law enforcement bodies in order to comply with any legal obligation or court order',
		],
	},
	{
		type: 'DESC',
		desc: [
			'The Site may be viewed and accessed anywhere in the world including countries that may not have laws regulating the use and transfer of personally identifiable information. By using the Site, submitting information through this site, or submitting personal information to Liltoolz through other means you voluntarily consent to this Privacy Policy.',
		],
	},
	{
		type: 'TITLE',
		desc: ['Retention of ', 'your personal ', 'information'],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz retains your personal information for so long as is necessary to fulfil the purpose for which it was collected. We may retain your personal information for longer if they may be the subject of a legal claim, or may otherwise be relevant for future litigation. ',
		],
	},
	{
		type: 'TITLE',
		desc: ['', 'Marketing'],
	},
	{
		type: 'DESC',
		desc: [
			'If, at any time, you prefer not to receive further communications from us in any or all forms you will have the ability to unsubscribe from such communications by either means of a link provided in every e-mail that is sent to you by us or sending direct request via email (in case there is no link available). When subscribing to CO2it e-mail newsletters, you are given the opportunity to select which promotions, news, and information you would like to receive at the time of sign up, and you will have the opportunity to unsubscribe from such communications.',
		],
	},
	{
		type: 'TITLE',
		desc: ['Cookies and ', 'other tracking ', 'technologies'],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz may use cookies on this Site and in our communications with you to keep track of your visit to our Site and our communications with you. A “cookie” is a small amount of data sent from a Web server to your browser and stored on your computer’s hard drive. Other tracking technologies work similarly to cookies and place a small amount of data on your devices to monitor your website activity to allow us to collect information about how you use our Site and our services. With most internet browsers, you can erase cookies from your computer hard drive, block all cookies, or receive a warning before a cookie is stored on your computer. Please refer to your browser instructions or you can visit https://www.aboutcookies.org/ which will give you more information. Once you have given your consent to use cookies we shall store a cookie on your computer or device to remember this for next time. If you wish to withdraw consent at any time you will need to delete our cookies using your web browsers settings. Please be advised that certain sections or functionalities of the Site may be inaccessible to you if your browser does not accept cookies.',
		],
	},
	{
		type: 'DESC',
		desc: ['We may use the following types of cookies:'],
	},
	{
		type: 'DESC',
		desc: ['“Required Cookies” are required to operate this site.'],
	},
	{
		type: 'DESC',
		desc: [
			'“Functional Cookies” are used to store choices and preferences, providing a convenient browsing experience.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'“Advertising Cookies” are used by us or third-party providers to analyze how the Site and our services are used. ',
		],
	},
	{
		type: 'DESC',
		desc: [
			'You may always refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do opt-out you may not be able to use the full functionality of this website. ',
		],
	},
	{
		type: 'DESC',
		desc: [
			'Web beacons. CO2it may include a web beacon, which is a graphic image, in a majority of the HTML email messages we send. CO2it uses web beacons, alone or in conjunction, with cookies to compile information about your usage of the Site and interaction with emails from Co2it. We use the capability to determine whether or not an email has been received, opened, or when an URL has been clicked inside of an email that directs you to the Site. These web beacons are used to: (i) operate and improve Liltoolz websites, services, and email communications, (ii) send emails in a format users can read and (iii) track the aggregate number of emails opened. The web beacon does not collect your personal information, however the information compiled by the web beacon allows us to tie a user to information Liltoolz has collected in data collection process as set out in this Privacy Statement. You may refuse the use of web beacons by selecting the appropriate settings on your email program to disable image and refraining from clicking on any links in email messages.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'By continuing to browse or use the Site and Co2it services, you agree that we can store and access cookies and other tracking technologies as described herein. ',
		],
	},
	{
		type: 'TITLE',
		desc: ['Security ', 'processes'],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz uses appropriate technological and operational security processes designed to protect personally identifiable information from loss, misuse, alteration or destruction. Only authorized employees and contractors will have access to any data provided by you, and that access is limited by need. Each employee or contractor having access to any personally-identifiable information is obligated to maintain its confidentiality. Although we take steps that are generally accepted as industry standard to protect your personally-identifiable information, Liltoolz cannot guarantee that your personally-identifiable information will not become accessible to unauthorized persons and Liltoolz cannot be responsible for any actions resulting from a breach of security when information is supplied over the internet or any public computer network.',
		],
	},
	{
		type: 'TITLE',
		desc: ['Links to ', 'other ', 'web sites'],
	},
	{
		type: 'DESC',
		desc: [
			'This Site may contain links to other Web sites not operated by Liltoolz.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz is not responsible for the privacy practices or the content of any non-Liltoolz web sites to which we link from the Site. We are not responsible for the protection and privacy of any information you provide whilst visiting other websites and sites not governed by our Privacy Statement. We cannot control the content or security of such websites. We cannot be held responsible for any loss or damage incurred by a user as a result of visiting such websites. No links are intended to be, nor should be construed as, an endorsement of any kind by us of that other website.',
		],
	},
	{
		type: 'TITLE',
		desc: ['Compliance ', 'with ', 'law'],
	},
	{
		type: 'DESC',
		desc: [
			'Liltoolz complies with all applicable privacy laws and regulations. Liltoolz may be compelled to surrender personal user or customer information to legal authorities if presented with a court subpoena or similar legal or administrative order, or as required or permitted by the laws, rules and regulations of any nation, state or other applicable jurisdiction. Also, in the event of a violation of the terms and conditions of use of the Site or a violation of any restrictions on use of materials provided in or through the Site, we may disclose personal user information to our affected business partners or legal authorities',
		],
	},
	{
		type: 'TITLE',
		desc: ['Acces ', 'rights'],
	},
	{
		type: 'DESC',
		desc: [
			'In accordance with applicable data protection laws, including but not limited to the GDPR, you have a right to request a copy of the personal information we hold about you and details of how we use that information. If any of the information held about you is incorrect or out of date, you have the right to amend or rectify it, please follow the process outlined below and we will amend our records where appropriate. You also have the right to require us to erase your personal data, stop processing your personal data, restricting the processing of your personal information, right of portability of your personal information and/or to withdraw your consent to processing. This may not apply if there are other legal justifications to continue processing. If you think we may have incorrect personal information or would like a copy of the personal information we hold on you, or to exercise any other data protection right, please contact us. Please note that we need you to prove who you are before we can provide you with any information.',
		],
	},
	{
		type: 'DESC',
		desc: [
			'You also have a right to lodge a complaint with a relevant supervisory authority.',
		],
	},
	{
		type: 'TITLE',
		desc: ['', 'Children'],
	},
	{
		type: 'DESC',
		desc: [
			"Liltoolz understands the importance of protecting children's privacy, particularly in their online interactions. This Site is not designed for and does not intentionally target or solicit to children 18 years of age and younger.",
		],
	},
	{
		type: 'TITLE',
		desc: ['', 'Contact us'],
	},
	{
		type: 'DESC',
		desc: [
			'For further questions you may contact directly under following mail address:',
		],
	},
	{
		type: 'ADRES',
		desc: ['Liltoolz Sp z o.o.'],
	},
	{
		type: 'ADRES',
		desc: ['Tymotki 12'],
	},
	{
		type: 'ADRES',
		desc: ['03-289 Poland'],
	},
	{
		type: 'ADRES',
		desc: ['or e-mail address'],
	},
	{
		type: 'ADRES',
		desc: ['contact@co2it.com'],
	},
];

//Script
function PrivacyText() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="privacy">
			<div className={styles.insideDiv}>
				<div className={styles.mainTitle}>
					<span className={`${styles.blueText} blueText`}>CO2it</span>{' '}
					Privacy Notice
				</div>
				<div className={styles.allTextsDiv}>
					{' '}
					{texts.map((element, index) => {
						return (
							<div
								className={
									element.type === 'TITLE'
										? styles.TITLE
										: element.type === 'DESC'
										? styles.DESC
										: styles.ADRES
								}
								key={index}
							>
								{element.desc.map((element2, index2) => {
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
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default PrivacyText;
