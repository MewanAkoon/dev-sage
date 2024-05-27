import './globals.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';

import { poppins } from '@/styles/fonts';
import { cn } from '@/utils';

import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import backgroundImage from '../../public/assets/images/background-image.png';

export const metadata: Metadata = {
	title: {
		template: '%s | DevSage',
		default: 'DevSage',
	},
	description:
		'A wealth of interview questions and answers, tech notes, and coding examples in data structures and algorithms, all in one place. Enhance your software development knowledge with curated resources and expert insights.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(poppins.className, 'flex h-screen flex-col')}>
				<Header />
				<main className='flex-1 wrapper'>
					{/* Background Image */}
					<div className='fixed top-0 left-0 right-0 bottom-0 -z-50 blur-sm'>
						<Image
							src={backgroundImage}
							alt='background-image'
							className='object-cover'
							fill
							priority
							placeholder='blur'
						/>
					</div>

					{children}
					<Analytics />
				</main>
				<Footer />
			</body>
		</html>
	);
}
