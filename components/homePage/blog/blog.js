// >> Modules
import Image from 'next/image';

// >> Styles
import useStyles from './blogStyle.js';

// >> Images
import blog from '../../../public/extensions/blog.png';
import ornament1 from '../../../public/background/ornament1.png';
import landingStar from '../../../public/background/landingStar.png';

//Script
function Blog() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div
			className={styles.mainDiv}
			id="blog"
			data-aos="fade-up"
			style={{ display: 'none' }}
		>
			<div className={styles.insideDiv}>
				<div className={styles.ornament1}>
					<Image
						src={ornament1}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>
				<div className={styles.ornament2}>
					<Image
						src={ornament1}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>
				<div className={styles.ornament3}>
					<Image
						src={ornament1}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>
				<div className={styles.ornament4}>
					<Image
						src={ornament1}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>

				<div className={styles.blogDiv}>
					<div className={styles.outsideImageDiv}>
						<div className={styles.imageDiv}>
							<Image
								src={blog}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					</div>
					<div className={styles.star1}>
						<Image
							src={landingStar}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.star2}>
						<Image
							src={landingStar}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.mainTitle} data-aos="fade-up">
						Blog is{' '}
						<span className={`${styles.blueText} blueText`}>
							coming soon!
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
