// >> Modules
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize.js';

// >> Styles
import useStyles from './partnersStyle.js';

// >> Images
import binance from '../../../public/logos/binance.png';
import bitmex from '../../../public/logos/bitmex.png';
import blockchain from '../../../public/logos/blockchain.png';
import ethereum from '../../../public/logos/ethereum.png';

// >> Variables
let logos = [
	{ logo: binance, link: 'https://www.binance.com/' },
	{ logo: ethereum, link: 'https://ethereum.org/' },
	{ logo: blockchain, link: 'https://blockchain.io/' },
	{ logo: bitmex, link: 'https://www.bitmex.com/' },
];

//Script
function Partners() {
	// >> Variables
	const [logosWidth, setLogosWidth] = useState(0);
	const size = useWindowSize();

	// >> Functions
	useEffect(() => {
		let countWidth = 0;
		logos.map((element) => {
			countWidth = countWidth + element.logo.width / 3.25 + 100;
		});
		setLogosWidth(countWidth);
	}, []);

	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="partners" data-aos="fade-up">
			<div className={styles.insideDiv}>
				<div
					className={styles.logosDiv}
					style={
						size.width > 1439 ? { width: `${logosWidth}px` } : {}
					}
				>
					{logos.map((element, index) => {
						return (
							<a
								key={index}
								className={styles.oneLogo}
								style={
									size.width > 1345
										? {
												width: `${
													element.logo.width / 3.25
												}px`,
										  }
										: {}
								}
								href={element.link}
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src={element.logo}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Partners;
