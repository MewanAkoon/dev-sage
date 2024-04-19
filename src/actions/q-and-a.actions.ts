import { QAPair } from '@/lib/types';

import jsData from '../database/js.json';
import tsData from '../database/ts.json';
import reactData from '../database/react.json';
import nodeData from '../database/node.json';
import expressData from '../database/express.json';
import mongoData from '../database/mongo.json';
import { notFound } from 'next/navigation';

type DataConfig = {
	id: string;
	data: QAPair[];
}[];

const config: DataConfig = [
	{
		id: 'javascript',
		data: JSON.parse(JSON.stringify(jsData)),
	},
	{
		id: 'typescript',
		data: JSON.parse(JSON.stringify(tsData)),
	},
	{
		id: 'react',
		data: JSON.parse(JSON.stringify(reactData)),
	},
	{
		id: 'node',
		data: JSON.parse(JSON.stringify(nodeData)),
	},
	{
		id: 'mongo',
		data: JSON.parse(JSON.stringify(mongoData)),
	},
	{
		id: 'express',
		data: JSON.parse(JSON.stringify(expressData)),
	},
	// Add more configurations for other JSON files if needed
];

export const getQuestionsAndAnswers = (id: string): QAPair[] => {
	const selectedConfig = config.find((item) => item.id === id);
	if (!selectedConfig) {
		console.error(`No configuration found for ID: ${id}`);
		notFound();
	}

	const { data } = selectedConfig;

	return data.sort((a, b) => a.difficulty - b.difficulty);
};
