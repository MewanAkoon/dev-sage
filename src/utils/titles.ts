import { TITLES_TO_UPPER_CASE } from '@/configs';

/**
 * Formats the title to either uppercase or capitalized case.
 *
 * @param {string} title - The title to format.
 * @returns {string} - The formatted title.
 */
export const formatTitleCase = (title: string): string => {
	if (TITLES_TO_UPPER_CASE.includes(title)) {
		// Convert the title to uppercase if it exists in the TITLES_TO_UPPER_CASE array
		return title.toUpperCase();
	} else {
		// Capitalize each section of the title if it's not in the TITLES_TO_UPPER_CASE array
		return title
			.split(' ')
			.map(
				(section) =>
					section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()
			)
			.join(' ');
	}
};
