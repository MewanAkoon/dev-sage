import { notFound } from 'next/navigation';

import { MDXContent } from 'mdx/types';

import DockerMDX from '@/database/documents/docker.mdx';
import ExpressMDX from '@/database/documents/express.mdx';
import JSMDX from '@/database/documents/js.mdx';
import MongoMDX from '@/database/documents/mongo.mdx';
import NodeMDX from '@/database/documents/node.mdx';
import ReactMDX from '@/database/documents/react.mdx';
import RestMDX from '@/database/documents/rest.mdx';
import SDLCMDX from '@/database/documents/sdlc.mdx';
import SDMMDX from '@/database/documents/sdm.mdx';
import SOLIDMDX from '@/database/documents/solid.mdx';
import TSMDX from '@/database/documents/ts.mdx';
import EssentialConceptsMDX from '@/database/documents/essential-concepts.mdx';

// OOP
import OOPMDX from '@/database/documents/oop/about.mdx';
import InheritanceMDX from '@/database/documents/oop/inheritance.mdx';
import AbstractionMDX from '@/database/documents/oop/abstraction.mdx';
import EncapsulationMDX from '@/database/documents/oop/encapsulation.mdx';
import PolymorphismMDX from '@/database/documents/oop/polymorphism.mdx';

// Design Patterns
import DesignPatternsMDX from '@/database/documents/design-patterns/about.mdx';

import BehavioralPatternsMDX from '@/database/documents/design-patterns/behavioral/about.mdx';
import CommandPatternMDX from '@/database/documents/design-patterns/behavioral/command.mdx';
import IteratorPatternMDX from '@/database/documents/design-patterns/behavioral/iterator.mdx';
import MediatorPatternMDX from '@/database/documents/design-patterns/behavioral/mediator.mdx';
import ObserverPatternMDX from '@/database/documents/design-patterns/behavioral/observer.mdx';
import StatePatternMDX from '@/database/documents/design-patterns/behavioral/state.mdx';

import CreationalPatternsMDX from '@/database/documents/design-patterns/creational/about.mdx';
import BuilderPatternMDX from '@/database/documents/design-patterns/creational/builder.mdx';
import ConstructorPatternMDX from '@/database/documents/design-patterns/creational/constructor.mdx';
import FactoryPatternMDX from '@/database/documents/design-patterns/creational/factory.mdx';
import PrototypePatternMDX from '@/database/documents/design-patterns/creational/prototype.mdx';
import SingletonPatternMDX from '@/database/documents/design-patterns/creational/singleton.mdx';

import StructuralPatternsMDX from '@/database/documents/design-patterns/structural/about.mdx';
import AdapterPatternMDX from '@/database/documents/design-patterns/structural/adapter.mdx';
import DecoratorPatternMDX from '@/database/documents/design-patterns/structural/decorator.mdx';
import FacadePatternMDX from '@/database/documents/design-patterns/structural/facade.mdx';
import ProxyPatternMDX from '@/database/documents/design-patterns/structural/proxy.mdx';

// DSA
import DSAMDX from '@/database/documents/data-structures/about.mdx';

import BSTMDX from '@/database/documents/data-structures/bst.mdx';
import HashTableMDX from '@/database/documents/data-structures/hash-tables.mdx';
import LinkedListMDX from '@/database/documents/data-structures/linked-lists.mdx';
import QueueMDX from '@/database/documents/data-structures/queues.mdx';
import SetMDX from '@/database/documents/data-structures/sets.mdx';
import StackMDX from '@/database/documents/data-structures/stacks.mdx';

type DocumentConfig = {
	id: string;
	title: string;
	data: MDXContent;
	subDocuments?: DocumentConfig[];
};

const config: DocumentConfig[] = [
	{
		id: 'docker',
		title: 'Docker',
		data: DockerMDX,
	},
	{
		id: 'express',
		title: 'Express JS',
		data: ExpressMDX,
	},
	{
		id: 'javascript',
		title: 'Javascript',
		data: JSMDX,
	},
	{
		id: 'mongo',
		title: 'MongoDB',
		data: MongoMDX,
	},
	{
		id: 'node',
		title: 'Node JS',
		data: NodeMDX,
	},
	{
		id: 'react',
		title: 'React JS',
		data: ReactMDX,
	},
	{
		id: 'rest',
		title: 'REST',
		data: RestMDX,
	},
	{
		id: 'sdlc',
		title: 'SDLC',
		data: SDLCMDX,
	},
	{
		id: 'sdm',
		title: 'SDM',
		data: SDMMDX,
	},
	{
		id: 'solid',
		title: 'SOLID',
		data: SOLIDMDX,
	},
	{
		id: 'typescript',
		title: 'Typescript',
		data: TSMDX,
	},
	{
		id: 'oop',
		title: 'OOP',
		data: OOPMDX,
		subDocuments: [
			{
				id: 'inheritance',
				title: 'Inheritance (OOP)',
				data: InheritanceMDX,
			},
			{
				id: 'abstraction',
				title: 'Abstraction (OOP)',
				data: AbstractionMDX,
			},
			{
				id: 'encapsulation',
				title: 'Encapsulation (OOP)',
				data: EncapsulationMDX,
			},
			{
				id: 'polymorphism',
				title: 'Polymorphism (OOP)',
				data: PolymorphismMDX,
			},
		],
	},
	{
		id: 'design-patterns',
		title: 'Design Patterns',
		data: DesignPatternsMDX,
		subDocuments: [
			{
				id: 'behavioral',
				title: 'Behavioral Design Patterns',
				data: BehavioralPatternsMDX,
				subDocuments: [
					{
						id: 'command',
						title: 'Command Design Pattern',
						data: CommandPatternMDX,
					},
					{
						id: 'iterator',
						title: 'Iterator Design Pattern',
						data: IteratorPatternMDX,
					},
					{
						id: 'mediator',
						title: 'Mediator Design Pattern',
						data: MediatorPatternMDX,
					},
					{
						id: 'observer',
						title: 'Observer Design Pattern',
						data: ObserverPatternMDX,
					},
					{
						id: 'state',
						title: 'State Design Pattern',
						data: StatePatternMDX,
					},
				],
			},
			{
				id: 'creational',
				title: 'Creational Design Patterns',
				data: CreationalPatternsMDX,
				subDocuments: [
					{
						id: 'builder',
						title: 'Builder Design Pattern',
						data: BuilderPatternMDX,
					},
					{
						id: 'constructor',
						title: 'Constructor Design Pattern',
						data: ConstructorPatternMDX,
					},
					{
						id: 'factory',
						title: 'Factory Design Pattern',
						data: FactoryPatternMDX,
					},
					{
						id: 'prototype',
						title: 'Prototype Design Pattern',
						data: PrototypePatternMDX,
					},
					{
						id: 'singleton',
						title: 'Singleton Design Pattern',
						data: SingletonPatternMDX,
					},
				],
			},
			{
				id: 'structural',
				title: 'Structural Design Patterns',
				data: StructuralPatternsMDX,
				subDocuments: [
					{
						id: 'adapter',
						title: 'Adapter Design Pattern',
						data: AdapterPatternMDX,
					},
					{
						id: 'decorator',
						title: 'Decorator Design Pattern',
						data: DecoratorPatternMDX,
					},
					{
						id: 'facade',
						title: 'Facade Design Pattern',
						data: FacadePatternMDX,
					},
					{ id: 'proxy', title: 'Proxy Design Pattern', data: ProxyPatternMDX },
				],
			},
		],
	},
	{
		id: 'dsa',
		title: 'DSA',
		data: DSAMDX,
		subDocuments: [
			{
				id: 'binary-search-trees',
				title: 'BST',
				data: BSTMDX,
			},
			{ id: 'hash-tables', title: 'Hash Tables', data: HashTableMDX },
			{
				id: 'linked-lists',
				title: 'Linked Lists',
				data: LinkedListMDX,
			},
			{ id: 'queues', title: 'Queues', data: QueueMDX },
			{ id: 'sets', title: 'Sets', data: SetMDX },
			{ id: 'stacks', title: 'Stacks', data: StackMDX },
		],
	},
	{
		id: 'essential-concepts',
		title: 'Essential Concepts',
		data: EssentialConceptsMDX,
	},
];

const flattenDocuments = (docs: DocumentConfig[]) => {
	// Use reduce to accumulate all items into a single array
	return docs.reduce<DocumentConfig[]>((acc, doc) => {
		// Add the current document
		acc.push(doc);

		// If the document has subDocuments, recurse into them
		if (doc.subDocuments) {
			acc.push(...flattenDocuments(doc.subDocuments));
		}
		return acc;
	}, []);
};

export const getMarkdownDocument = (id: string): DocumentConfig => {
	const selectedDoc = flattenDocuments(config).find((item) => item.id === id);

	if (!selectedDoc) {
		console.error(`No document found for ID: ${id}`);
		notFound();
	}

	return selectedDoc;
};
