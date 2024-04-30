import './globals.css';

import type { Metadata } from 'next';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';

import { poppins } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Loading from '@/components/shared/loading';

export const metadata: Metadata = {
	title: 'DevSage',
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
					<ClerkLoading>
						<Loading />
					</ClerkLoading>
					<ClerkLoaded>
						<Header />
						<main className='flex-1 wrapper'>{children}</main>
						<Footer />
					</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	);
}
