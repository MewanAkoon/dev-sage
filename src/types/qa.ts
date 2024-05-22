export enum Practicality {
	TheoreticalAndFundamental = 0,
	Practical = 1,
	ScenarioBased = 2,
}

export enum Difficulty {
	Beginner = 0,
	Intermediate = 1,
	Advanced = 2,
}

export type AnswerSegment = {
	type: 'text' | 'code';
	content: string;
};

export type QAPair = {
	question: string;
	answer: AnswerSegment[];
	difficulty: Difficulty;
	practicality: Practicality;
	tags: string[];
	estimatedTime: number; // time in minutes
	resources: string[]; // optional links to resources for hints
};
