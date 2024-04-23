'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const technologies = [
	{
		title: 'Javascript',
		src: '/assets/logos/js.png',
		alt: 'js logo',
		href: '/javascript',
		description:
			'JavaScript is the lifeblood of modern web development. This versatile language enables dynamic interactivity on websites and powers complex applications.',
	},
	{
		title: 'Typescript',
		src: '/assets/logos/ts.png',
		alt: 'ts logo',
		href: '/typescript',
		description:
			'TypeScript is JavaScript with superpowers. It adds static types to the language, enhancing code quality and predictability for large-scale applications.',
	},
	{
		title: 'React JS',
		src: '/assets/logos/react.png',
		alt: 'react logo',
		href: '/react',
		description:
			'React.js is a declarative and efficient JavaScript library for constructing user interfaces. It excels in building large applications with data that changes over time.',
	},
	{
		title: 'Node JS',
		src: '/assets/logos/node.png',
		alt: 'node logo',
		href: '/node',
		description:
			'Node.js is a powerhouse for building fast and scalable server-side applications. It utilizes JavaScript, making it a unified language for full-stack development.',
	},
	{
		title: 'Express JS',
		src: '/assets/logos/express.png',
		alt: 'express logo',
		href: '/express',
		description:
			'Express.js is a minimal and flexible Node.js web application framework, providing a robust set of features to develop web and mobile applications.',
	},
	{
		title: 'MongoDB',
		src: '/assets/logos/mongodb.png',
		alt: 'mongodb logo',
		href: '/mongo',
		description:
			'MongoDB is a leading NoSQL database, favored for its scalability and flexibility. It stores data in JSON-like documents, facilitating a rich, dynamic schema.',
	},
] as const;

export default function Page() {
	const route = useRouter();
	const pathname = usePathname();

	return (
		<main>
			<h1 className='text-center my-8'>Interview Questions</h1>

			<div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10'>
				{technologies.map((tech) => (
					<div
						key={tech.title}
						className='group relative border border-1 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500 shadow rounded cursor-pointer hover:bg-gray-50'
						onClick={() => route.push(`${pathname}/${tech.href}`)}
					>
						<div className='inline-flex rounded-lg'>
							<Image
								src={tech.src}
								alt={tech.alt}
								width={60}
								height={60}
								className='w-auto h-auto'
							/>
						</div>
						<div className='mt-6'>
							<h3 className='text-base font-semibold leading-6 text-gray-900'>
								{tech.title}
							</h3>
							<p className='mt-2 text-sm text-gray-500'>{tech.description}</p>
						</div>
						<span
							className='pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400'
							aria-hidden='true'
						>
							<svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
								<path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
							</svg>
						</span>
					</div>
				))}
			</div>
		</main>
	);
}