'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

import jsLogo from '../../../public/assets/logos/js.png';
import tsLogo from '../../../public/assets/logos/ts.png';
import reactLogo from '../../../public/assets/logos/react.png';
import nodeLogo from '../../../public/assets/logos/node.png';
import expressLogo from '../../../public/assets/logos/express.png';
import mongoLogo from '../../../public/assets/logos/mongodb.png';
import dsaLogo from '../../../public/assets/logos/dsa.png';

const technologies = [
	{
		title: 'Javascript',
		src: jsLogo,
		alt: 'JS Logo',
		href: '/javascript',
		description:
			'JavaScript is the lifeblood of modern web development. This versatile language enables dynamic interactivity on websites and powers complex applications.',
	},
	{
		title: 'Typescript',
		src: tsLogo,
		alt: 'TS Logo',
		href: '/typescript',
		description:
			'TypeScript is JavaScript with superpowers. It adds static types to the language, enhancing code quality and predictability for large-scale applications.',
	},
	{
		title: 'React JS',
		src: reactLogo,
		alt: 'React Logo',
		href: '/react',
		description:
			'React.js is a declarative and efficient JavaScript library for constructing user interfaces. It excels in building large applications with data that changes over time.',
	},
	{
		title: 'Node JS',
		src: nodeLogo,
		alt: 'Node Logo',
		href: '/node',
		description:
			'Node.js is a powerhouse for building fast and scalable server-side applications. It utilizes JavaScript, making it a unified language for full-stack development.',
	},
	{
		title: 'Express JS',
		src: expressLogo,
		alt: 'Express Logo',
		href: '/express',
		description:
			'Express.js is a minimal and flexible Node.js web application framework, providing a robust set of features to develop web and mobile applications.',
	},
	{
		title: 'MongoDB',
		src: mongoLogo,
		alt: 'Mongodb Logo',
		href: '/mongo',
		description:
			'MongoDB is a leading NoSQL database, favored for its scalability and flexibility. It stores data in JSON-like documents, facilitating a rich, dynamic schema.',
	},
	{
		title: 'Data Structures and Algorithms',
		src: dsaLogo,
		alt: 'DSA Logo',
		href: '/dsa',
		description:
			'Data Structures and Algorithms (DSA) are fundamental concepts in computer science, essential for efficient problem-solving and software development. They encompass methods of organizing data and step-by-step procedures for processing it, optimizing computational tasks.',
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
								width={64}
								height={64}
								className='w-16 h-16 object-contain'
								priority
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
