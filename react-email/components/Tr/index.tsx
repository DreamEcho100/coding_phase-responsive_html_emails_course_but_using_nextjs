import { FC, TdHTMLAttributes } from 'react';

interface ITrProps {
	children: JSX.Element[];
	td?: TdHTMLAttributes<HTMLTableCellElement>;
}

const Tr: FC<ITrProps> = ({ children, td }) => {
	return (
		<tr>
			{children.map((child, index) =>
				child?.type === 'td' ? (
					child
				) : (
					<td key={child?.key || index} {...(td || {})}>
						{child}
					</td>
				)
			)}
		</tr>
	);
};

export default Tr;
