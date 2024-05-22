import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';

import { SearchParamProps } from '@/types';

import { getSubDocumentsByParentId } from '@/utils';
import { getMarkdownDocument } from '@/actions/document.actions';

import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/shared/card';
import { MDXWrapper } from '@/components/shared/mdxWrapper';

export async function generateMetadata(
	{ params }: { params: { id: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const documentId = params.id[params.id.length - 1];

	const document = getMarkdownDocument(documentId);
	return {
		title: document.title,
	};
}

export default function Page({ params }: SearchParamProps) {
	const documentId = params.id[params.id.length - 1];

	const document = getMarkdownDocument(documentId);

	const subDocumentCards = getSubDocumentsByParentId(documentId);

	return (
		<div className='flex flex-col my-8 gap-y-8'>
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
