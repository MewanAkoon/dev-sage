import './globals.css';

import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { poppins } from '@/styles/fonts';
import { cn } from '@/utils';

import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

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
		<ClerkProvider>
			<html lang='en'>
				<body className={cn(poppins.className, 'flex h-screen flex-col')}>
					<Header />
					<main className='flex-1 wrapper'>{children}</main>
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}
