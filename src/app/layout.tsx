import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/lib/fonts';

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
		<html lang='en'>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
