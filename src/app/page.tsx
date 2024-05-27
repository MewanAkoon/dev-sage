import { Button } from '@/components/ui/button';
import { ArrowRightCircle, MoveUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex w-full h-full items-center justify-center my-8'>
			<div className='sm:-mt-28 -mt-32'>
				<h1 className='text-4xl font-semibold'>DevSage</h1>
				<p className='mt-10 text-xl text-gray-700 leading-8'>
					Welcome to your go-to hub for mastering the MERN stack! Dive into a
					comprehensive collection of interview questions, detailed notes, and
					coding examples focused on JavaScript and TypeScript libraries.
					Whether you&apos;re preparing for an interview or enhancing your
					skills in data structures and algorithms, find all you need right here
					in one convenient place.
				</p>
				<div className='mt-5 flex space-x-2'>
					<Button variant='outline' className='hover:underline' asChild>
						<Link
							className='flex items-center gap-x-1'
							href='/interview-questions'
						>
							Interview Questions <MoveUpRight width={15} height={15} />
						</Link>
					</Button>
					<Button variant='outline' className='hover:underline' asChild>
						<Link href='/documents' className='flex items-center gap-x-1'>
							Documents <MoveUpRight width={15} height={15} />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
