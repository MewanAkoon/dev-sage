import { SearchParamProps } from '@/types';
import { getTitleCase } from '@/utils';
import { getQuestionsAndAnswers } from '@/actions/questions.actions';

import { QuestionsTable } from './components';

export default async function InterviewQuestionsPage({
	params,
}: SearchParamProps) {
	const questions = await getQuestionsAndAnswers(params.id);

	return (
		<>
			<h1 className='text-center my-4'>
				<span>{getTitleCase(params.id)}</span> Interview Questions
			</h1>

			<QuestionsTable questions={questions} id={params.id} />
		</>
	);
}
