import React from 'react';
import { cn } from '@/utils';

type MarkdownComponentProps = { children: React.ReactNode; className?: string };

export function MDXWrapper({ children, className }: MarkdownComponentProps) {
	return (
		<div
			className={cn(
				'prose max-w-full border border-gray-200 p-5 sm:p-10 rounded-md backdrop-blur-md',
				className
			)}
		>
			{children}
		</div>
	);
}
