import React from 'react';

import { SearchParamProps } from '@/lib/types';
import { getMarkdownDocument } from '@/actions/document.actions';
import MDXWrapper from '@/components/shared/mdxWrapper';
import { getSubDocuments } from '@/lib/documents';
import { Separator } from '@/components/ui/separator';
import Card from '@/components/shared/card';

export default function Page({ params }: SearchParamProps) {
	const documentId = params.id[params.id.length - 1];

	const document = getMarkdownDocument(documentId);

	const subDocumentLinks = getSubDocuments(documentId);

	return (
		<div className='flex flex-col my-8 gap-y-8'>
			<MDXWrapper>{React.createElement(document.data)}</MDXWrapper>

			{subDocumentLinks.length > 0 && (
				<>
					<Separator />

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
						{subDocumentLinks.map((linkItem) => (
							<Card key={linkItem.href} item={linkItem} />
						))}
					</div>
				</>
			)}
		</div>
	);
}
