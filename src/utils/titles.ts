import { TITLES_TO_UPPER_CASE } from '@/configs';

/**
 * Determines the title case (uppercase or capitalize) for a given title.
 *
 * @param {string} title - The title to check for text case.
 * @returns {string} - The title with the determined text case.
 */
export const getTitleCase = (title: string): string => {
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
