import type { Difficulty } from '@/types';

export const DIFFICULTY_CONFIG: Record<
	Difficulty,
	{ variant: 'default' | 'secondary' | 'destructive'; text: string }
> = {
	'0': { variant: 'default', text: 'Easy' },
	'1': { variant: 'secondary', text: 'Intermediate' },
	'2': { variant: 'destructive', text: 'Hard' },
};
