import React from 'react';
import { cn } from '@/lib/utils';
type MarkdownComponentProps = { children: React.ReactNode; className?: string };

function MDXWrapper({ children, className }: MarkdownComponentProps) {
	return (
		<div
			className={cn(
				'prose max-w-full border border-gray-200 p-5 sm:p-10 rounded-md',
				className
			)}
		>
			{children}
		</div>
	);
}

export default MDXWrapper;
