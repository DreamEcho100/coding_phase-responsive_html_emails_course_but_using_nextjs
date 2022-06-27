import { FC, ReactNode } from 'react';
import Table from '../Table';
import css from 'styled-jsx/css';

const EmailWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	const globalStyles = css.global`
		:root {
			color-scheme: light dark;
			supported-color-schemes: light dark;
		}
		@media (prefers-color-scheme: dark) {
			.wrapper {
				background-color: white !important;
			}
			.container {
				background-color: #06130e !important;
			}
		}
		@media only screen and (min-width: 960px) {
			.container {
				width: 960px;
			}
		}
		@media only screen and (max-width: 960px) {
			.container {
				width: 600px;
			}
		}
		@media only screen and (max-width: 600px) {
			.container {
				width: 100px;
			}
		}
	`;

	return (
		<>
			<style jsx global>
				{globalStyles}
			</style>
			<Table
				width='100%'
				style={{
					backgroundColor: 'black',
					fontFamily:
						"'Open Sans', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
				}}
				tr
				className='wrapper'
			>
				<td align='center'>
					<Table
						key={2}
						style={{
							backgroundColor: 'white',
						}}
						width='600'
						tr
						className='container'
					>
						<td align='center'>{children}</td>
					</Table>
				</td>
			</Table>
		</>
	);
};

export default EmailWrapper;
