import { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';

export const metadata: Metadata = {
	title: 'Sign Up',
	// TODO: Add description
};

export default function Page() {
	return <SignUp path='/sign-up' />;
}
