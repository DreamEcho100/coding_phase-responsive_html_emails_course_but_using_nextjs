import { ImgHTMLAttributes, FC, CSSProperties } from 'react';

interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
}
const Image: FC<IImage> = ({ src, style, ...props }) => {
	const imageStyles: CSSProperties = {
		padding: 0,
		margin: 0,
		...(style || {}),
	};
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			{...{
				src: !src ? '' : src.startsWith('http') ? src : `./${src}`,
			}}
			alt=''
			{...props}
			style={imageStyles}
		/>
	);
};

export default Image;
