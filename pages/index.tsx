import { EmailWrapper, Img, A, P, Table, Td } from '@reactEmail/components';
import HTMLComment from '@reactEmail/components/HTMLComment';
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

const MainHeaderRow = () => {
	return (
		<Table className='main-header' align='center' width='100%' tr>
			<HTMLComment
				statement={`[if (gte mso 9)|(IE)]>
			<td width="300" align="center">
<![endif]`}
				removeExtraSpaces
			/>
			<Td>
				<Table
					width='300px'
					className='main-header-left'
					align='left'
					style={{
						padding: '15px 15px 70px 15px',
						...backgroundColorImageSpecial,
					}}
					// width='100%'
					tr
				>
					<td
						style={{
							color: 'white',
							...fontFamily1,
						}}
					>
						<Img src='./images/logo.png' alt='logo' />
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
						<P
							style={{
								fontStyle: 'italic',
								fontSize: 14,
								margin: 0,
								lineHeight: 1.5,
								padding: '20px 0 50px',
							}}
						>
							it seems like hundreds of new iWatch apps pop up every week, but
							which ones should you bother trying?
						</P>
						<A
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
						</A>
					</td>
					<style global jsx>{`
						@media only screen and (min-width: 960px) {
							.main-header-left {
								width: 50% !important;
								padding: 36px 50px 70px !important;
							}
						}
						@media only screen and (max-width: 600px) {
							.main-header-left {
								width: 100%;
							}
						}
					`}</style>
				</Table>
				{/* </Td> */}
				<HTMLComment
					statement={`[if (gte mso 9)|(IE)]>
						</td>
						<![endif]`}
					removeExtraSpaces
				/>

				<HTMLComment
					statement={`[if (gte mso 9)|(IE)]>
				<td width="300" align="center">
 <![endif]`}
					removeExtraSpaces
				/>
				{/* <Td
			> */}
				<Table width='300px' className='main-header-right' align='right' trs>
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
									<A href={href}>{text}</A>
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
						<Img
							src='./images/smartwatch.png'
							alt='image of apple watch'
							style={{ position: 'relative', bottom: -4 }}
						/>
					</td>
					<style global jsx>{`
						@media (prefers-color-scheme: dark) {
							.main-header-right .header {
								color: white !important;
							}
						}
						@media only screen and (min-width: 960px) {
							.main-header-right {
								width: 50% !important;
							}
						}
						@media only screen and (max-width: 600px) {
							.main-header-right {
								width: 100%;
							}
						}
					`}</style>
				</Table>
			</Td>
			<HTMLComment
				statement={`[if (gte mso 9)|(IE)]>
						</td>
						<![endif]`}
				removeExtraSpaces
			/>
		</Table>
	);
};

const LetsYouRow = () => {
	return (
		<Table
			width='100%'
			className='lets-you-row'
			style={{
				...backgroundColorSpecial,
				color: '#333333',
			}}
		>
			<td
				align='center'
				style={{
					textAlign: 'center',
				}}
			>
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
					<>
						<HTMLComment
							statement={`[if (gte mso 9)|(IE)]>
			<td width="200" align="center">
<![endif]`}
							removeExtraSpaces
						/>
						<Table
							key={index}
							className={`${mainTable.className} column`}
							// width='33.33%'
							align='left'
							// width='33.33%'
							style={{
								padding: '15px 15px 70px 15px',
								width: '100%',
								maxWidth: 200,
							}}
						>
							<td>
								<Table
									align='left'
									className='title-icon'
									style={{ padding: 0 }}
									tr
								>
									<td className='icon-holder'>
										<Img src={header.icon.src} alt={header.icon.alt} />
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
								</Table>
							</td>
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
							<td>
								<A
									href={body.link.href}
									style={{
										color: '#2792ec',
										textDecoration: 'none',
										fontWeight: 600,
										fontSize: 14,
									}}
								>
									{body.link.text}
								</A>
							</td>
						</Table>
						<HTMLComment
							statement={`[if (gte mso 9)|(IE)]>
						</td>
						<![endif]`}
							removeExtraSpaces
						/>
					</>
				))}
			</td>
			<style global jsx>{`
				@media (prefers-color-scheme: dark) {
					.lets-you-row {
						color: white !important;
						background-color: #141414 !important;
					}
					.lets-you-row .column {
						max-width: 33.33% !important;
					}
				}
				@media only screen and (min-width: 960px) {
					.lets-you-row {
						padding: 0 50px;
					}
				}
				@media only screen and (max-width: 600px) {
					.lets-you-row {
						padding: 0 !important;
					}
					.lets-you-row .row-section-header {
						padding: 0 !important;
						margin: 40px 40px 10px 40px !important;
						fontweight: 500 !important;
					}
					.lets-you-row .column {
						max-width: 100% !important;
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
				<Img
					src='./images/image_head.jpg'
					alt='image head'
					className='model with apple watch image_head'
				/>
			</td>
			<td align='center' className='header-text'>
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
							<P
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
							</P>
						</td>
					</tr>
					<tr className='left-store store' style={{ textAlign: 'right' }}>
						<td>
							<Img src='./images/appstore.png' alt='logo of apple appstore' />
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
							<P
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
							</P>
						</td>
					</tr>
					<tr className='right-store store' style={{ textAlign: 'left' }}>
						<td>
							<Img
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
					.advance-table .image_head {
						width: 100%;
					}

					.advance-table .column {
						width: 100%;
						text-align: center;
						padding: 25px 5px 5px !important;
					}

					.advance-table .column .store {
						text-align: center !important;
					}

					.advance-table .column .text-holder p {
						margin: 10px 0 15px !important;
					}
				}
				@media (prefers-color-scheme: dark) {
					.advance-table .header-text h3 {
						color: white !important;
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
				<Img
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

const JoinTogetherRow = () => {
	return (
		<Table
			className='join-together-table'
			width='100%'
			align='left'
			style={{ padding: '25px 5px 75px' }}
			trs
		>
			<td align='center' className='header'>
				<h3
					style={{
						color: '#333333',
						padding: '36px 0 5px',
						fontWeight: 300,
						textTransform: 'capitalize',
						fontSize: 24,
					}}
				>
					Features
					<span style={{ fontWeight: 600 }}>All Joined Together</span>
					in One App
				</h3>
			</td>
			<td className='body'>
				{[
					{
						table: {
							className: 'left-column',
						},
						image: {
							src: './images/watch_screen.png',
							alt: 'image of watch screen',
						},
						h5: {
							text: 'Sync',
						},
						link: {
							href: '#',
							text: 'Learn More',
						},
					},
					{
						table: {
							className: 'middle-column',
						},
						image: {
							src: './images/watch_screen.png',
							alt: 'image of watch screen',
						},
						h5: {
							text: 'SHARE',
						},
						link: {
							href: '#',
							text: 'Learn More',
						},
					},
					{
						table: {
							className: 'right-column',
						},
						image: {
							src: './images/watch_screen.png',
							alt: 'image of watch screen',
						},
						h5: {
							text: 'STATS',
						},
						link: {
							href: '#',
							text: 'Learn More',
						},
					},
				].map(({ table, image, h5, link }, index) => (
					<Table
						key={index}
						className={`${table} column`}
						width='33.33%'
						align='left'
						style={{ padding: '20px 0' }}
						trs
					>
						<td align='center'>
							<Img src={image.src} alt={image.alt} />
						</td>
						<td align='center'>
							<h5
								style={{
									color: '#333333',
									padding: '15px 0 5px',
									fontWeight: 600,
									textTransform: 'uppercase',
									fontSize: 14,
									margin: 0,
								}}
							>
								{h5.text}
							</h5>
						</td>
						<td align='center'>
							<P
								style={{
									color: '#7f8887',
									fontWeight: 400,
									lineHeight: 1.8,
									fontSize: 14,
									padding: '0 0 15px',
								}}
							>
								Computer manufacturer Lenovo is getting flak.
							</P>
						</td>
						<td align='center'>
							<A
								href={link.href}
								style={{
									color: '#2792ec',
									fontWeight: 600,
									fontSize: 14,
								}}
							>
								{link.text}
							</A>
						</td>
					</Table>
				))}
			</td>
			<style global jsx>{`
				@media (prefers-color-scheme: dark) {
					.join-together-table .header h3 {
						color: white !important;
					}
					.join-together-table .body h5 {
						color: white !important;
					}
				}
				@media only screen and (min-width: 960px) {
					.join-together-table .column {
						padding: 25px 50px !important;
					}
				}
				@media only screen and (max-width: 600px) {
					.join-together-table .column {
						width: 100%;
						padding: 25px 50px !important;
					}
				}
			`}</style>
		</Table>
	);
};

const DetailRow = () => {
	return (
		<Table width='600' className='container' tr>
			<td>
				<Table
					className='detail-table'
					width='100%'
					align='left'
					style={{
						padding: '50px 5px 25px',
					}}
					trs
				>
					{[
						[
							{
								header: {
									icon: {
										src: './images/phone_icon.png',
										alt: 'icon of phone',
									},
									text: 'RESPONSIVE LAYOUT',
								},
								body: {
									text: "Tanjin is one of nearly 2,000 people to have landed on Italy's southernmost.",
								},
							},
							{
								header: {
									icon: {
										src: './images/retina_icon.png',
										alt: 'icon of retina screens',
									},
									text: 'RETINA READY',
								},
								body: {
									text: "Tanjin is one of nearly 2,000 people to have landed on Italy's southernmost.",
								},
							},
						],
						[
							{
								header: {
									icon: {
										src: './images/check_icon.png',
										alt: 'icon of check',
									},
									text: 'VARIOUS SKINS',
								},
								body: {
									text: "Tanjin is one of nearly 2,000 people to have landed on Italy's southernmost.",
								},
							},
							{
								header: {
									icon: {
										src: './images/settings_icon.png',
										alt: 'icon of settings',
									},
									text: 'GREAT PERFORMANCE',
								},
								body: {
									text: "Tanjin is one of nearly 2,000 people to have landed on Italy's southernmost.",
								},
							},
						],
						[
							{
								header: {
									icon: {
										src: './images/menu_icon.png',
										alt: 'icon of menu',
									},
									text: 'USER FRIENDLY MENUS',
								},
								body: {
									text: "Tanjin is one of nearly 2,000 people to have landed on Italy's southernmost.",
								},
							},
							{
								header: {
									icon: {
										src: './images/share_icon.png',
										alt: 'icon of retina sharing',
									},
									text: 'SOCIAL SHARE',
								},
								body: {
									text: "Tanjin is one of nearly 2,000 people to have landed on Italy's southernmost.",
								},
							},
						],
					].map((item, index) => (
						<td key={index}>
							<Table className='one-row-table' width='100%' align='left' tr>
								{item.map(({ header, body }, index) => (
									<td
										className={index === 0 ? 'left-column' : 'right-column'}
										key={index}
									>
										<Table
											align='left'
											style={{ padding: '0px 15px 20px' }}
											trs
										>
											<td>
												<Table
													className='icon-table'
													width='100%'
													align='left'
													tr
												>
													<td>
														<Img src={header.icon.src} alt={header.icon.alt} />
													</td>
													<td
														style={{
															color: '#333333',
															padding: '0 0 0 15px',
															fontWeight: 600,
															textTransform: 'uppercase',
															fontSize: 14,
														}}
														className='header-text'
													>
														{header.text}
													</td>
												</Table>
											</td>
											<td>
												<P
													style={{
														color: '#7f8887',
														fontWeight: 400,
														lineHeight: 1.8,
														fontSize: 14,
													}}
												>
													{body.text}
												</P>
											</td>
										</Table>
									</td>
								))}
							</Table>
						</td>
					))}
				</Table>
			</td>
			<style global jsx>{`
				@media (prefers-color-scheme: dark) {
					.detail-table .one-row-table .header-text {
						color: white !important;
					}
				}
				@media only screen and (min-width: 960px) {
					.detail-table {
						padding: 50px 50px 25px !important;
					}
				}
				@media only screen and (max-width: 600px) {
					.detail-table {
						padding: 0 !important;
					}
					.detail-table .one-row-table .left-column {
						float: left;
						width: 100%;
					}
					.detail-table .one-row-table .right-column {
						float: right;
						width: 100%;
					}

					.detail-table .icon-table img {
						width: 40px !important;
						height: 40px !important;
					}
				}
			`}</style>
		</Table>
	);
};

const InterestRow = () => {
	return (
		<Table
			className='interest-table'
			width='100%'
			align='left'
			style={{
				padding: '75px 0',
				...backgroundColorImageSpecial,
			}}
			tr
		>
			<td align='center'>
				<h3
					style={{
						color: 'white',
						padding: '0 0 35px',
						margin: 0,
						fontWeight: 300,
						textTransform: 'capitalize',
						fontSize: 24,
					}}
				>
					Interested in our App?
				</h3>
				<P
					style={{
						fontStyle: 'italic',
						fontSize: 14,
						lineHeight: 1.5,
						padding: '0 0 50px',
						maxWidth: 400,
						color: 'white',
					}}
				>
					Muriel Bowser’s administration says move is unrelated to charges that
					encryption caused failures in Metro.
				</P>
				<A
					href='#'
					style={{
						borderRadius: 2,
						border: '2px solid white',
						padding: '7px 13px',
						textDecoration: 'none',
						color: 'white',
						textTransform: 'uppercase',
						fontSize: 12,
						fontWeight: 600,
					}}
				>
					request a quote
				</A>
			</td>
		</Table>
	);
};

const FooterRow = () => {
	return (
		<Table
			className='footer-table'
			width='100%'
			align='left'
			style={{
				padding: '25px 0 0',
			}}
		>
			<tr>
				<td align='center' className='header'>
					<h2
						style={{
							fontWeight: 700,
							color: '#1b1b1b',
							textTransform: 'uppercase',
							fontSize: 28,
						}}
					>
						Hero
					</h2>
				</td>
			</tr>
			<tr>
				<td align='center'>
					<Table
						className='icon-table'
						align='center'
						width='250px'
						// style
						tr
					>
						<td align='center'>
							<A href='http://www.twitter.com/'>
								<Img src='./images/twitter_icon.png' alt='twitter.com icon' />
							</A>
						</td>
						<td align='center'>
							<A href='http://www.facebook.com/'>
								<Img src='./images/facebook_icon.png' alt='facebook.com icon' />
							</A>
						</td>
						<td align='center'>
							<A href='http://www.google.com/'>
								<Img src='./images/google_icon.png' alt='google.com icon' />
							</A>
						</td>
						<td align='center'>
							<A href='http://www.pinterest.com/'>
								<Img
									src='./images/pinterest_icon.png'
									alt='pinterest.com icon'
								/>
							</A>
						</td>
						<td align='center'>
							<A href='http://www.linkedin.com/'>
								<Img src='./images/linkedin_icon.png' alt='linkedin.com icon' />
							</A>
						</td>
						<td align='center'>
							<A href='http://www.youtube.com/'>
								<Img src='./images/youtube_icon.png' alt='youtube.com icon' />
							</A>
						</td>
					</Table>
				</td>
			</tr>
			<tr>
				<td align='center'>
					<p
						style={{
							padding: '20px 0',
							color: '#b4b4b4',
							fontWeight: 400,
							lineHeight: 1.8,
							fontSize: 10,
						}}
					>
						&copy; 20XX All rights Reserved - YourCompany. Is your inbox
						overflowing?
						<A href='#' style={{ color: '#2792ec' }}>
							Unsubscribe
						</A>
					</p>
				</td>
			</tr>
			<style global jsx>{`
				@media (prefers-color-scheme: dark) {
					.footer-table .header h2 {
						color: white !important;
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
			<JoinTogetherRow />
			<DetailRow />
			<InterestRow />
			<FooterRow />
		</EmailWrapper>
	);
};

export default Home;
