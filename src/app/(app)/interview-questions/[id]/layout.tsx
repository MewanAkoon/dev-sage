import { Metadata } from 'next';
import { formatTitleCase } from '@/utils';

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	return {
		title: `${formatTitleCase(params.id)} Interview Questions`,
		// TODO: Add a description
	};
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
