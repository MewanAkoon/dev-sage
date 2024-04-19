import Link from 'next/link';
import React from 'react';

const links = [
	{
		to: '/interview-questions',
		title: 'Interview Questions',
	},
	{
		to: '/documents',
		title: 'Documentation',
	},
] as const;

export default function NavItems() {
	return (
		<ul className='flex flex-col my-2 gap-y-1 sm:my-0 sm:flex-row sm:gap-x-6'>
			{links.map((link) => (
				<li key={link.to} className='px-4 py-1 sm:p-0'>
					<Link className='hover:text-sky-800' href={link.to}>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
