import { Metadata } from 'next';
import { technologies } from '@/configs';
import { Card } from '@/components/shared/card';

export const metadata: Metadata = {
	title: 'Interview Questions',
	// TODO: Add description
};

export default async function InterviewQuestionsMainPage() {
	return (
		<>
			<h1 className='text-center my-8'>Interview Questions</h1>

			<div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 mb-8'>
				{technologies.map((tech) => (
					<Card key={tech.href} item={tech} />
				))}
			</div>
		</>
	);
}
