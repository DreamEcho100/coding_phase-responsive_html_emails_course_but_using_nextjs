import { HTMLAttributes, FC, CSSProperties } from 'react';

interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph: FC<IParagraph> = ({ children, style, ...props }) => {
	const ParagraphStyles: CSSProperties = {
		margin: 0,
		padding: 0,
		...(style || {}),
	};
	return (
		<p style={ParagraphStyles} {...props}>
			{children}
		</p>
	);
};

export default Paragraph;
