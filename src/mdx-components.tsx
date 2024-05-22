import type { MDXComponents } from 'mdx/types';

/**
 * This file allows you to provide custom React components
 * to be used in MDX files. You can import and use any
 * React component you want, including inline styles,
 * components from other libraries, and more.
 *
 * For more information, refer to the Next.js documentation on custom elements in MDX:
 * https://nextjs.org/docs/pages/building-your-application/configuring/mdx#custom-elements
 */

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
	};
}
