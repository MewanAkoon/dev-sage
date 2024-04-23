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

export default function Footer() {
	return (
		<footer className='bg-slate-100 w-full h-fit'>
			<div className='wrapper flex items-center justify-center'>
				<p>2024 DevSage. All Rights Reserved.</p>
			</div>
		</footer>
	);
}
