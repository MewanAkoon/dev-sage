import React from 'react';

import Card from '@/components/shared/card';
import documents from '@/lib/documents';

export default function Page() {
	return (
		<>
			<h1 className='text-center my-8'>Documents</h1>

			<div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10'>
				{documents.map((doc) => (
					<Card key={doc.href} item={doc} />
				))}
			</div>
		</>
	);
}
