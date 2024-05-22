import { CardItem } from '@/components/shared/card';

import jsIcon from '../../public/assets/icons/js.png';
import tsIcon from '../../public/assets/icons/ts.png';
import reactIcon from '../../public/assets/icons/react.png';
import nodeIcon from '../../public/assets/icons/node.png';
import expressIcon from '../../public/assets/icons/express.png';
import mongoIcon from '../../public/assets/icons/mongodb.png';
import dsaIcon from '../../public/assets/icons/dsa.png';
import oopIcon from '../../public/assets/icons/oop.png';
import dockerIcon from '../../public/assets/icons/docker.png';
import restIcon from '../../public/assets/icons/rest.png';
import solidIcon from '../../public/assets/icons/solid.png';
import sdmIcon from '../../public/assets/icons/sdm.png';
import sdlcIcon from '../../public/assets/icons/sdlc.png';
import essentialConceptsIcon from '../../public/assets/icons/essential-concepts.png';

import designPatternsImg from '../../public/assets/images/design-patterns.jpg';

export const JSCardItem: CardItem = {
	title: 'Javascript',
	imgSrc: jsIcon,
	alt: 'JS Icon',
	href: '/javascript',
	description:
		'JavaScript is the lifeblood of modern web development. This versatile language enables dynamic interactivity on websites and powers complex applications.',
};

export const TSCardItem: CardItem = {
	title: 'Typescript',
	imgSrc: tsIcon,
	alt: 'TS Icon',
	href: '/typescript',
	description:
		'TypeScript is JavaScript with superpowers. It adds static types to the language, enhancing code quality and predictability for large-scale applications.',
};

export const ReactCardItem: CardItem = {
	title: 'React JS',
	imgSrc: reactIcon,
	alt: 'React Icon',
	href: '/react',
	description:
		'React.js is a declarative and efficient JavaScript library for constructing user interfaces. It excels in building large applications with data that changes over time.',
};

export const NodeCardItem: CardItem = {
	title: 'Node JS',
	imgSrc: nodeIcon,
	alt: 'Node Icon',
	href: '/node',
	description:
		'Node.js is a powerhouse for building fast and scalable server-side applications. It utilizes JavaScript, making it a unified language for full-stack development.',
};

export const ExpressCardItem: CardItem = {
	title: 'Express JS',
	imgSrc: expressIcon,
	alt: 'Express Icon',
	href: '/express',
	description:
		'Express.js is a minimal and flexible Node.js web application framework, providing a robust set of features to develop web and mobile applications.',
};

export const MongoCardItem: CardItem = {
	title: 'MongoDB',
	imgSrc: mongoIcon,
	alt: 'Mongodb Icon',
	href: '/mongo',
	description:
		'MongoDB is a leading NoSQL database, favored for its scalability and flexibility. It stores data in JSON-like documents, facilitating a rich, dynamic schema.',
};

export const DockerCardItem: CardItem = {
	title: 'Docker',
	imgSrc: dockerIcon,
	alt: 'Docker Icon',
	href: '/docker',
	description:
		'Docker is a platform that simplifies building, running, and managing containerized applications, ensuring consistency and streamlining deployment across various environments.',
};

export const DSACardItem: CardItem = {
	title: 'Data Structures and Algorithms',
	imgSrc: dsaIcon,
	alt: 'DSA Icon',
	href: '/dsa',
	description:
		'Data Structures and Algorithms (DSA) are fundamental concepts in computer science, essential for efficient problem-solving and software development. They encompass methods of organizing data and step-by-step procedures for processing it, optimizing computational tasks.',
};

export const OOPCardItem: CardItem = {
	title: 'Object Oriented Programming (OOP)',
	imgSrc: oopIcon,
	alt: 'OOP Icon',
	href: '/oop',
	description:
		'Explore the fundamentals of OOP, a programming paradigm that uses objects and classes to create models based on the real world. This approach emphasizes modularity, encapsulation, and inheritance.',
};

export const DesignPatternsCardItem: CardItem = {
	title: 'Design Patterns',
	imgSrc: designPatternsImg,
	alt: 'Design Patterns Icon',
	href: '/design-patterns',
	description:
		'Design patterns are established solutions to common problems in software design. They provide a reusable template for solving architectural issues, facilitating code reusability and flexibility by offering proven development paradigms. Design patterns help developers build robust and maintainable software.',
};

export const RESTCardItem: CardItem = {
	title: 'REST',
	imgSrc: restIcon,
	alt: 'REST Icon',
	href: '/rest',
	description:
		'REST (Representational State Transfer) is an architectural style for designing networked applications. It uses a stateless, client-server, cacheable communications protocol — typically HTTP. RESTful applications use HTTP requests to post data, read data, and delete data in a scalable and flexible manner.',
};

export const SOLIDCardItem: CardItem = {
	title: 'SOLID',
	imgSrc: solidIcon,
	alt: 'SOLID Icon',
	href: '/solid',
	description:
		'SOLID principles are guidelines in object-oriented programming that enhance software maintainability and extensibility. They include Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion, promoting scalable and robust design.',
};

export const SDMCardItem: CardItem = {
	title: 'Software Development Methodologies',
	imgSrc: sdmIcon,
	alt: 'SDM Icon',
	href: '/sdm',
	description:
		'Software Development Methodologies encompass a range of approaches used in the development process that organize tasks, manage workflow, and ensure the delivery of efficient software projects. Popular methodologies include Agile, Scrum, and Waterfall, each tailored to different project needs and team dynamics',
};

export const SDLCCardItem: CardItem = {
	title: 'Software Development Lifecycle',
	imgSrc: sdlcIcon,
	alt: 'SDLC Icon',
	href: '/sdlc',
	description:
		'The Software Development Lifecycle (SDLC) is a systematic process used by developers to design, develop, and test high-quality software. The SDLC provides a structured framework that consists of phases such as planning, analysis, design, implementation, and maintenance to enhance project management and achieve efficient product delivery.',
};

export const EssentialConceptsCardItem: CardItem = {
	title: 'Essential Concepts',
	imgSrc: essentialConceptsIcon,
	alt: 'Essential Concepts Icon',
	href: '/essential-concepts',
	description:
		'Explore core and advanced concepts crucial for modern web development, including detailed insights into the MERN stack, application architectures like MVC, and essential programming paradigms such as Promises and Callbacks. This guide is designed to bolster your understanding of the foundational elements that drive efficient and scalable web applications.',
};
