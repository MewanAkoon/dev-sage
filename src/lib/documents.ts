import { CardItem } from '@/components/shared/card';

import oopLogo from '../../public/assets/logos/oop.png';

type Document = CardItem & {
	subDocuments?: CardItem[];
};

const documents: Document[] = [
	{
		title: 'Object Oriented Programming (OOP)',
		imgSrc: oopLogo,
		alt: 'OOP Logo',
		href: '/oop',
		description:
			'Explore the fundamentals of OOP, a programming paradigm that uses objects and classes to create models based on the real world. This approach emphasizes modularity, encapsulation, and inheritance.',
		subDocuments: [
			{
				title: 'Inheritance',
				href: '/inheritance',
				description:
					'Delve into inheritance, a key OOP concept where new classes are derived from existing classes, inheriting fields and methods and allowing for hierarchy and reuse.',
			},
			{
				title: 'Abstraction',
				href: '/abstraction',
				description:
					'Learn about abstraction, which simplifies complexity by hiding the technical complexity of systems and exposing only the necessary parts of objects and classes.',
			},
			{
				title: 'Encapsulation',
				href: '/encapsulation',
				description:
					"Understand encapsulation, a principle that bundles the data (variables) and the methods (functions) that manipulate the data into a single unit or class, restricting access to some of the object's components.",
			},
			{
				title: 'Polymorphism',
				href: '/polymorphism',
				description:
					"Explore polymorphism, a concept where objects can be treated as instances of their parent class, allowing methods to do different things based on the object's class type that invokes them.",
			},
		],
	},
];

export const getSubDocuments = (parentId: string) => {
	const parentDoc = documents.find((doc) => doc.href === `/${parentId}`);

	return parentDoc?.subDocuments || [];
};

export default documents;
