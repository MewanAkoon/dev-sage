import { Metadata } from 'next';
import { SearchParamProps } from '@/types';
import { getTitleCase } from '@/utils';

export async function generateMetadata({
	params,
}: SearchParamProps): Promise<Metadata> {
	return {
		title: `${getTitleCase(params.id)} Interview Questions`,
		// TODO: Add a description
	};
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
