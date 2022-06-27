import { AnchorHTMLAttributes, FC, CSSProperties } from 'react';

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {}
const Link: FC<ILink> = ({ children, style, ...props }) => {
	const linkStyles: CSSProperties = {
		textDecoration: 'none',
		color: 'inherit',
		fontSize: 'inherit',
		...(style || {}),
	};
	return (
		<a style={linkStyles} {...props}>
			{children}
		</a>
	);
};

export default Link;
