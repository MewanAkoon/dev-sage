import { documents } from '@/configs';
import { type Document } from '@/types';

/**
 * Retrieves the sub-documents of a given parent document based on its ID.
 *
 * @param {string} parentId - The ID of the parent document.
 * @returns {Document[]} - An array of sub-documents associated with the parent document. Returns an empty array if no sub-documents are found.
 */
export const getSubDocumentsByParentId = async (
	parentId: string
): Promise<Document[]> => {
	// Flatten the documents array to include both the main documents and their sub-documents
	const parentDoc = documents
		.flatMap((doc) => [doc, ...(doc.subDocuments || [])])
		.find((doc) => doc.href === `/${parentId}`);

	// Return the sub-documents of the found parent document, or an empty array if none are found
	return parentDoc?.subDocuments || [];
};
