import Image, { type ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
	return (
		<Image
			src={props.src}
			alt={props.alt}
			height={0}
			width={0}
			className="h-auto w-full object-contain"
			sizes="100vw"
			quality={100}
		/>
	);
};

export default PromoBanner;
