import { notFound } from 'next/navigation';

import { QAPair } from '@/types';

import jsData from '../database/interview-questions/js.json';
import tsData from '../database/interview-questions/ts.json';
import reactData from '../database/interview-questions/react.json';
import nodeData from '../database/interview-questions/node.json';
import expressData from '../database/interview-questions/express.json';
import mongoData from '../database/interview-questions/mongo.json';
import dsaData from '../database/interview-questions/dsa.json';

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
	{
		id: 'dsa',
		data: JSON.parse(JSON.stringify(dsaData)),
	},
	// Add more configurations for other JSON files if needed
];

export const getQuestionsAndAnswers = async (id: string): Promise<QAPair[]> => {
	const selectedConfig = config.find((item) => item.id === id);
	if (!selectedConfig) {
		console.error(`No configuration found for ID: ${id}`);
		notFound();
	}

	const { data } = selectedConfig;

	return data.sort((a, b) => a.difficulty - b.difficulty);
};
