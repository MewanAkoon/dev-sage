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
	data: MDXContent;
	subDocuments?: DocumentConfig[];
};

const config: DocumentConfig[] = [
	{
		id: 'docker',
		data: DockerMDX,
	},
	{
		id: 'express',
		data: ExpressMDX,
	},
	{
		id: 'javascript',
		data: JSMDX,
	},
	{
		id: 'mongo',
		data: MongoMDX,
	},
	{
		id: 'node',
		data: NodeMDX,
	},
	{
		id: 'react',
		data: ReactMDX,
	},
	{
		id: 'rest',
		data: RestMDX,
	},
	{
		id: 'sdlc',
		data: SDLCMDX,
	},
	{
		id: 'sdm',
		data: SDMMDX,
	},
	{
		id: 'solid',
		data: SOLIDMDX,
	},
	{
		id: 'typescript',
		data: TSMDX,
	},
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
	{
		id: 'design-patterns',
		data: DesignPatternsMDX,
		subDocuments: [
			{
				id: 'behavioral',
				data: BehavioralPatternsMDX,
				subDocuments: [
					{ id: 'command', data: CommandPatternMDX },
					{ id: 'iterator', data: IteratorPatternMDX },
					{ id: 'mediator', data: MediatorPatternMDX },
					{ id: 'observer', data: ObserverPatternMDX },
					{ id: 'state', data: StatePatternMDX },
				],
			},
			{
				id: 'creational',
				data: CreationalPatternsMDX,
				subDocuments: [
					{ id: 'builder', data: BuilderPatternMDX },
					{ id: 'constructor', data: ConstructorPatternMDX },
					{ id: 'factory', data: FactoryPatternMDX },
					{ id: 'prototype', data: PrototypePatternMDX },
					{ id: 'singleton', data: SingletonPatternMDX },
				],
			},
			{
				id: 'structural',
				data: StructuralPatternsMDX,
				subDocuments: [
					{ id: 'adapter', data: AdapterPatternMDX },
					{ id: 'decorator', data: DecoratorPatternMDX },
					{ id: 'facade', data: FacadePatternMDX },
					{ id: 'proxy', data: ProxyPatternMDX },
				],
			},
		],
	},
	{
		id: 'dsa',
		data: DSAMDX,
		subDocuments: [
			{ id: 'binary-search-trees', data: BSTMDX },
			{ id: 'hash-tables', data: HashTableMDX },
			{ id: 'linked-lists', data: LinkedListMDX },
			{ id: 'queues', data: QueueMDX },
			{ id: 'sets', data: SetMDX },
			{ id: 'stacks', data: StackMDX },
		],
	},
	{
		id: 'essential-concepts',
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
