import React from 'react';
import { Metadata } from 'next';

import { SearchParamProps } from '@/types';

import { getSubDocumentsByParentId } from '@/utils';
import {
	collectDocumentIdPaths,
	getMarkdownDocument,
} from '@/actions/documents.actions';

import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/shared/card';
import { MDXWrapper } from '@/components/shared/mdx-wrapper';

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const documentId = params.id[params.id.length - 1];

	const document = await getMarkdownDocument(documentId);
	return {
		title: document.title,
		// TODO: Add description
	};
}

export async function generateStaticParams() {
	const paths = await collectDocumentIdPaths();

	return paths;
}

export default async function DocumentPage({ params }: SearchParamProps) {
	const documentId = params.id[params.id.length - 1];

	const document = await getMarkdownDocument(documentId);

	const subDocumentCards = await getSubDocumentsByParentId(documentId);

	return (
		<div className='flex flex-col my-2 sm:my-8 gap-y-8'>
			<MDXWrapper>{React.createElement(document.data)}</MDXWrapper>

			{subDocumentCards.length > 0 && (
				<>
					<Separator />

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
						{subDocumentCards.map((item) => (
							<Card key={item.href} item={item} />
						))}
					</div>
				</>
			)}
		</div>
	);
}
