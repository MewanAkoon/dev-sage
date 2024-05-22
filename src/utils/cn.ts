import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines CSS classes using Tailwind CSS and classNames libraries.
 *
 * @param {...ClassValue} inputs - CSS classes to merge.
 * @returns {string} - Merged CSS classes.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
