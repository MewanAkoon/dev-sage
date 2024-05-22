/**
 * Middleware for Next.js applications using Clerk for authentication.
 *
 * Applies authentication protection to specified routes using Clerk's utilities:
 * - `clerkMiddleware`: Handles authentication middleware.
 * - `createRouteMatcher`: Creates a matcher function for specific routes.
 *
 * The `isProtectedRoute` matcher function protects the `/profile` route.
 * Middleware is configured to apply to all routes except those with file extensions
 * and internal Next.js routes.
 *
 * Configuration:
 * - `config.matcher`: Specifies the patterns of routes where the middleware should be applied.
 *
 * For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware
 */

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/profile']);

export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) auth().protect();
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
