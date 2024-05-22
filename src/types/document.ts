import type { CardItem } from '@/components/shared/card';

export type Document = CardItem & {
	subDocuments?: Document[];
};
