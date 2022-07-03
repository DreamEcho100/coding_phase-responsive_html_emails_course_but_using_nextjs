import { FC, TdHTMLAttributes } from 'react';
import { useSharedConfig } from '../../context';
import { combineSimilarProps } from '../../utils';

interface IAProps extends TdHTMLAttributes<HTMLTableCellElement> {}

const Td: FC<IAProps> = ({ children, ...props }) => {
	const [
		{
			components: { Td: tdComponentDefaults },
		},
	] = useSharedConfig();

	return children &&
		typeof children === 'object' &&
		'type' in children &&
		typeof children.type === 'function' &&
		'name' in children.type &&
		['Td', 'JSXStyle', 'HTMLComment'].includes(children.type.name) ? (
		// || (typeof children.type === 'string' &&
		// 	['td', 'style'].includes(children.type))
		children
	) : (
		<td {...combineSimilarProps(tdComponentDefaults, props)}>{children}</td>
	);
};

export default Td;
