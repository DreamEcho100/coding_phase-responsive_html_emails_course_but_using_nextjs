import { FC, TdHTMLAttributes } from 'react';

interface ITrsProps {
	children: JSX.Element[];
	td?: TdHTMLAttributes<HTMLTableCellElement>;
}

const Trs: FC<ITrsProps> = ({ children, td }) => {
	return (
		<>
			{children.map((child: JSX.Element, index) => {
				if (child.type === 'tr') return child;
				return (
					<tr key={child?.key || index}>
						{child?.type === 'td' ? child : <td {...(td || {})}>{child}</td>}
					</tr>
				);
			})}
		</>
	);
};

export default Trs;
