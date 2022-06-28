import {
	EmailWrapper,
	Image,
	Link,
	Paragraph,
	Table,
} from '@reactEmail/components';
import type { NextPage } from 'next';

// import EmailWrapper from '@reactEmail/components';

const backgroundColorImageSpecial = {
	backgroundColor: 'rgb(101, 255, 253)',
	// backgroundImage: '-moz-linear-gradient(-45deg, rgba(101, 255, 253, 1) 1%, rgba(34, 150, 238, 1) 100% )',
	// backgroundImage: '-webkit-linear-gradient(-45deg, rgba(101, 255, 253, 1) 1%, rgba(34, 150, 238, 1) 100%);',
	backgroundImage:
		'linear-gradient(135deg, rgba(101, 255, 253, 1) 1%, rgba(34, 150, 238, 1) 100%)',
};
const backgroundColorSpecial = {
	backgroundColor: '#fafafa',
};
const fontColorSpecial = {
	color: '#7d7d7d',
};
const fontFamily1 = {
	fontFamily:
		"'Open Sans', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const MainHeaderRowHeaderLeft = () => {
	return (
		<Table
			className='header-left'
			align='left'
			width='50%'
			style={{
				padding: '15px 15px 70px 15px',
				...backgroundColorImageSpecial,
			}}
			tr
		>
			<td
				style={{
					color: 'white',
					...fontFamily1,
				}}
			>
				<Image src='./images/logo.png' alt='logo' />
				<h2
					style={{
						padding: '25px 0 10px',
						fontSize: 30,
						margin: 0,
						fontWeight: 300,
						lineHeight: 1,
					}}
				>
					Get ready for
				</h2>
				<h1
					style={{
						fontSize: 80,
						margin: 0,
						lineHeight: 1,
						padding: '0 0 10px',
					}}
				>
					Hero
				</h1>
				<Paragraph
					style={{
						fontStyle: 'italic',
						fontSize: 14,
						margin: 0,
						lineHeight: 1.5,
						padding: '20px 0 50px',
					}}
				>
					it seems like hundreds of new iWatch apps pop up every week, but which
					ones should you bother trying?
				</Paragraph>
				<Link
					href='#'
					className='ghost-btn'
					style={{
						fontSize: 12,
						borderRadius: 3,
						border: '2px solid white',
						textDecoration: 'none',
						color: 'white',
						padding: '10px 15px',
						textTransform: 'uppercase',
					}}
				>
					Learn More
				</Link>
			</td>
			<style global jsx>{`
				@media only screen and (min-width: 960px) {
					.header-left {
						padding: 36px 50px 70px !important;
					}
				}
				@media only screen and (max-width: 600px) {
					.header-left {
						width: 100%;
					}
				}
			`}</style>
		</Table>
	);
};
const MainHeaderRowHeaderRight = () => {
	return (
		<Table className='header-right' align='right' width='50%' trs>
			<td>
				<Table
					width='100%'
					align='center'
					style={{ padding: 20 }}
					className='menu-table'
					tr={{
						className: 'header',
						style: {
							...fontColorSpecial,
							fontSize: 14,
							fontWeight: 600,
						},
					}}
				>
					{[
						{ text: 'About', href: '#' },
						{ text: 'Careers', href: '#' },
						{ text: 'Contact', href: '#' },
					].map(({ href, text }) => (
						<td align='center' key={text}>
							<Link href={href}>{text}</Link>
						</td>
					))}
				</Table>
			</td>
			<td
				align='center'
				valign='bottom'
				style={{
					padding: '16px 16px 0 16px',
				}}
			>
				<Image
					src='./images/smartwatch.png'
					alt='image of apple watch'
					style={{ position: 'relative', bottom: -4 }}
				/>
			</td>
			<style global jsx>{`
				@media (prefers-color-scheme: dark) {
					.header {
						color: white !important;
					}
				}
				@media only screen and (max-width: 600px) {
					.header-right {
						width: 100%;
					}
				}
			`}</style>
		</Table>
	);
};
const MainHeaderRow = () => {
	return (
		<>
			<MainHeaderRowHeaderLeft />
			<MainHeaderRowHeaderRight />
		</>
	);
};

const LetsYouRow = () => {
	return (
		<Table
			trs
			width='100%'
			className='lets-you-row'
			style={{
				...backgroundColorSpecial,
				color: '#333333',
			}}
		>
			<td align='center'>
				<h3
					style={{
						...fontFamily1,
						padding: '36px 0 5px 0',
						fontWeight: 300,
						textTransform: 'uppercase',
						fontSize: 24,
						marginTop: 0,
					}}
					className='row-section-header'
				>
					HERO LET&apos;S YOU...
				</h3>
			</td>
			<td align='center'>
				{[
					{
						mainTable: {
							className: 'left-column',
						},
						header: {
							icon: {
								src: './images/bell_icon.png',
								alt: 'image of a bell icon',
							},
							text: 'Notify',
						},
						body: {
							paragraph: 'Cras mattis consectetur purus sit fermentum',
							link: {
								href: '#',
								text: 'Learn More',
							},
						},
					},
					{
						mainTable: {
							className: 'middle-column',
						},
						header: {
							icon: {
								src: './images/share_icon.png',
								alt: 'image of a share icon',
							},
							text: 'Notify',
						},
						body: {
							paragraph: 'Cras mattis consectetur purus sit fermentum',
							link: {
								href: '#',
								text: 'Learn More',
							},
						},
					},
					{
						mainTable: {
							className: 'right-column',
						},
						header: {
							icon: {
								src: './images/wifi_icon.png',
								alt: 'image of a wifi icon',
							},
							text: 'Notify',
						},
						body: {
							paragraph: 'Cras mattis consectetur purus sit fermentum',
							link: {
								href: '#',
								text: 'Learn More',
							},
						},
					},
				].map(({ mainTable, header, body }, index) => (
					<Table
						key={index}
						className={`${mainTable.className} column`}
						// width='33.33%'
						align='left'
						width='33.33%'
						style={{
							padding: '15px 15px 70px 15px',
						}}
					>
						<tr>
							<td>
								<Table
									align='left'
									className='title-icon'
									style={{ padding: 0 }}
								>
									<tr>
										<td className='icon-holder'>
											<Image src={header.icon.src} alt={header.icon.alt} />
										</td>
										<td
											className='text-holder'
											style={{
												padding: ' 0 0 0 15px',
												fontWeight: 600,
												textTransform: 'uppercase',
												fontSize: 14,
											}}
										>
											{header.text}
										</td>
									</tr>
								</Table>
							</td>
						</tr>
						<tr>
							<td>
								<p
									style={{
										color: '#7f8887',
										fontWeight: 400,
										lineHeight: 1.8,
										fontSize: 14,
										marginTop: 0,
									}}
								>
									{body.paragraph}
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<a
									href={body.link.href}
									style={{
										color: '#2792ec',
										textDecoration: 'none',
										fontWeight: 600,
										fontSize: 14,
									}}
								>
									{body.link.text}
								</a>
							</td>
						</tr>
					</Table>
				))}
			</td>
			<style global jsx>{`
				@media (prefers-color-scheme: dark) {
					.lets-you-row {
						color: white !important;
						background-color: #100a0a !important;
					}
				}
				@media only screen and (min-width: 960px) {
					.lets-you-row {
						padding: 0 50px;
					}
				}
				@media only screen and (max-width: 600px) {
					.lets-you-row .row-section-header {
						padding: 0 !important;
						margin: 40px 40px 10px 40px !important;
						font-weight: 500 !important;
					}
					.lets-you-row .column {
						width: 100%;
						text-align: center;
						padding: 25px !important;
					}
					.lets-you-row .title-icon {
						width: 100%;
					}
					.lets-you-row .title-icon .icon-holder {
						text-align: right;
					}
					.lets-you-row .title-icon .text-holder {
						text-align: left;
					}
				}
			`}</style>
		</Table>
	);
};

const AdvanceRow = () => {
	return (
		<Table
			className='advance-table'
			width='100%'
			style={{
				padding: '15px 15px 70px',
			}}
			trs
		>
			<td
				style={{
					padding: '36px 0 5px',
				}}
				align='center'
			>
				<Image
					src='./images/image_head.jpg'
					alt='image head'
					className='model with apple watch image_head'
				/>
			</td>
			<td align='center'>
				<h3
					style={{
						color: '#333333',
						padding: '25px 0 5px 0',
						fontWeight: 300,
						textTransform: 'capitalize',
						fontSize: 24,
						margin: 0,
					}}
				>
					World&apos;s
					<span
						style={{
							fontWeight: 400,
						}}
					>
						most advanced App
					</span>
					<br />
					with High-Tech solutions
				</h3>
			</td>
			<td>
				<Table
					className='left-column column'
					width='50%'
					style={{ padding: '15px 15px 70px 15px' }}
					align='left'
				>
					<tr className='text-holder'>
						<td>
							<Paragraph
								style={{
									color: '#7f8887',
									fontWeight: 400,
									lineHeight: 1.8,
									fontSize: 14,
									padding: '0 0 30px',
								}}
							>
								The Strong museum has collected more than 55,000 video games and
								related artifacts from the history of gaming.
							</Paragraph>
						</td>
					</tr>
					<tr className='left-store store' style={{ textAlign: 'right' }}>
						<td>
							<Image src='./images/appstore.png' alt='logo of apple appstore' />
						</td>
					</tr>
				</Table>
				<Table
					className='right-column column'
					width='50%'
					style={{
						padding: '15px 15px 70px',
					}}
					align='right'
				>
					<tr className='text-holder'>
						<td>
							<Paragraph
								style={{
									color: '#7f8887',
									fontWeight: 400,
									lineHeight: 1.8,
									fontSize: 14,
									padding: '0 0 30px',
								}}
							>
								The Strong museum has collected more than 55,000 video games and
								related artifacts from the history of gaming.
							</Paragraph>
						</td>
					</tr>
					<tr className='right-store store' style={{ textAlign: 'left' }}>
						<td>
							<Image
								src='./images/playstore.png'
								alt='logo for android playstore'
							/>
						</td>
					</tr>
				</Table>
			</td>
			<style global jsx>{`
				@media only screen and (min-width: 960px) {
					.advance-table {
						padding: 15px 50px 70px;
					}
				}

				@media only screen and (max-width: 600px) {
					.image_head {
						width: 100%;
					}

					.column {
						width: 100%;
						text-align: center;
						padding: 25px 5px 5px !important;
					}

					.column .store {
						text-align: center !important;
					}

					.column .text-holder p {
						margin: 10px 0 15px !important;
					}
				}
			`}</style>
		</Table>
	);
};

const OneSolutionRow = () => {
	return (
		<Table
			className='one-solution-table'
			width='100%'
			align='left'
			style={{
				padding: '50px 0',
				backgroundColor: '#141414',
			}}
			tr
		>
			<td>
				<Image
					src='./images/one_app.jpg'
					alt='information for application'
					style={{
						width: '100%',
					}}
				/>
			</td>
			<style global jsx>{`
				@media only screen and (min-width: 960px) {
					.one-solution-table {
						text-align: center;
					}

					.one-solution-table img {
						max-width: 611px;
					}
				}
			`}</style>
		</Table>
	);
};

const Home: NextPage = () => {
	return (
		<EmailWrapper>
			<MainHeaderRow />
			<LetsYouRow />
			<AdvanceRow />
			<OneSolutionRow />
		</EmailWrapper>
	);
};

export default Home;
