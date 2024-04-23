'use client';

import Link from 'next/link';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
	const pathname = usePathname();

	return (
		<>
			{/* Mobile View */}
			<nav className='flex sm:hidden'>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Image
							src='/assets/icons/menu.svg'
							alt='menu'
							width={24}
							height={24}
							className='cursor-pointer w-auto h-auto'
						/>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-52'>
						<DropdownMenuGroup className='flex flex-col my-2 gap-y-1'>
							{links.map((link) => (
								<DropdownMenuItem asChild key={link.to}>
									<Link
										className={cn('px-4 py-1 hover:text-sky-800', {
											'text-sky-600': pathname === link.to,
										})}
										href={link.to}
									>
										{link.title}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>

			{/* Desktop View */}
			<nav className='hidden sm:flex'>
				<ul className='flex gap-x-6'>
					{links.map((link) => (
						<li key={link.to}>
							<Link
								className={cn('hover:text-sky-800', {
									'text-sky-600': pathname === link.to,
								})}
								href={link.to}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
