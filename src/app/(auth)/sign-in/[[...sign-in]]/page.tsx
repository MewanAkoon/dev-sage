import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sign In',
	// TODO: Add description
};

export default function Page() {
	return <SignIn path='/sign-in' />;
}
