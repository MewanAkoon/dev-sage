import { type Difficulty } from '@/types';
import { DIFFICULTY_CONFIG } from '@/configs';
import { Badge } from '../ui/badge';

type DifficultyBadgeProps = {
	difficulty: Difficulty;
};

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
	const config = DIFFICULTY_CONFIG[difficulty];

	return <Badge variant={config.variant}>{config.text}</Badge>;
}
