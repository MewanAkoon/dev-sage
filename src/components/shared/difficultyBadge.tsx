import { Difficulty } from '@/lib/types';
import { difficultyConfig } from '@/lib/utils';
import React from 'react';
import { Badge } from '../ui/badge';

type DifficultyBadgeProps = {
	difficulty: Difficulty;
};

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
	const config = difficultyConfig[difficulty];

	return <Badge variant={config.variant}>{config.text}</Badge>;
}
