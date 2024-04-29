import { notFound } from 'next/navigation';

import { MDXContent } from 'mdx/types';

import OOPMDX from '@/database/documents/oop/about.mdx';
import InheritanceMDX from '@/database/documents/oop/inheritance.mdx';
import AbstractionMDX from '@/database/documents/oop/abstraction.mdx';
import EncapsulationMDX from '@/database/documents/oop/encapsulation.mdx';
import PolymorphismMDX from '@/database/documents/oop/polymorphism.mdx';

type DocumentConfig = {
	id: string;
	data: MDXContent;
	subDocuments?: DocumentConfig[];
};

const config: DocumentConfig[] = [
	{
		id: 'oop',
		data: OOPMDX,
		subDocuments: [
			{ id: 'inheritance', data: InheritanceMDX },
			{ id: 'abstraction', data: AbstractionMDX },
			{ id: 'encapsulation', data: EncapsulationMDX },
			{ id: 'polymorphism', data: PolymorphismMDX },
		],
	},
];

export const getMarkdownDocument = (id: string) => {
	const selectedDoc = config
		.flatMap((doc) => [doc, ...(doc.subDocuments || [])])
		.find((item) => item.id === id);

	if (!selectedDoc) {
		console.error(`No document found for ID: ${id}`);
		notFound();
	}

	return selectedDoc;
};
