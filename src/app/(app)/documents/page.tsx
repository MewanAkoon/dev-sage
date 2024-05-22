import { Metadata } from 'next';
import { Card } from '@/components/shared/card';
import { documents } from '@/configs';

export const metadata: Metadata = {
	title: 'Documents',
	// TODO: Add description
};

export default function Page() {
	return (
		<>
			<h1 className='text-center my-8'>Documents</h1>

			<div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 mb-8'>
				{documents.map((doc) => (
					<Card key={doc.href} item={doc} />
				))}
			</div>
		</>
	);
}
