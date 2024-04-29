import { CardItem } from '@/components/shared/card';

import jsLogo from '../../public/assets/logos/js.png';
import tsLogo from '../../public/assets/logos/ts.png';
import reactLogo from '../../public/assets/logos/react.png';
import nodeLogo from '../../public/assets/logos/node.png';
import expressLogo from '../../public/assets/logos/express.png';
import mongoLogo from '../../public/assets/logos/mongodb.png';
import dsaLogo from '../../public/assets/logos/dsa.png';

export const technologies: CardItem[] = [
	{
		title: 'Javascript',
		imgSrc: jsLogo,
		alt: 'JS Logo',
		href: '/javascript',
		description:
			'JavaScript is the lifeblood of modern web development. This versatile language enables dynamic interactivity on websites and powers complex applications.',
	},
	{
		title: 'Typescript',
		imgSrc: tsLogo,
		alt: 'TS Logo',
		href: '/typescript',
		description:
			'TypeScript is JavaScript with superpowers. It adds static types to the language, enhancing code quality and predictability for large-scale applications.',
	},
	{
		title: 'React JS',
		imgSrc: reactLogo,
		alt: 'React Logo',
		href: '/react',
		description:
			'React.js is a declarative and efficient JavaScript library for constructing user interfaces. It excels in building large applications with data that changes over time.',
	},
	{
		title: 'Node JS',
		imgSrc: nodeLogo,
		alt: 'Node Logo',
		href: '/node',
		description:
			'Node.js is a powerhouse for building fast and scalable server-side applications. It utilizes JavaScript, making it a unified language for full-stack development.',
	},
	{
		title: 'Express JS',
		imgSrc: expressLogo,
		alt: 'Express Logo',
		href: '/express',
		description:
			'Express.js is a minimal and flexible Node.js web application framework, providing a robust set of features to develop web and mobile applications.',
	},
	{
		title: 'MongoDB',
		imgSrc: mongoLogo,
		alt: 'Mongodb Logo',
		href: '/mongo',
		description:
			'MongoDB is a leading NoSQL database, favored for its scalability and flexibility. It stores data in JSON-like documents, facilitating a rich, dynamic schema.',
	},
	{
		title: 'Data Structures and Algorithms',
		imgSrc: dsaLogo,
		alt: 'DSA Logo',
		href: '/dsa',
		description:
			'Data Structures and Algorithms (DSA) are fundamental concepts in computer science, essential for efficient problem-solving and software development. They encompass methods of organizing data and step-by-step procedures for processing it, optimizing computational tasks.',
	},
];
