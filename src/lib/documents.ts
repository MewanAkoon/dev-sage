import { CardItem } from '@/components/shared/card';
import {
	DSACardItem,
	DesignPatternsCardItem,
	DockerCardItem,
	EssentialConceptsCardItem,
	ExpressCardItem,
	JSCardItem,
	MongoCardItem,
	NodeCardItem,
	OOPCardItem,
	RESTCardItem,
	ReactCardItem,
	SDLCCardItem,
	SDMCardItem,
	SOLIDCardItem,
	TSCardItem,
} from './cardItems';

type Document = CardItem & {
	subDocuments?: Document[];
};

const documents: Document[] = [
	JSCardItem,
	TSCardItem,
	ReactCardItem,
	NodeCardItem,
	ExpressCardItem,
	MongoCardItem,
	DockerCardItem,
	{
		...OOPCardItem,
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
	{
		...DSACardItem,
		subDocuments: [
			{
				title: 'Binary Search Trees',
				href: '/binary-search-trees',
				description:
					'Explore the operations and applications of Binary Search Trees (BSTs), a fundamental data structure for managing hierarchical data efficiently.',
			},
			{
				title: 'Hash Tables',
				href: '/hash-tables',
				description:
					'Delve into Hash Tables and learn how they provide efficient data retrieval through unique key indexing.',
			},
			{
				title: 'Linked Lists',
				href: '/linked-lists',
				description:
					'Understand the structure and functionality of Linked Lists, which allow for dynamic data allocation and sequential data access.',
			},
			{
				title: 'Queues',
				href: '/queues',
				description:
					'Discover the Queue data structure, which adheres to a First In, First Out (FIFO) principle, useful in numerous sequential processing scenarios.',
			},
			{
				title: 'Sets',
				href: '/sets',
				description:
					'Learn about Sets, a collection of unique elements that support efficient membership checks and set operations.',
			},
			{
				title: 'Stacks',
				href: '/stacks',
				description:
					'Examine Stacks, a Last In, First Out (LIFO) structure ideal for scenarios that require reversing items or undoing operations.',
			},
		],
	},
	{
		...DesignPatternsCardItem,
		subDocuments: [
			{
				title: 'Behavioral Design Patterns',
				href: '/behavioral',
				description:
					'Explore patterns that focus on algorithms and the assignment of responsibilities between objects, improving communication and flexibility.',
				subDocuments: [
					{
						title: 'Command Pattern',
						href: '/command',
						description:
							'Learn about the Command Pattern which encapsulates commands as objects, allowing for parameterization and queuing of requests.',
					},
					{
						title: 'Iterator Pattern',
						href: '/iterator',
						description:
							'Discover the Iterator Pattern, which provides a way to access elements of an aggregate object sequentially without exposing its underlying representation.',
					},
					{
						title: 'Mediator Pattern',
						href: '/mediator',
						description:
							'Study the Mediator Pattern that simplifies complex communication between interacting objects by introducing a mediator to control the interaction.',
					},
					{
						title: 'Observer Pattern',
						href: '/observer',
						description:
							'Understand the Observer Pattern which defines a dependency relationship such that when one object changes state, all its dependents are notified automatically.',
					},
					{
						title: 'State Pattern',
						href: '/state',
						description:
							'Examine the State Pattern that allows an object to change its behavior when its internal state changes, appearing as if it changed its class.',
					},
				],
			},
			{
				title: 'Creational Design Patterns',
				href: '/creational',
				description:
					'Dive into patterns that deal with object creation mechanisms, trying to create objects in a manner suitable for the situation.',
				subDocuments: [
					{
						title: 'Builder Pattern',
						href: '/builder',
						description:
							'Explore the Builder Pattern which separates the construction of a complex object from its representation, allowing the same construction process to create different representations.',
					},
					{
						title: 'Constructor Pattern',
						href: '/constructor',
						description:
							'Learn about the Constructor Pattern, focusing on initializing complex structures or allocating resources during object creation.',
					},
					{
						title: 'Factory Pattern',
						href: '/factory',
						description:
							'Discover the Factory Pattern that allows interfaces to create objects, but leaves it to subclasses to determine the class of the object to create.',
					},
					{
						title: 'Prototype Pattern',
						href: '/prototype',
						description:
							'Understand the Prototype Pattern used for creating objects by cloning a pre-configured prototype.',
					},
					{
						title: 'Singleton Pattern',
						href: '/singleton',
						description:
							'Study the Singleton Pattern ensuring a class only has one instance and providing a global point of access to it.',
					},
				],
			},
			{
				title: 'Structural Design Patterns',
				href: '/structural',
				description:
					'Learn about patterns that focus on ways to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.',
				subDocuments: [
					{
						title: 'Adapter Pattern',
						href: '/adapter',
						description:
							'Explore the Adapter Pattern which allows otherwise incompatible classes to work together by converting the interface of one class into an interface expected by the clients.',
					},
					{
						title: 'Decorator Pattern',
						href: '/decorator',
						description:
							'Discover the Decorator Pattern that allows for adding new functionality to an existing object without altering its structure.',
					},
					{
						title: 'Facade Pattern',
						href: '/facade',
						description:
							'Study the Facade Pattern that provides a simplified interface to a complex system, making it easier to understand and use.',
					},
					{
						title: 'Proxy Pattern',
						href: '/proxy',
						description:
							'Learn about the Proxy Pattern that provides a surrogate or placeholder for another object to control access to it.',
					},
				],
			},
		],
	},
	RESTCardItem,
	SOLIDCardItem,
	SDMCardItem,
	SDLCCardItem,
	EssentialConceptsCardItem,
];

export const getSubDocumentCardsData = (parentId: string) => {
	const parentDoc = documents
		.flatMap((doc) => [doc, ...(doc.subDocuments || [])])
		.find((doc) => doc.href === `/${parentId}`);

	return parentDoc?.subDocuments || [];
};

export default documents;
