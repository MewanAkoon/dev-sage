import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './navItems';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function Header() {
	return (
		<header className='bg-slate-100 w-full h-fit'>
			<div className='wrapper flex justify-between items-center'>
				<Link href='/' className='flex gap-x-4'>
					<Image
						src='/assets/images/logo.png'
						alt='logo'
						width={20}
						height={20}
					/>
					DevSage
				</Link>

				{/* Mobile View */}
				<nav className='flex sm:hidden'>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Image
								src='/assets/icons/menu.svg'
								alt='menu'
								width={24}
								height={24}
								className='cursor-pointer'
							/>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<NavItems />
						</DropdownMenuContent>
					</DropdownMenu>
				</nav>

				{/* Desktop View */}
				<nav className='hidden sm:flex'>
					<NavItems />
				</nav>
			</div>
		</header>
	);
}
