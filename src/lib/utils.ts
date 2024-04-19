import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Difficulty } from './types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const difficultyConfig: Record<
	Difficulty,
	{ variant: 'default' | 'secondary' | 'destructive'; text: string }
> = {
	'0': { variant: 'default', text: 'Easy' },
	'1': { variant: 'secondary', text: 'Intermediate' },
	'2': { variant: 'destructive', text: 'Hard' },
};
