import {
	CSSProperties,
	FC,
	HTMLAttributes,
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal,
	TableHTMLAttributes,
} from 'react';

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
	children?:
		| string
		| number
		| boolean
		| ReactFragment
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactPortal
		| JSX.Element
		| null
		| undefined;
	tr?: boolean | HTMLAttributes<HTMLTableRowElement>;
	trs?: boolean;
}

const Table: FC<ITableProps> = ({
	children,
	style,
	cellSpacing,
	cellPadding,
	tr,
	trs,
	...props
}) => {
	const tableStyles: CSSProperties = {
		margin: 0,
		padding: 0,
		border: 0,
		...(style || {}),
	};

	const renderBasedOnElementType = () => {
		if (!tr && Array.isArray(children)) {
			return (
				<tbody>
					{children.map((child, index) => {
						if (child.type === 'tr' || child.type === 'style') return child;

						return (
							<tr
								key={child?.key || index}
								{...((typeof tr === 'object' && tr) || {})}
							>
								{trs && child?.type === 'td' ? child : <td>{child}</td>}
							</tr>
						);
					})}
				</tbody>
			);
		}

		const handleWrappingInTr = (
			children:
				| ReactFragment
				| ReactElement<any, string | JSXElementConstructor<any>>
				| ReactPortal
				| JSX.Element
		) => {
			if (
				'type' in children &&
				(children.type === 'tr' || children.type === 'style')
			)
				return children;
			if (tr)
				return <tr {...((typeof tr === 'object' && tr) || {})}>{children}</tr>;
			return children;
		};

		if (
			!children ||
			typeof children === 'string' ||
			typeof children === 'number' ||
			typeof children === 'boolean'
		)
			return (
				<tbody>
					<tr {...((typeof tr === 'object' && tr) || {})}>
						<td>{children}</td>
					</tr>
				</tbody>
			);

		if (
			'type' in children &&
			['tfoot', 'thead', 'tbody'].includes(children?.type)
		)
			return children;

		return <tbody>{handleWrappingInTr(children)}</tbody>;
	};
	return (
		<table
			cellSpacing={cellSpacing || 0}
			cellPadding={cellPadding || 0}
			style={tableStyles}
			{...props}
		>
			{renderBasedOnElementType()}
		</table>
	);
};

export default Table;
