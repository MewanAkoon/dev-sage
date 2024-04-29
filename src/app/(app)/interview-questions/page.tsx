import React from 'react';

import Card from '@/components/shared/card';
import { technologies } from '@/lib/technologies';

export default function Page() {
	return (
		<>
			<h1 className='text-center my-8'>Interview Questions</h1>

			<div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10'>
				{technologies.map((tech) => (
					<Card key={tech.href} item={tech} />
				))}
			</div>
		</>
	);
}
