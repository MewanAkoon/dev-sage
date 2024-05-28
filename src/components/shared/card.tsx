'use client';

import Image, { StaticImageData } from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

type CardImageProps = {
	src: string | StaticImageData;
	alt: string;
};

type CardContentProps = {
	title: string;
	description: string;
};

type CardProps = {
	item: CardItem;
};

type BaseCardItem = {
	title: string;
	href: string;
	description: string;
};

export type CardItem =
	| BaseCardItem
	| (BaseCardItem & {
			imgSrc: string | StaticImageData;
			alt: string;
	  });

const CardImage = ({ src, alt }: CardImageProps) => (
	<div className='inline-flex rounded-lg'>
		<Image
			src={src}
			alt={alt}
			width={64}
			height={64}
			className='w-16 h-16 object-contain'
			priority
		/>
	</div>
);

const CardContent = ({ title, description }: CardContentProps) => (
	<div className='mt-6'>
		<h3 className='text-base font-semibold leading-6 text-gray-900'>{title}</h3>
		<p className='mt-2 text-sm text-gray-500 text-justify'>{description}</p>
	</div>
);

export function Card({ item }: CardProps) {
	const pathname = usePathname();
	const router = useRouter();

	const handleClick = () => {
		router.push(`${pathname}/${item.href}`);
	};

	return (
		<div
			className='group relative border p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500 shadow rounded cursor-pointer bg-white hover:bg-gray-50'
			onClick={handleClick}
		>
			{'imgSrc' in item && <CardImage src={item.imgSrc} alt={item.alt} />}
			<CardContent title={item.title} description={item.description} />
			<span
				className='pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400'
				aria-hidden='true'
			>
				<svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
				</svg>
			</span>
		</div>
	);
}
